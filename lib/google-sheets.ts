import crypto from "node:crypto";

// Ghi một dòng vào Google Sheets từ phía máy chủ.
//
// CỐ Ý không dùng thư viện googleapis — nó nặng và kéo theo hàng chục gói phụ
// thuộc. Ở đây chỉ cần hai việc: tự kí một JWT bằng khoá của service account
// để đổi lấy access token, rồi gọi thẳng REST API của Sheets. Cả hai đều làm
// được bằng crypto và fetch có sẵn của Node.
//
// TỆP NÀY CHỈ ĐƯỢC IMPORT TỪ PHÍA MÁY CHỦ (app/api/**). Khoá bí mật nằm trong
// biến môi trường, tuyệt đối không để lọt xuống mã chạy trên trình duyệt.

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/spreadsheets";

type CacheToken = { token: string; hetHan: number };
let cache: CacheToken | null = null;

function bienMoiTruong() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  // Khoá dán vào Vercel thường có "\n" dạng hai kí tự, phải đổi lại thành
  // xuống dòng thật thì crypto mới đọc được.
  const khoa = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!email || !khoa || !sheetId) return null;
  return { email, khoa, sheetId };
}

export function daCauHinh() {
  return bienMoiTruong() !== null;
}

function base64url(o: unknown) {
  return Buffer.from(JSON.stringify(o)).toString("base64url");
}

async function layAccessToken(email: string, khoa: string): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  // Còn hạn ít nhất 60 giây thì dùng lại, đỡ gọi Google mỗi lần nộp bài.
  if (cache && cache.hetHan - 60 > now) return cache.token;

  const header = { alg: "RS256", typ: "JWT" };
  const claim = {
    iss: email,
    scope: SCOPE,
    aud: TOKEN_URL,
    exp: now + 3600,
    iat: now,
  };
  const chuaKi = `${base64url(header)}.${base64url(claim)}`;
  const chuKi = crypto.createSign("RSA-SHA256").update(chuaKi).sign(khoa, "base64url");

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${chuaKi}.${chuKi}`,
    }),
  });

  if (!res.ok) {
    throw new Error(`Không lấy được access token (HTTP ${res.status})`);
  }
  const data = (await res.json()) as { access_token: string; expires_in: number };
  cache = { token: data.access_token, hetHan: now + data.expires_in };
  return data.access_token;
}

/** Ghi thêm một dòng vào cuối trang tính. Ném lỗi nếu thất bại. */
export async function themDong(dong: (string | number)[]): Promise<void> {
  const env = bienMoiTruong();
  if (!env) throw new Error("Chưa cấu hình biến môi trường Google Sheets");

  const token = await layAccessToken(env.email, env.khoa);
  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${env.sheetId}` +
    `/values/A:I:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values: [dong] }),
  });

  if (!res.ok) {
    const chiTiet = await res.text();
    throw new Error(`Ghi bảng tính thất bại (HTTP ${res.status}): ${chiTiet.slice(0, 300)}`);
  }
}
