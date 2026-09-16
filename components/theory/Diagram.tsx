// Kho hình vẽ minh hoạ cho phần Lý thuyết.
//
// Tất cả đều là SVG viết tay, nhúng thẳng vào trang — không tải ảnh từ ngoài
// nên không phụ thuộc mạng, phóng to không vỡ, và màu ăn theo bảng màu lớp 12.
// Khối { kind: "figure", diagram: "<khoá>" } trong data/theory/* tra vào đây.
//
// Thêm hình mới: viết một component rồi khai báo thêm một dòng trong DIAGRAMS.

const C = {
  ink: "#12212B",
  inkSoft: "#4C5D6B",
  sea: "#0D7C86",
  seaDeep: "#075B63",
  coral: "#F2683C",
  leaf: "#0E9F6E",
  leafDeep: "#0B6E4F",
  gold: "#EFA31D",
  goldDeep: "#8F5D02",
  line: "#C9DDE0",
  white: "#FFFFFF",
};

// SVG không tự xuống dòng — mỗi phần tử của mảng là một dòng.
function Lines({
  x,
  y,
  lines,
  size = 13,
  fill = C.inkSoft,
  weight = 400,
  gap = 17,
  anchor = "middle",
}: {
  x: number;
  y: number;
  lines: string[];
  size?: number;
  fill?: string;
  weight?: number;
  gap?: number;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text x={x} y={y} fontSize={size} fill={fill} fontWeight={weight} textAnchor={anchor}>
      {lines.map((l, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : gap}>
          {l}
        </tspan>
      ))}
    </text>
  );
}

function Frame({
  viewBox,
  children,
}: {
  viewBox: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox={viewBox}
      className="h-auto w-full"
      role="img"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill={C.sea} />
        </marker>
        <marker id="arrow-soft" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill={C.line} />
        </marker>
        <marker id="arrow-coral" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill={C.coral} />
        </marker>
      </defs>
      {children}
    </svg>
  );
}

// ── Phép thử Turing (Bài 1) ──────────────────────────────────────────────────
function TuringTest() {
  return (
    <Frame viewBox="0 0 640 330">
      {/* Giám khảo */}
      <rect x="14" y="105" width="150" height="110" rx="18" fill={C.sea} fillOpacity="0.1" stroke={C.sea} strokeWidth="2" />
      <text x="89" y="150" fontSize="34" textAnchor="middle">
        🧑‍⚖️
      </text>
      <Lines x={89} y={178} lines={["Giám khảo"]} size={14} weight={600} fill={C.seaDeep} />
      <Lines x={89} y={197} lines={["(là con người)"]} size={12} />

      {/* Đường trao đổi */}
      <path d="M168 140 L 300 105 L 372 78" stroke={C.line} strokeWidth="2.5" fill="none" markerEnd="url(#arrow-soft)" />
      <path d="M168 180 L 300 215 L 372 242" stroke={C.line} strokeWidth="2.5" fill="none" markerEnd="url(#arrow-soft)" />
      <rect x="228" y="140" width="146" height="40" rx="12" fill={C.white} stroke={C.line} strokeWidth="1.5" />
      <Lines x={301} y={156} lines={["💬 chỉ nhắn tin,", "không nhìn thấy mặt"]} size={12} gap={14} />

      {/* Hai phòng kín */}
      <rect x="378" y="42" width="248" height="74" rx="16" fill={C.leaf} fillOpacity="0.08" stroke={C.leaf} strokeWidth="2" />
      <text x="416" y="88" fontSize="28" textAnchor="middle">
        🧑
      </text>
      <Lines x={447} y={74} lines={["Phòng A"]} size={12} weight={700} fill={C.leafDeep} anchor="start" />
      <Lines x={447} y={94} lines={["một người thật"]} size={12} anchor="start" />

      <rect x="378" y="206" width="248" height="74" rx="16" fill={C.coral} fillOpacity="0.1" stroke={C.coral} strokeWidth="2" />
      <text x="416" y="252" fontSize="28" textAnchor="middle">
        🤖
      </text>
      <Lines x={447} y={238} lines={["Phòng B"]} size={12} weight={700} fill={C.coral} anchor="start" />
      <Lines x={447} y={258} lines={["một máy tính"]} size={12} anchor="start" />

      {/* Câu hỏi ở giữa */}
      <text x="502" y="172" fontSize="26" textAnchor="middle" fill={C.gold} fontWeight="700">
        ❓
      </text>
      <Lines x={502} y={148} lines={["Bên nào là máy?"]} size={12} weight={600} fill={C.goldDeep} />

      {/* Kết luận */}
      <rect x="14" y="290" width="612" height="34" rx="17" fill={C.gold} fillOpacity="0.14" />
      <Lines
        x={320}
        y={312}
        lines={["Giám khảo KHÔNG đoán ra bên nào là máy → máy đó được coi là có hành vi thông minh"]}
        size={12.5}
        weight={600}
        fill={C.goldDeep}
      />
    </Frame>
  );
}

// ── AI hẹp/yếu và AI tổng quát/mạnh (Bài 1) ─────────────────────────────────
function AiHepVaManh() {
  return (
    <Frame viewBox="0 0 640 280">
      {/* Bên trái: AI hẹp */}
      <rect x="10" y="20" width="270" height="200" rx="20" fill={C.sea} fillOpacity="0.09" stroke={C.sea} strokeWidth="2" />
      <text x="145" y="66" fontSize="30" textAnchor="middle">
        🎯
      </text>
      <Lines x={145} y={94} lines={["Trí tuệ nhân tạo hẹp"]} size={14.5} weight={700} fill={C.seaDeep} />
      <Lines x={145} y={113} lines={["(Trí tuệ nhân tạo yếu)"]} size={12} fill={C.sea} />
      <Lines
        x={145}
        y={143}
        lines={["Chỉ được thiết kế để làm", "GIỎI ĐÚNG MỘT việc cụ thể"]}
        size={12.5}
        gap={17}
      />
      <Lines
        x={145}
        y={186}
        lines={["Ví dụ: chương trình chơi cờ,", "nhận dạng khuôn mặt, dự báo thời tiết"]}
        size={12}
        gap={15}
        fill={C.inkSoft}
      />
      <rect x="72" y="228" width="146" height="28" rx="14" fill={C.leaf} fillOpacity="0.16" />
      <Lines x={145} y={247} lines={["✅ Toàn bộ AI hiện nay"]} size={12} weight={700} fill={C.leafDeep} />

      {/* Mũi tên */}
      <path d="M292 120 L 348 120" stroke={C.line} strokeWidth="3" fill="none" markerEnd="url(#arrow-soft)" />

      {/* Bên phải: AI mạnh */}
      <rect
        x="360"
        y="20"
        width="270"
        height="200"
        rx="20"
        fill={C.gold}
        fillOpacity="0.08"
        stroke={C.gold}
        strokeWidth="2"
        strokeDasharray="8 6"
      />
      <text x="495" y="66" fontSize="30" textAnchor="middle">
        🌟
      </text>
      <Lines x={495} y={94} lines={["Trí tuệ nhân tạo tổng quát"]} size={14.5} weight={700} fill={C.goldDeep} />
      <Lines x={495} y={113} lines={["(Trí tuệ nhân tạo mạnh)"]} size={12} fill={C.goldDeep} />
      <Lines
        x={495}
        y={143}
        lines={["Tự học, tự thích nghi và làm", "được NHIỀU việc như con người"]}
        size={12.5}
        gap={17}
      />
      <Lines
        x={495}
        y={186}
        lines={["Biết áp dụng tri thức của lĩnh vực này", "sang một lĩnh vực khác"]}
        size={12}
        gap={15}
        fill={C.inkSoft}
      />
      <rect x="399" y="228" width="192" height="28" rx="14" fill={C.coral} fillOpacity="0.16" />
      <Lines x={495} y={247} lines={["🎯 Mục tiêu dài hạn — CHƯA đạt được"]} size={12} weight={700} fill={C.coral} />
    </Frame>
  );
}

// ── AI len vào những lĩnh vực nào (Bài 2) ───────────────────────────────────
function AiLinhVuc() {
  const left = [
    { emoji: "🧠", title: "Hệ chuyên gia", desc: "tự học luật từ dữ liệu" },
    { emoji: "🏥", title: "Y học, sức khoẻ", desc: "chẩn đoán, đọc ảnh y tế" },
    { emoji: "🚗", title: "Giao thông vận tải", desc: "xe tự lái, định tuyến" },
  ];
  const right = [
    { emoji: "🏦", title: "Tài chính, ngân hàng", desc: "phát hiện gian lận" },
    { emoji: "🏭", title: "Sản xuất", desc: "robot, trang trại thông minh" },
    { emoji: "🎓", title: "Giáo dục", desc: "học tập cá nhân hoá" },
  ];
  const ys = [26, 142, 258];

  return (
    <Frame viewBox="0 0 640 350">
      {ys.map((y, i) => (
        <g key={`l${i}`}>
          <path d={`M198 ${y + 32} L 262 175`} stroke={C.line} strokeWidth="2" fill="none" />
          <rect x="10" y={y} width="188" height="64" rx="16" fill={C.white} stroke={C.line} strokeWidth="2" />
          <text x="38" y={y + 40} fontSize="22" textAnchor="middle">
            {left[i].emoji}
          </text>
          <Lines x={60} y={y + 28} lines={[left[i].title]} size={12.5} weight={700} fill={C.ink} anchor="start" />
          <Lines x={60} y={y + 46} lines={[left[i].desc]} size={12} anchor="start" />
        </g>
      ))}

      {ys.map((y, i) => (
        <g key={`r${i}`}>
          <path d={`M442 ${y + 32} L 378 175`} stroke={C.line} strokeWidth="2" fill="none" />
          <rect x="442" y={y} width="188" height="64" rx="16" fill={C.white} stroke={C.line} strokeWidth="2" />
          <text x="470" y={y + 40} fontSize="22" textAnchor="middle">
            {right[i].emoji}
          </text>
          <Lines x={492} y={y + 28} lines={[right[i].title]} size={12.5} weight={700} fill={C.ink} anchor="start" />
          <Lines x={492} y={y + 46} lines={[right[i].desc]} size={12} anchor="start" />
        </g>
      ))}

      <circle cx="320" cy="175" r="58" fill={C.sea} />
      <text x="320" y="170" fontSize="30" textAnchor="middle" fill={C.white} fontWeight="700">
        AI
      </text>
      <Lines x={320} y={192} lines={["Trí tuệ", "nhân tạo"]} size={12} gap={14} fill={C.white} />
    </Frame>
  );
}

// ── ChatGPT hoạt động thế nào (Bài 2) ───────────────────────────────────────
function ChatGptFlow() {
  return (
    <Frame viewBox="0 0 640 400">
      <rect x="60" y="8" width="520" height="66" rx="18" fill={C.leaf} fillOpacity="0.09" stroke={C.leaf} strokeWidth="2" />
      <text x="106" y="50" fontSize="26" textAnchor="middle">
        📚
      </text>
      <Lines x={140} y={34} lines={["Kho văn bản khổng lồ"]} size={13.5} weight={700} fill={C.leafDeep} anchor="start" />
      <Lines x={140} y={54} lines={["hàng vạn văn bản: sách, bài báo, trang web…"]} size={12} anchor="start" />

      <path d="M320 78 L 320 106" stroke={C.sea} strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />

      <rect x="60" y="112" width="520" height="66" rx="18" fill={C.sea} fillOpacity="0.09" stroke={C.sea} strokeWidth="2" />
      <text x="106" y="154" fontSize="26" textAnchor="middle">
        ⚙️
      </text>
      <Lines x={140} y={138} lines={["Huấn luyện"]} size={13.5} weight={700} fill={C.seaDeep} anchor="start" />
      <Lines x={140} y={158} lines={["máy tự HỌC quy luật của ngôn ngữ từ kho dữ liệu đó"]} size={12} anchor="start" />

      <path d="M320 182 L 320 210" stroke={C.sea} strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />

      <rect x="60" y="216" width="520" height="84" rx="18" fill={C.coral} fillOpacity="0.1" stroke={C.coral} strokeWidth="2" />
      <text x="106" y="266" fontSize="26" textAnchor="middle">
        🤖
      </text>
      <Lines x={140} y={244} lines={["ChatGPT"]} size={13.5} weight={700} fill={C.coral} anchor="start" />
      <Lines
        x={140}
        y={264}
        lines={["một hệ thống CÓ TRI THỨC, biết SUY LUẬN,", "hiểu được ngữ cảnh của câu hỏi"]}
        size={12}
        gap={16}
        anchor="start"
      />

      <path d="M296 304 L 296 334" stroke={C.sea} strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />
      <path d="M344 334 L 344 304" stroke={C.sea} strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />
      <Lines x={430} y={324} lines={["hỏi – đáp qua lại nhiều lượt"]} size={12} anchor="start" />

      <rect x="60" y="338" width="520" height="56" rx="18" fill={C.white} stroke={C.line} strokeWidth="2" />
      <text x="106" y="374" fontSize="26" textAnchor="middle">
        🧑‍🎓
      </text>
      <Lines x={140} y={362} lines={["Người dùng"]} size={13.5} weight={700} fill={C.ink} anchor="start" />
      <Lines x={140} y={381} lines={["hỏi bằng ngôn ngữ thường ngày, không cần câu lệnh"]} size={12} anchor="start" />
    </Frame>
  );
}

// ── Hub phát tán, switch nối đúng cặp cổng (Bài 3) ──────────────────────────
// Một nửa khung là hub, một nửa là switch, cùng một tình huống: máy A gửi dữ
// liệu cho máy C. Nhìn số mũi tên cam là thấy ngay vì sao hub dễ xung đột.
function HubSwitchPanel({
  px,
  title,
  subtitle,
  accent,
  toAll,
  note,
}: {
  px: number;
  title: string;
  subtitle: string;
  accent: string;
  toAll: boolean;
  note: string[];
}) {
  const names = ["A", "B", "C", "D"];
  const pcX = [px + 7, px + 85, px + 163, px + 241]; // góc trái mỗi máy
  const center = (i: number) => pcX[i] + 29;
  const conn = (i: number) => px + 92 + 40 * i; // điểm nối dưới thiết bị

  return (
    <g>
      <rect x={px} y="8" width="304" height="294" rx="18" fill={accent} fillOpacity="0.05" stroke={accent} strokeWidth="2" />
      <Lines x={px + 152} y={34} lines={[title]} size={15} weight={700} fill={accent} />
      <Lines x={px + 152} y={52} lines={[subtitle]} size={12} />

      {/* Thiết bị */}
      <rect x={px + 72} y="70" width="160" height="38" rx="10" fill={accent} />
      <Lines x={px + 152} y={94} lines={[title.split(" ")[0]]} size={14} weight={700} fill={C.white} />

      {/* Cáp mạng nối tới cả 4 máy */}
      {names.map((_, i) => (
        <path key={`c${i}`} d={`M${conn(i)} 108 L ${center(i)} 178`} stroke={C.line} strokeWidth="2" fill="none" />
      ))}

      {/* Máy A gửi dữ liệu đi */}
      <path
        d={`M${center(0)} 178 L ${conn(0)} 112`}
        stroke={C.coral}
        strokeWidth="3"
        fill="none"
        markerEnd="url(#arrow-coral)"
      />
      {/* Thiết bị chuyển tiếp: hub ra mọi cổng, switch chỉ ra cổng của máy C */}
      {[1, 2, 3]
        .filter((i) => toAll || i === 2)
        .map((i) => (
          <path
            key={`o${i}`}
            d={`M${conn(i)} 108 L ${center(i)} 174`}
            stroke={C.coral}
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrow-coral)"
          />
        ))}

      {/* Bốn máy tính */}
      {names.map((n, i) => {
        const active = i === 0 || toAll || i === 2;
        return (
          <g key={n}>
            <rect
              x={pcX[i]}
              y="178"
              width="58"
              height="52"
              rx="12"
              fill={C.white}
              stroke={active ? C.coral : C.line}
              strokeWidth="2"
            />
            <text x={center(i)} y="203" fontSize="19" textAnchor="middle">
              💻
            </text>
            <Lines x={center(i)} y={222} lines={[n]} size={12} weight={700} fill={active ? C.coral : C.inkSoft} />
          </g>
        );
      })}
      <Lines x={center(0)} y={248} lines={["máy gửi"]} size={12} weight={600} fill={C.coral} />
      <Lines x={center(2)} y={248} lines={["máy nhận"]} size={12} weight={600} fill={C.coral} />

      <Lines x={px + 152} y={274} lines={note} size={12} gap={16} fill={C.ink} />
    </g>
  );
}

function HubVsSwitch() {
  return (
    <Frame viewBox="0 0 640 310">
      <HubSwitchPanel
        px={8}
        title="HUB (bộ chia tín hiệu)"
        subtitle="Máy A gửi dữ liệu cho máy C"
        accent={C.coral}
        toAll
        note={["Tín hiệu phát tán ra TẤT CẢ các cổng còn lại.", "Càng nhiều máy, nguy cơ xung đột càng cao."]}
      />
      <HubSwitchPanel
        px={328}
        title="SWITCH (bộ chuyển mạch)"
        subtitle="Máy A gửi dữ liệu cho máy C"
        accent={C.sea}
        toAll={false}
        note={["Chỉ mở kênh truyền tạm thời giữa đúng cặp", "cổng gửi – nhận, truyền xong thì huỷ kênh."]}
      />
    </Frame>
  );
}

// ── Router, cổng LAN và cổng WAN (Bài 3) ────────────────────────────────────
function RouterLanWan() {
  return (
    <Frame viewBox="0 0 640 350">
      {/* LAN của máy gửi */}
      <rect x="8" y="18" width="228" height="86" rx="20" fill={C.leaf} fillOpacity="0.08" stroke={C.leaf} strokeWidth="2" />
      <text x="52" y="62" fontSize="24" textAnchor="middle">
        💻
      </text>
      <text x="96" y="62" fontSize="20" textAnchor="middle">
        🔀
      </text>
      <Lines x={168} y={54} lines={["LAN nhà em"]} size={13} weight={700} fill={C.leafDeep} />
      <Lines x={168} y={74} lines={["máy tính nối qua switch"]} size={12} />

      <path d="M240 58 L 274 58" stroke={C.coral} strokeWidth="3" fill="none" markerEnd="url(#arrow-coral)" />

      {/* Router bên gửi */}
      <rect x="278" y="26" width="150" height="70" rx="14" fill={C.white} stroke={C.sea} strokeWidth="2.5" />
      <Lines x={353} y={46} lines={["ROUTER"]} size={13} weight={700} fill={C.seaDeep} />
      <rect x="288" y="56" width="62" height="30" rx="8" fill={C.leaf} fillOpacity="0.16" />
      <Lines x={319} y={70} lines={["cổng", "LAN"]} size={12} gap={13} weight={600} fill={C.leafDeep} />
      <rect x="356" y="56" width="62" height="30" rx="8" fill={C.gold} fillOpacity="0.2" />
      <Lines x={387} y={70} lines={["cổng", "WAN"]} size={12} gap={13} weight={600} fill={C.goldDeep} />

      <path d="M432 60 L 466 60" stroke={C.coral} strokeWidth="3" fill="none" markerEnd="url(#arrow-coral)" />

      {/* Internet */}
      <ellipse cx="556" cy="112" rx="76" ry="60" fill={C.sea} fillOpacity="0.09" stroke={C.sea} strokeWidth="2" strokeDasharray="7 5" />
      <text x="556" y="92" fontSize="26" textAnchor="middle">
        🌐
      </text>
      <Lines x={556} y={116} lines={["Internet"]} size={14} weight={700} fill={C.seaDeep} />
      <Lines x={556} y={136} lines={["dữ liệu trung chuyển", "qua nhiều router"]} size={12} gap={15} />

      <path d="M556 174 L 556 210" stroke={C.coral} strokeWidth="3" fill="none" markerEnd="url(#arrow-coral)" />

      {/* Router bên nhận */}
      <rect x="352" y="214" width="150" height="70" rx="14" fill={C.white} stroke={C.sea} strokeWidth="2.5" />
      <Lines x={427} y={234} lines={["ROUTER"]} size={13} weight={700} fill={C.seaDeep} />
      <rect x="362" y="244" width="62" height="30" rx="8" fill={C.leaf} fillOpacity="0.16" />
      <Lines x={393} y={258} lines={["cổng", "LAN"]} size={12} gap={13} weight={600} fill={C.leafDeep} />
      <rect x="430" y="244" width="62" height="30" rx="8" fill={C.gold} fillOpacity="0.2" />
      <Lines x={461} y={258} lines={["cổng", "WAN"]} size={12} gap={13} weight={600} fill={C.goldDeep} />

      <path d="M348 248 L 314 248" stroke={C.coral} strokeWidth="3" fill="none" markerEnd="url(#arrow-coral)" />

      {/* LAN của máy nhận */}
      <rect x="80" y="206" width="228" height="86" rx="20" fill={C.leaf} fillOpacity="0.08" stroke={C.leaf} strokeWidth="2" />
      <text x="268" y="250" fontSize="24" textAnchor="middle">
        💻
      </text>
      <Lines x={172} y={242} lines={["LAN trường em"]} size={13} weight={700} fill={C.leafDeep} />
      <Lines x={172} y={262} lines={["dữ liệu tới máy nhận"]} size={12} />

      {/* Kết luận */}
      <rect x="8" y="308" width="624" height="34" rx="17" fill={C.gold} fillOpacity="0.14" />
      <Lines
        x={320}
        y={330}
        lines={["Định tuyến = router chọn cổng thích hợp để dữ liệu đi tới được đúng LAN của máy nhận"]}
        size={12.5}
        weight={600}
        fill={C.goldDeep}
      />
    </Frame>
  );
}

// ── Modem đứng giữa tín hiệu số và tín hiệu tương tự (Bài 3) ────────────────
function ModemSoTuongTu() {
  // Sóng vuông = tín hiệu số, sóng hình sin = tín hiệu tương tự.
  const song = "M0 12 L 12 12 L 12 0 L 26 0 L 26 12 L 40 12 L 40 0 L 54 0 L 54 12 L 66 12";
  const sin = "M0 6 Q 8 -8 16 6 T 32 6 T 48 6 T 64 6";

  return (
    <Frame viewBox="0 0 640 430">
      <rect x="40" y="8" width="560" height="74" rx="18" fill={C.leaf} fillOpacity="0.09" stroke={C.leaf} strokeWidth="2" />
      <text x="84" y="52" fontSize="25" textAnchor="middle">
        💻
      </text>
      <Lines x={118} y={36} lines={["Máy tính trong LAN"]} size={13.5} weight={700} fill={C.leafDeep} anchor="start" />
      <Lines x={118} y={56} lines={["tín hiệu số (digital): các giá trị logic 0 và 1"]} size={12} anchor="start" />
      <g transform="translate(508, 38)">
        <path d={song} stroke={C.leafDeep} strokeWidth="2.5" fill="none" />
      </g>

      <path d="M304 86 L 304 112" stroke={C.sea} strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />
      <path d="M336 112 L 336 86" stroke={C.sea} strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />

      <rect x="40" y="118" width="560" height="74" rx="18" fill={C.sea} fillOpacity="0.09" stroke={C.sea} strokeWidth="2" />
      <text x="84" y="162" fontSize="25" textAnchor="middle">
        📡
      </text>
      <Lines x={118} y={146} lines={["Router"]} size={13.5} weight={700} fill={C.seaDeep} anchor="start" />
      <Lines x={118} y={166} lines={["chỉ hướng luồng dữ liệu tới đích, KHÔNG chuyển đổi tín hiệu"]} size={12} anchor="start" />

      <path d="M304 196 L 304 222" stroke={C.sea} strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />
      <path d="M336 222 L 336 196" stroke={C.sea} strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />

      <rect x="40" y="228" width="560" height="82" rx="18" fill={C.coral} fillOpacity="0.11" stroke={C.coral} strokeWidth="2.5" />
      <text x="84" y="276" fontSize="25" textAnchor="middle">
        🔄
      </text>
      <Lines x={118} y={254} lines={["MODEM"]} size={13.5} weight={700} fill={C.coral} anchor="start" />
      <Lines
        x={118}
        y={274}
        lines={["đổi tín hiệu số ↔ tín hiệu tương tự.", "Chỉ đổi DẠNG tín hiệu, không làm thay đổi dữ liệu."]}
        size={12}
        gap={16}
        anchor="start"
      />

      <path d="M304 314 L 304 340" stroke={C.sea} strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />
      <path d="M336 340 L 336 314" stroke={C.sea} strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />

      <rect x="40" y="346" width="560" height="74" rx="18" fill={C.gold} fillOpacity="0.12" stroke={C.gold} strokeWidth="2" />
      <text x="84" y="390" fontSize="25" textAnchor="middle">
        🌐
      </text>
      <Lines x={118} y={374} lines={["Nhà cung cấp dịch vụ Internet"]} size={13.5} weight={700} fill={C.goldDeep} anchor="start" />
      <Lines x={118} y={394} lines={["tín hiệu tương tự (analog): cáp quang, sóng 3G/4G/5G…"]} size={12} anchor="start" />
      <g transform="translate(508, 378)">
        <path d={sin} stroke={C.goldDeep} strokeWidth="2.5" fill="none" />
      </g>
    </Frame>
  );
}

// ── Địa chỉ IP: 4 byte nhị phân thành 4 số thập phân (Bài 4) ────────────────
function DiaChiIp() {
  const nhiPhan = ["00001010", "00011001", "00000000", "11111111"];
  const thapPhan = ["10", "25", "0", "255"];
  const colX = [10, 170, 330, 490]; // 4 cột rộng 140, cách nhau 20

  return (
    <Frame viewBox="0 0 640 250">
      <Lines x={320} y={22} lines={["Địa chỉ IP (IPv4) = 4 byte = 32 bit"]} size={14} weight={700} fill={C.ink} />

      {nhiPhan.map((b, i) => (
        <g key={b + i}>
          <rect x={colX[i]} y="36" width="140" height="34" rx="10" fill={C.sea} fillOpacity="0.09" stroke={C.sea} strokeWidth="1.5" />
          <text
            x={colX[i] + 70}
            y="59"
            fontSize="14"
            textAnchor="middle"
            fill={C.seaDeep}
            fontWeight="600"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {b}
          </text>
          <Lines x={colX[i] + 70} y={86} lines={["1 byte = 8 bit"]} size={12} />
          <path d={`M${colX[i] + 70} 94 L ${colX[i] + 70} 118`} stroke={C.coral} strokeWidth="2.5" fill="none" markerEnd="url(#arrow-coral)" />
          <rect x={colX[i] + 38} y="124" width="64" height="40" rx="12" fill={C.coral} fillOpacity="0.12" stroke={C.coral} strokeWidth="2" />
          <text x={colX[i] + 70} y="151" fontSize="19" textAnchor="middle" fill={C.coral} fontWeight="700">
            {thapPhan[i]}
          </text>
        </g>
      ))}

      {/* Dấu chấm ngăn giữa các byte */}
      {[160, 320, 480].map((x) => (
        <text key={x} x={x} y="152" fontSize="22" textAnchor="middle" fill={C.coral} fontWeight="700">
          .
        </text>
      ))}

      <rect x="170" y="182" width="300" height="42" rx="14" fill={C.gold} fillOpacity="0.14" />
      <text x="320" y="210" fontSize="21" textAnchor="middle" fill={C.goldDeep} fontWeight="700">
        10.25.0.255
      </text>
      <Lines
        x={320}
        y={240}
        lines={["cách viết “dot decimal”: mỗi byte một số thập phân, ngăn nhau bởi dấu chấm"]}
        size={12}
      />
    </Frame>
  );
}

// ── Bảng định tuyến và cổng mặc định (Bài 4) ────────────────────────────────
function BangDinhTuyen() {
  const rows = [
    { dia: "126.13.*.*", cong: "1", ghi: "Mỹ, cổng mặc định", mac: true },
    { dia: "172.18.*.*", cong: "2", ghi: "Hồng Kông", mac: false },
    { dia: "113.23.12.*", cong: "3", ghi: "Singapore", mac: false },
    { dia: "230.17.*.*", cong: "4", ghi: "Thái Lan", mac: false },
  ];

  return (
    <Frame viewBox="0 0 640 330">
      <Lines
        x={320}
        y={26}
        lines={["Bảng định tuyến của một router  (dấu * = bất cứ giá trị nào)"]}
        size={13.5}
        weight={700}
        fill={C.ink}
      />

      {/* Hàng tiêu đề */}
      <rect x="60" y="42" width="520" height="34" rx="8" fill={C.sea} />
      <Lines x={72} y={64} lines={["Địa chỉ"]} size={12.5} weight={700} fill={C.white} anchor="start" />
      <Lines x={285} y={64} lines={["Cổng"]} size={12.5} weight={700} fill={C.white} anchor="middle" />
      <Lines x={342} y={64} lines={["Ghi chú"]} size={12.5} weight={700} fill={C.white} anchor="start" />

      {rows.map((r, i) => {
        const y = 76 + i * 34;
        return (
          <g key={r.dia}>
            <rect
              x="60"
              y={y}
              width="520"
              height="34"
              fill={r.mac ? C.gold : C.white}
              fillOpacity={r.mac ? 0.18 : 1}
              stroke={C.line}
              strokeWidth="1.5"
            />
            <text
              x="72"
              y={y + 22}
              fontSize="13"
              fill={C.ink}
              fontWeight="600"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {r.dia}
            </text>
            <Lines x={285} y={y + 22} lines={[r.cong]} size={13} weight={700} fill={C.seaDeep} />
            <Lines x={342} y={y + 22} lines={[r.ghi]} size={12.5} anchor="start" />
          </g>
        );
      })}

      {/* Ví dụ tra bảng */}
      <rect x="60" y="230" width="520" height="40" rx="14" fill={C.sea} fillOpacity="0.09" stroke={C.sea} strokeWidth="1.5" />
      <Lines
        x={320}
        y={255}
        lines={["Gói gửi tới 172.18.4.9  →  khớp dòng 172.18.*.*  →  đi ra cổng 2"]}
        size={12.5}
        weight={600}
        fill={C.seaDeep}
      />

      <rect x="60" y="280" width="520" height="40" rx="14" fill={C.gold} fillOpacity="0.16" />
      <Lines
        x={320}
        y={305}
        lines={["Địa chỉ không khớp dòng nào  →  đi theo CỔNG MẶC ĐỊNH (cổng 1)"]}
        size={12.5}
        weight={600}
        fill={C.goldDeep}
      />
    </Frame>
  );
}

// ── TCP cắt dữ liệu thành gói, đánh số rồi ráp lại (Bài 4) ──────────────────
function TcpCatGoi() {
  const goiX = [54, 192, 330, 468]; // 4 gói rộng 118, cách nhau 20
  const denNoi = ["Gói 3", "Gói 1", "Gói 4", "Gói 2"];

  return (
    <Frame viewBox="0 0 640 380">
      <rect x="40" y="8" width="560" height="42" rx="14" fill={C.leaf} fillOpacity="0.09" stroke={C.leaf} strokeWidth="2" />
      <Lines x={320} y={34} lines={["📤 Nơi gửi — dữ liệu của một ứng dụng"]} size={13.5} weight={700} fill={C.leafDeep} />

      <path d="M320 52 L 320 74" stroke={C.sea} strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />

      {goiX.map((x, i) => (
        <g key={`g${i}`}>
          <rect x={x} y="80" width="118" height="40" rx="12" fill={C.sea} fillOpacity="0.12" stroke={C.sea} strokeWidth="2" />
          <Lines x={x + 59} y={105} lines={[`Gói ${i + 1}`]} size={13} weight={700} fill={C.seaDeep} />
        </g>
      ))}
      <Lines
        x={320}
        y={140}
        lines={["TCP cắt dữ liệu thành các gói có độ dài xác định và ĐÁNH SỐ theo từng ứng dụng"]}
        size={12}
      />

      <rect x="40" y="154" width="560" height="58" rx="20" fill={C.sea} fillOpacity="0.07" stroke={C.sea} strokeWidth="2" strokeDasharray="7 5" />
      <Lines
        x={320}
        y={180}
        lines={["🌐 Mỗi gói có thể đi một đường khác nhau, lưu ở các router với thời gian khác nhau", "→ gói gửi sau lại có thể đến trước"]}
        size={12}
        gap={17}
        fill={C.ink}
      />

      <path d="M320 214 L 320 236" stroke={C.sea} strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />

      {goiX.map((x, i) => (
        <g key={`d${i}`}>
          <rect x={x} y="242" width="118" height="40" rx="12" fill={C.coral} fillOpacity="0.12" stroke={C.coral} strokeWidth="2" />
          <Lines x={x + 59} y={267} lines={[denNoi[i]]} size={13} weight={700} fill={C.coral} />
        </g>
      ))}
      <Lines x={320} y={302} lines={["📥 Nơi nhận — các gói đến KHÔNG đúng thứ tự"]} size={12} weight={600} fill={C.coral} />

      <path d="M320 310 L 320 330" stroke={C.sea} strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />

      <rect x="40" y="336" width="560" height="42" rx="14" fill={C.leaf} fillOpacity="0.12" stroke={C.leaf} strokeWidth="2" />
      <Lines
        x={320}
        y={362}
        lines={["✅ TCP ráp lại đúng thứ tự 1 → 2 → 3 → 4 nhờ số đã đánh, đúng từng ứng dụng"]}
        size={12.5}
        weight={600}
        fill={C.leafDeep}
      />
    </Frame>
  );
}

// ── Chia sẻ thư mục trong mạng cục bộ (Bài 5) ───────────────────────────────
function ChiaSeThuMuc() {
  return (
    <Frame viewBox="0 0 640 340">
      {/* Máy chủ tài nguyên */}
      <rect x="10" y="26" width="190" height="160" rx="18" fill={C.sea} fillOpacity="0.1" stroke={C.sea} strokeWidth="2" />
      <text x="105" y="70" fontSize="28" textAnchor="middle">
        🖥️
      </text>
      <Lines x={105} y={94} lines={["MAY_1"]} size={14} weight={700} fill={C.seaDeep} />
      <rect x="24" y="106" width="162" height="42" rx="12" fill={C.gold} fillOpacity="0.2" />
      <text x="46" y="134" fontSize="18" textAnchor="middle">
        📁
      </text>
      <Lines x={124} y={134} lines={["SÁCH LỚP 12"]} size={12} weight={700} fill={C.goldDeep} />
      <Lines x={105} y={172} lines={["chủ tài nguyên"]} size={12} />

      {/* Chia sẻ đi */}
      <path d="M204 106 L 310 106" stroke={C.coral} strokeWidth="3" fill="none" markerEnd="url(#arrow-coral)" />
      <Lines x={257} y={90} lines={["chia sẻ cho"]} size={12} weight={600} fill={C.coral} />
      <Lines x={257} y={132} lines={["Everyone"]} size={12} weight={600} fill={C.coral} />

      {/* Các máy khác nhìn thấy */}
      {[
        { y: 26, ten: "MAY_2" },
        { y: 116, ten: "MAY_3" },
      ].map((m) => (
        <g key={m.ten}>
          <rect x="320" y={m.y} width="310" height="70" rx="16" fill={C.white} stroke={C.line} strokeWidth="2" />
          <text x="352" y={m.y + 44} fontSize="24" textAnchor="middle">
            🖥️
          </text>
          <Lines x={386} y={m.y + 32} lines={[m.ten]} size={13} weight={700} fill={C.ink} anchor="start" />
          <Lines x={386} y={m.y + 52} lines={["nhìn thấy 📁 SÁCH LỚP 12"]} size={12} anchor="start" />
        </g>
      ))}

      {/* Hai mức quyền */}
      <rect x="10" y="210" width="300" height="76" rx="16" fill={C.sea} fillOpacity="0.09" stroke={C.sea} strokeWidth="2" />
      <Lines x={160} y={238} lines={["🔍 Quyền Read"]} size={13.5} weight={700} fill={C.seaDeep} />
      <Lines x={160} y={262} lines={["chỉ được xem, KHÔNG sửa được"]} size={12} />

      <rect x="330" y="210" width="300" height="76" rx="16" fill={C.coral} fillOpacity="0.11" stroke={C.coral} strokeWidth="2" />
      <Lines x={480} y={238} lines={["✏️ Quyền Read/Write"]} size={13.5} weight={700} fill={C.coral} />
      <Lines x={480} y={262} lines={["vừa xem vừa sửa được"]} size={12} />

      <Lines
        x={320}
        y={314}
        lines={["Biểu tượng thư mục đã chia sẻ có hình chữ nhật màu xanh — tượng trưng cho dây cáp mạng"]}
        size={12}
      />
    </Frame>
  );
}

// ── Máy in mạng và máy chủ cung cấp dịch vụ in (Bài 5) ──────────────────────
function MayInMang() {
  const pcX = [40, 235, 430];
  const lenhX = [75, 245, 415];

  return (
    <Frame viewBox="0 0 640 370">
      {pcX.map((x, i) => (
        <g key={`pc${i}`}>
          <rect x={x} y="8" width="170" height="58" rx="16" fill={C.white} stroke={C.line} strokeWidth="2" />
          <text x={x + 32} y="44" fontSize="22" textAnchor="middle">
            💻
          </text>
          <Lines x={x + 58} y={32} lines={[`Máy tính ${i + 1}`]} size={12.5} weight={700} fill={C.ink} anchor="start" />
          <Lines x={x + 58} y={52} lines={["gửi lệnh in"]} size={12} anchor="start" />
          <path d={`M${x + 85} 66 L ${x + 85} 98`} stroke={C.sea} strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />
        </g>
      ))}

      <rect x="40" y="104" width="560" height="104" rx="18" fill={C.sea} fillOpacity="0.09" stroke={C.sea} strokeWidth="2" />
      <Lines
        x={320}
        y={130}
        lines={["🖨️ Máy tính cung cấp dịch vụ in (Print Server)"]}
        size={13.5}
        weight={700}
        fill={C.seaDeep}
      />
      <Lines x={320} y={150} lines={["nhận yêu cầu từ các máy khác, xếp thành hàng đợi"]} size={12} />
      {lenhX.map((x, i) => (
        <g key={`l${i}`}>
          <rect x={x} y="162" width="150" height="34" rx="10" fill={C.white} stroke={C.sea} strokeWidth="1.5" />
          <Lines x={x + 75} y={184} lines={[`Lệnh in ${i + 1}`]} size={12} weight={600} fill={C.seaDeep} />
        </g>
      ))}

      <path d="M320 208 L 320 238" stroke={C.sea} strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />

      <rect x="190" y="244" width="260" height="66" rx="18" fill={C.coral} fillOpacity="0.11" stroke={C.coral} strokeWidth="2" />
      <text x="228" y="288" fontSize="26" textAnchor="middle">
        🖨️
      </text>
      <Lines x={262} y={276} lines={["Máy in mạng"]} size={13.5} weight={700} fill={C.coral} anchor="start" />
      <Lines x={262} y={296} lines={["in lần lượt từng tài liệu"]} size={12} anchor="start" />

      <rect x="40" y="322" width="560" height="36" rx="18" fill={C.gold} fillOpacity="0.15" />
      <Lines
        x={320}
        y={345}
        lines={["Chia sẻ máy in = biến máy tính có máy in thành máy chủ cung cấp dịch vụ in"]}
        size={12.5}
        weight={600}
        fill={C.goldDeep}
      />
    </Frame>
  );
}

// ── Ưu và nhược điểm của giao tiếp trong không gian mạng (Bài 6) ────────────
function UuNhuocGiaoTiepMang() {
  const uu = [
    ["Thực hiện thuận tiện"],
    ["Tiết kiệm thời gian", "và chi phí"],
    ["Mở rộng kết nối xã hội"],
    ["Công cụ giao tiếp đa dạng"],
  ];
  const nhuoc = [
    ["Thiếu tín hiệu", "phi ngôn ngữ"],
    ["Nguy cơ bảo mật", "và quyền riêng tư"],
    ["Thiếu kết nối cá nhân", "chặt chẽ"],
    ["Dễ bị ảnh hưởng", "bởi sự cố kĩ thuật"],
  ];
  const chipY = [56, 114, 172, 230];

  const cot = (px: number, mau: string, mauChu: string, tieuDe: string, items: string[][]) => (
    <g>
      <rect x={px} y="8" width="304" height="294" rx="18" fill={mau} fillOpacity="0.07" stroke={mau} strokeWidth="2" />
      <Lines x={px + 152} y={38} lines={[tieuDe]} size={15} weight={700} fill={mauChu} />
      {items.map((dong, i) => (
        <g key={i}>
          <rect x={px + 14} y={chipY[i]} width="276" height="50" rx="14" fill={C.white} stroke={mau} strokeWidth="1.5" />
          <Lines
            x={px + 152}
            y={dong.length === 1 ? chipY[i] + 31 : chipY[i] + 22}
            lines={dong}
            size={13}
            gap={17}
            weight={600}
            fill={C.ink}
          />
        </g>
      ))}
    </g>
  );

  return (
    <Frame viewBox="0 0 640 310">
      {cot(8, C.leaf, C.leafDeep, "👍 ƯU ĐIỂM", uu)}
      {cot(328, C.coral, C.coral, "👎 NHƯỢC ĐIỂM", nhuoc)}
    </Frame>
  );
}

// ── Bốn yếu tố của ứng xử nhân văn (Bài 6) ──────────────────────────────────
function BonYeuToNhanVan() {
  const o = [
    { x: 10, y: 12, emoji: "🤝", ten: "Tôn trọng", mo: ["quyền riêng tư và", "quan điểm của mỗi người"] },
    { x: 450, y: 12, emoji: "💬", ten: "Lịch sự", mo: ["ngôn từ đúng mực,", "không lăng mạ, châm chọc"] },
    { x: 10, y: 194, emoji: "💗", ten: "Thấu hiểu", mo: ["đặt mình vào hoàn cảnh", "của người khác"] },
    { x: 450, y: 194, emoji: "🫶", ten: "Hỗ trợ", mo: ["sẵn lòng giúp đỡ,", "động viên chân thành"] },
  ];

  return (
    <Frame viewBox="0 0 640 300">
      {/* Vẽ đường nối trước rồi mới vẽ vòng tròn đè lên cho gọn đầu nối */}
      {o.map((b) => (
        <path
          key={`n${b.x}${b.y}`}
          d={`M${b.x === 10 ? 190 : 450} ${b.y + 47} L 320 150`}
          stroke={C.line}
          strokeWidth="2"
          fill="none"
        />
      ))}

      {o.map((b) => (
        <g key={b.ten}>
          <rect x={b.x} y={b.y} width="180" height="94" rx="18" fill={C.white} stroke={C.sea} strokeWidth="2" />
          <text x={b.x + 90} y={b.y + 30} fontSize="22" textAnchor="middle">
            {b.emoji}
          </text>
          <Lines x={b.x + 90} y={b.y + 54} lines={[b.ten]} size={13.5} weight={700} fill={C.seaDeep} />
          <Lines x={b.x + 90} y={b.y + 72} lines={b.mo} size={12} gap={15} />
        </g>
      ))}

      <circle cx="320" cy="150" r="64" fill={C.sea} />
      <Lines x={320} y={145} lines={["ỨNG XỬ", "NHÂN VĂN"]} size={14} gap={19} weight={700} fill={C.white} />
    </Frame>
  );
}

// ── Giải phẫu một phần tử HTML (Bài 7) ──────────────────────────────────────
function PhanTuHtml() {
  return (
    <Frame viewBox="0 0 640 200">
      {/* Nhãn và đường chỉ xuống */}
      {[
        { x: 141, l: ["Thẻ bắt đầu", "(opening tag)"], mau: C.seaDeep },
        { x: 320, l: ["Nội dung", "của phần tử"], mau: C.goldDeep },
        { x: 499, l: ["Thẻ kết thúc", "(closing tag)"], mau: C.coral },
      ].map((n) => (
        <g key={n.x}>
          <Lines x={n.x} y={26} lines={n.l} size={12.5} gap={16} weight={600} fill={n.mau} />
          <path d={`M${n.x} 50 L ${n.x} 74`} stroke={C.line} strokeWidth="2" fill="none" />
        </g>
      ))}

      {/* Khối mã */}
      <rect x="70" y="76" width="500" height="48" rx="12" fill={C.white} stroke={C.coral} strokeWidth="2.5" />
      <rect x="82" y="86" width="118" height="28" rx="8" fill={C.sea} fillOpacity="0.16" />
      <text
        x="141"
        y="105"
        fontSize="14"
        textAnchor="middle"
        fill={C.seaDeep}
        fontWeight="600"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        &lt;tên thẻ&gt;
      </text>
      <text
        x="320"
        y="105"
        fontSize="13"
        textAnchor="middle"
        fill={C.ink}
        style={{ fontFamily: "var(--font-mono)" }}
      >
        nội dung
      </text>
      <rect x="440" y="86" width="118" height="28" rx="8" fill={C.coral} fillOpacity="0.16" />
      <text
        x="499"
        y="105"
        fontSize="14"
        textAnchor="middle"
        fill={C.coral}
        fontWeight="600"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        &lt;/tên thẻ&gt;
      </text>

      {/* Dấu ngoặc gộp cả ba phần */}
      <path d="M70 138 L 70 146 L 570 146 L 570 138" stroke={C.leaf} strokeWidth="2.5" fill="none" />
      <path d="M320 146 L 320 156" stroke={C.leaf} strokeWidth="2.5" fill="none" />
      <Lines x={320} y={176} lines={["PHẦN TỬ HTML (element)"]} size={14} weight={700} fill={C.leafDeep} />
    </Frame>
  );
}

// ── Cây thông tin của một trang web (Bài 7) ─────────────────────────────────
function CayHtml() {
  // Toạ độ tâm mỗi nút; ô rộng 48 nên các nút cùng hàng cách nhau ít nhất 55.
  const nut = [
    { ten: "html", x: 320, y: 28, goc: true },
    { ten: "head", x: 150, y: 98 },
    { ten: "body", x: 450, y: 98 },
    { ten: "meta", x: 85, y: 168 },
    { ten: "title", x: 205, y: 168 },
    { ten: "div", x: 390, y: 168 },
    { ten: "p", x: 540, y: 168 },
    { ten: "h1", x: 300, y: 245 },
    { ten: "p", x: 355, y: 245 },
    { ten: "hr", x: 410, y: 245 },
    { ten: "p", x: 465, y: 245 },
    { ten: "em", x: 540, y: 245 },
  ];
  const canh: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 5],
    [2, 6],
    [5, 7],
    [5, 8],
    [5, 9],
    [5, 10],
    [6, 11],
  ];

  return (
    <Frame viewBox="0 0 640 300">
      {canh.map(([a, b], i) => (
        <path
          key={i}
          d={`M${nut[a].x} ${nut[a].y + 15} L ${nut[b].x} ${nut[b].y - 15}`}
          stroke={C.line}
          strokeWidth="2"
          fill="none"
        />
      ))}

      {nut.map((n, i) => (
        <g key={i}>
          <rect
            x={n.x - 24}
            y={n.y - 15}
            width="48"
            height="30"
            rx="9"
            fill={n.goc ? C.sea : C.white}
            stroke={n.goc ? C.sea : C.line}
            strokeWidth="2"
          />
          <text
            x={n.x}
            y={n.y + 5}
            fontSize="13"
            textAnchor="middle"
            fill={n.goc ? C.white : C.ink}
            fontWeight={n.goc ? 700 : 500}
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {n.ten}
          </text>
        </g>
      ))}

      <path d="M420 34 L 350 30" stroke={C.coral} strokeWidth="2" fill="none" markerEnd="url(#arrow-coral)" />
      <Lines x={430} y={38} lines={["nút gốc (root)"]} size={12.5} weight={600} fill={C.coral} anchor="start" />

      <rect x="40" y="272" width="560" height="26" rx="13" fill={C.gold} fillOpacity="0.15" />
      <Lines
        x={320}
        y={290}
        lines={["Phần tử lồng trong phần tử khác = quan hệ cha – con trên cây"]}
        size={12.5}
        weight={600}
        fill={C.goldDeep}
      />
    </Frame>
  );
}

// ── Cú pháp thuộc tính của thẻ (Bài 8) ──────────────────────────────────────
function CuPhapThuocTinh() {
  const o = [
    { x: 30, w: 56, chu: "<p", nen: C.sea, chuMau: C.seaDeep },
    { x: 94, w: 94, chu: "style", nen: C.gold, chuMau: C.goldDeep },
    { x: 196, w: 26, chu: "=", nen: null, chuMau: C.ink },
    { x: 230, w: 160, chu: '"color:red"', nen: C.coral, chuMau: C.coral },
    { x: 398, w: 26, chu: ">", nen: null, chuMau: C.ink },
    { x: 432, w: 100, chu: "Nội dung", nen: C.leaf, chuMau: C.leafDeep },
    { x: 540, w: 70, chu: "</p>", nen: C.sea, chuMau: C.seaDeep },
  ];
  const nhan = [
    { x: 58, l: ["tên thẻ"], mau: C.seaDeep },
    { x: 141, l: ["tên thuộc tính"], mau: C.goldDeep },
    { x: 310, l: ["giá trị, đặt trong nháy kép"], mau: C.coral },
    { x: 482, l: ["nội dung"], mau: C.leafDeep },
  ];

  return (
    <Frame viewBox="0 0 640 210">
      {nhan.map((n) => (
        <g key={n.x}>
          <Lines x={n.x} y={40} lines={n.l} size={12.5} weight={600} fill={n.mau} />
          <path d={`M${n.x} 50 L ${n.x} 86`} stroke={C.line} strokeWidth="2" fill="none" />
        </g>
      ))}

      {o.map((c) => (
        <g key={c.x}>
          {c.nen && <rect x={c.x} y="90" width={c.w} height="34" rx="9" fill={c.nen} fillOpacity="0.16" />}
          <text
            x={c.x + c.w / 2}
            y="112"
            fontSize="14"
            textAnchor="middle"
            fill={c.chuMau}
            fontWeight="600"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {c.chu}
          </text>
        </g>
      ))}

      <rect x="30" y="150" width="580" height="46" rx="16" fill={C.gold} fillOpacity="0.15" />
      <Lines
        x={320}
        y={172}
        lines={[
          "Thuộc tính nằm trong THẺ BẮT ĐẦU, viết sau tên thẻ.",
          "Có nhiều thuộc tính thì ngăn cách nhau bởi dấu cách.",
        ]}
        size={12.5}
        gap={17}
        weight={600}
        fill={C.goldDeep}
      />
    </Frame>
  );
}

// ── div là khối, span nằm trong dòng (Bài 8) ────────────────────────────────
function DivVaSpan() {
  return (
    <Frame viewBox="0 0 640 300">
      {/* div */}
      <rect x="8" y="8" width="304" height="284" rx="18" fill={C.sea} fillOpacity="0.07" stroke={C.sea} strokeWidth="2" />
      <Lines x={160} y={38} lines={["🧱 <div> — một KHỐI"]} size={14.5} weight={700} fill={C.seaDeep} />
      <Lines x={160} y={60} lines={["bắt đầu trên dòng mới,", "chiếm trọn bề ngang"]} size={12} gap={16} />

      <rect x="24" y="102" width="272" height="126" rx="12" fill={C.white} stroke={C.line} strokeWidth="1.5" />
      <rect x="40" y="118" width="180" height="12" rx="6" fill={C.line} />
      <rect x="40" y="142" width="240" height="42" rx="10" fill={C.sea} fillOpacity="0.18" stroke={C.sea} strokeWidth="2" />
      <Lines x={160} y={168} lines={["nội dung của div"]} size={12.5} weight={600} fill={C.seaDeep} />
      <rect x="40" y="196" width="146" height="12" rx="6" fill={C.line} />

      <Lines x={160} y={256} lines={["Dùng cho quy mô LỚN"]} size={12.5} weight={600} fill={C.seaDeep} />

      {/* span */}
      <rect x="328" y="8" width="304" height="284" rx="18" fill={C.coral} fillOpacity="0.07" stroke={C.coral} strokeWidth="2" />
      <Lines x={480} y={38} lines={["🔤 <span> — TRONG DÒNG"]} size={14.5} weight={700} fill={C.coral} />
      <Lines x={480} y={60} lines={["nằm ngay trong dòng", "văn bản đang viết"]} size={12} gap={16} />

      <rect x="344" y="102" width="272" height="126" rx="12" fill={C.white} stroke={C.line} strokeWidth="1.5" />
      <rect x="360" y="118" width="180" height="12" rx="6" fill={C.line} />
      <rect x="360" y="146" width="64" height="12" rx="6" fill={C.line} />
      <rect x="432" y="138" width="96" height="28" rx="9" fill={C.coral} fillOpacity="0.2" stroke={C.coral} strokeWidth="2" />
      <Lines x={480} y={157} lines={["span"]} size={12.5} weight={600} fill={C.coral} />
      <rect x="536" y="146" width="62" height="12" rx="6" fill={C.line} />
      <rect x="360" y="196" width="146" height="12" rx="6" fill={C.line} />

      <Lines x={480} y={256} lines={["Dùng cho quy mô NHỎ hơn"]} size={12.5} weight={600} fill={C.coral} />
    </Frame>
  );
}

// ── Cây thư mục một website và cách viết đường dẫn (Bài 10) ─────────────────
// Vẽ lại Hình 10.1 của SGK nhưng theo kiểu cây thư mục thụt lề (dễ đọc trên
// điện thoại hơn sơ đồ ngang của sách), đồng thời gắn luôn đường dẫn tương
// ứng vào bên phải — chỗ này SGK để rời ở phần chữ nên học sinh khó nối.
function CayThuMucWebsite() {
  const mucX = [26, 54, 82, 110];
  const hang = [
    { c: 0, i: "📁", t: "web/", tm: true },
    { c: 1, i: "📁", t: "images/", tm: true },
    { c: 2, i: "🖼️", t: "sun.png" },
    { c: 2, i: "🖼️", t: "star.gif" },
    { c: 1, i: "📄", t: "index.html", dangO: true },
    { c: 1, i: "📄", t: "thong_tin.html", duong: '"thong_tin.html"' },
    { c: 1, i: "📁", t: "bai_tap/", tm: true },
    { c: 2, i: "📄", t: "bai_tap_1.html", duong: '"bai_tap/bai_tap_1.html"' },
    { c: 2, i: "📄", t: "bai_tap_2.html" },
    { c: 2, i: "📁", t: "on_tap/", tm: true },
    { c: 3, i: "📄", t: "bai_tap_on_tap.html", duong: '"bai_tap/on_tap/bai_tap_on_tap.html"' },
  ];
  const y = (i: number) => 52 + i * 29;

  // Đường kẻ dọc nối thư mục cha với các con: [hàng cha, hàng con cuối cùng]
  const noi: [number, number][] = [
    [0, 6],
    [1, 3],
    [6, 9],
    [9, 10],
  ];

  return (
    <Frame viewBox="0 0 640 420">
      <Lines x={150} y={26} lines={["Cấu trúc một website"]} size={14} weight={700} fill={C.ink} />

      {noi.map(([cha, con], k) => {
        const x = mucX[hang[cha].c] + 8;
        return <path key={k} d={`M${x} ${y(cha) + 8} L ${x} ${y(con)}`} stroke={C.line} strokeWidth="2" fill="none" strokeDasharray="4 4" />;
      })}

      {hang.map((h, i) => (
        <g key={i}>
          {h.c > 0 && (
            <path
              d={`M${mucX[h.c - 1] + 8} ${y(i) - 4} L ${mucX[h.c] - 4} ${y(i) - 4}`}
              stroke={C.line}
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 4"
            />
          )}
          {h.dangO && (
            <rect x={mucX[h.c] - 6} y={y(i) - 17} width="186" height="24" rx="8" fill={C.coral} fillOpacity="0.16" />
          )}
          <text x={mucX[h.c]} y={y(i)} fontSize="14" textAnchor="start">
            {h.i}
          </text>
          <text
            x={mucX[h.c] + 22}
            y={y(i)}
            fontSize="12.5"
            textAnchor="start"
            fill={h.tm ? C.seaDeep : C.ink}
            fontWeight={h.tm ? 700 : 500}
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {h.t}
          </text>
          {h.dangO && (
            <Lines x={mucX[h.c] + 186} y={y(i)} lines={["← ta đang đứng ở đây"]} size={12} weight={700} fill={C.coral} anchor="start" />
          )}
          {h.duong && (
            <>
              <path d={`M290 ${y(i) - 4} L 322 ${y(i) - 4}`} stroke={C.line} strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
              <text
                x={326}
                y={y(i)}
                fontSize="12"
                textAnchor="start"
                fill={C.leafDeep}
                fontWeight="600"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {`href=${h.duong}`}
              </text>
            </>
          )}
        </g>
      ))}

      <rect x="20" y="372" width="600" height="34" rx="17" fill={C.gold} fillOpacity="0.15" />
      <Lines
        x={320}
        y={394}
        lines={["Cùng thư mục: chỉ cần tên tệp · Xuống cấp: thêm tên thư mục và dấu / · Lên cấp: dùng ../"]}
        size={12}
        weight={600}
        fill={C.goldDeep}
      />
    </Frame>
  );
}

// ── Thuộc tính width, height trên thẻ <img> (Hình 11.3 SGK, Bài 11) ─────────
// Vẽ lại 3 trường hợp của sách bằng một hình trái tim SVG bóp méo theo tỉ lệ
// scale khác nhau, để thấy ngay hậu quả khi set sai width/height so với ảnh gốc.
function KichThuocAnh() {
  const heart =
    "M0,18 C-22,-2 -34,-26 -18,-38 C-6,-46 4,-38 0,-30 C-4,-38 6,-46 18,-38 C34,-26 22,-2 0,18 Z";
  const cols: {
    x: number;
    tag: string[];
    tagColor: string;
    sx: number;
    sy: number;
    caption: string[];
  }[] = [
    {
      x: 110,
      tag: ["Không dùng", "width, height"],
      tagColor: C.seaDeep,
      sx: 1.3,
      sy: 1.3,
      caption: ["Hiển thị đúng", "kích thước gốc của ảnh"],
    },
    {
      x: 320,
      tag: ['width="131"'],
      tagColor: C.seaDeep,
      sx: 0.75,
      sy: 0.75,
      caption: ["Chỉ set width —", "height tự theo tỉ lệ gốc"],
    },
    {
      x: 530,
      tag: ['width="200"', 'height="120"'],
      tagColor: C.coral,
      sx: 1.05,
      sy: 0.55,
      caption: ["⚠️ Méo hình vì tỉ lệ", "không đúng ảnh gốc"],
    },
  ];

  return (
    <Frame viewBox="0 0 640 300">
      <Lines
        x={320}
        y={24}
        lines={["Thuộc tính width, height trên thẻ <img> (Hình 11.3 SGK)"]}
        size={13.5}
        weight={700}
        fill={C.ink}
      />
      {cols.map((c, i) => (
        <g key={i}>
          <rect x={c.x - 95} y={42} width={190} height={200} rx={16} fill={C.white} stroke={C.line} strokeWidth={1.5} />
          <Lines x={c.x} y={64} lines={c.tag} size={12} weight={700} fill={c.tagColor} gap={14} />
          <g transform={`translate(${c.x} 150) scale(${c.sx} ${c.sy})`}>
            <path d={heart} fill={C.coral} fillOpacity={i === 2 ? 0.85 : 0.7} stroke={C.coral} strokeWidth={2} />
          </g>
          <Lines x={c.x} y={196} lines={c.caption} size={12} gap={16} fill={C.inkSoft} />
        </g>
      ))}
    </Frame>
  );
}

// ── <iframe> kết hợp <a target="..."> (Hình 11.4–11.5 SGK, Bài 11) ─────────
// Học sinh hay hiểu nhầm iframe chỉ hiển thị tĩnh. Hình này chỉ rõ: bấm liên
// kết có target trùng id của iframe thì nội dung nạp NGAY vào khung đó, trang
// không tải lại — đây là điều chữ suông khó truyền tải.
function IframeLienKet() {
  return (
    <Frame viewBox="0 0 640 366">
      <Lines
        x={320}
        y={24}
        lines={['<iframe> + liên kết target — đổi nội dung không cần tải lại trang']}
        size={13}
        weight={700}
        fill={C.ink}
      />

      <rect x={40} y={50} width={250} height={64} rx={14} fill={C.coral} fillOpacity={0.16} stroke={C.coral} strokeWidth={2} />
      <Lines x={165} y={72} lines={["🏃 Câu lạc bộ Thể thao"]} size={12.5} weight={700} fill={C.coral} />
      <Lines x={165} y={94} lines={['href="the_thao.html"', 'target="iframe"']} size={12} gap={13} fill={C.inkSoft} />

      <rect x={350} y={50} width={250} height={64} rx={14} fill={C.white} stroke={C.line} strokeWidth={2} />
      <Lines x={475} y={72} lines={["🎨 Câu lạc bộ Nghệ thuật"]} size={12.5} weight={700} fill={C.inkSoft} />
      <Lines x={475} y={94} lines={['href="nghe_thuat.html"', 'target="iframe"']} size={12} gap={13} fill={C.inkSoft} />

      <path
        d="M165 114 C165 152, 230 152, 230 178"
        stroke={C.coral}
        strokeWidth={2.5}
        fill="none"
        markerEnd="url(#arrow-coral)"
      />

      <rect x={60} y={182} width={520} height={124} rx={16} fill={C.sea} fillOpacity={0.06} stroke={C.sea} strokeWidth={2} />
      <text
        x={84}
        y={206}
        fontSize={12.5}
        fontWeight={700}
        fill={C.seaDeep}
        textAnchor="start"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {'<iframe id="iframe">'}
      </text>

      <rect x={80} y={218} width={480} height={70} rx={10} fill={C.white} stroke={C.line} strokeWidth={1.5} />
      <Lines x={320} y={248} lines={["⚽ Nội dung của the_thao.html", "hiển thị ngay trong khung này"]} size={12} gap={20} weight={600} fill={C.ink} />

      <Lines
        x={320}
        y={328}
        lines={[
          "Bấm liên kết → nội dung nạp thẳng vào khung, cả trang KHÔNG tải lại",
          "⚠ Trình duyệt khớp target theo name của khung, không phải id — xem hộp bên dưới",
        ]}
        size={12}
        weight={600}
        gap={19}
        fill={C.seaDeep}
      />
    </Frame>
  );
}

// ── label ↔ input nối nhau bằng for/id (Bài 12) ─────────────────────────────
// Chỗ học sinh hay bỏ qua nhất: for của label phải TRÙNG id của input. SGK chỉ
// nói bằng chữ, mà tác dụng thật (nháy vào nhãn thì con trỏ nhảy vào ô nhập)
// lại chỉ thấy được khi thao tác — nên vẽ hẳn ra đây.
function LabelForId() {
  const mono = { fontFamily: "var(--font-mono)" } as const;
  return (
    <Frame viewBox="0 0 640 300">
      <Lines
        x={320}
        y={24}
        lines={["label và input nối với nhau bằng for ↔ id"]}
        size={13.5}
        weight={700}
        fill={C.ink}
      />

      <rect x={24} y={44} width={592} height={110} rx={14} fill={C.ink} fillOpacity={0.04} stroke={C.line} strokeWidth={1.5} />

      {/* hai o cho biet chinh la cho phai trung nhau */}
      <rect x={93} y={62} width={92} height={22} rx={6} fill={C.coral} fillOpacity={0.18} stroke={C.coral} strokeWidth={1.5} />
      <rect x={93} y={110} width={84} height={22} rx={6} fill={C.coral} fillOpacity={0.18} stroke={C.coral} strokeWidth={1.5} />

      <text x={44} y={78} fontSize={13} fill={C.inkSoft} style={mono}>{"<label "}</text>
      <text x={97} y={78} fontSize={13} fill={C.ink} fontWeight={700} style={mono}>{'for="monan"'}</text>
      <text x={181} y={78} fontSize={13} fill={C.inkSoft} style={mono}>{">Tên món ăn</label>"}</text>

      <text x={44} y={126} fontSize={13} fill={C.inkSoft} style={mono}>{"<input "}</text>
      <text x={97} y={126} fontSize={13} fill={C.ink} fontWeight={700} style={mono}>{'id="monan"'}</text>
      <text x={173} y={126} fontSize={13} fill={C.inkSoft} style={mono}>{' type="text">'}</text>

      <path d="M 91 73 C 58 84, 58 110, 89 120" stroke={C.coral} strokeWidth={2.5} fill="none" markerEnd="url(#arrow-coral)" />

      <Lines
        x={320}
        y={176}
        lines={["Giá trị của for phải TRÙNG giá trị của id — đó là sợi dây nối nhãn với ô nhập"]}
        size={12}
        weight={600}
        fill={C.seaDeep}
      />

      {/* ket qua that tren trinh duyet */}
      <rect x={24} y={192} width={592} height={70} rx={14} fill={C.white} stroke={C.line} strokeWidth={1.5} />
      <text x={70} y={234} fontSize={13.5} fill={C.ink} textAnchor="start">Tên món ăn</text>
      <rect x={200} y={216} width={220} height={28} rx={5} fill={C.white} stroke={C.sea} strokeWidth={2} />
      <line x1={212} y1={222} x2={212} y2={238} stroke={C.ink} strokeWidth={1.5} />
      <path d="M 158 240 C 178 248, 190 240, 202 234" stroke={C.coral} strokeWidth={2} fill="none" markerEnd="url(#arrow-coral)" />

      <Lines
        x={320}
        y={286}
        lines={["Nháy chuột vào chữ “Tên món ăn” → con trỏ nhảy ngay vào ô nhập"]}
        size={12}
        weight={600}
        fill={C.leafDeep}
      />
    </Frame>
  );
}

// ── radio / checkbox / select khác nhau chỗ nào (Bài 12) ────────────────────
// Đúng câu hỏi củng cố số 1 của SGK. Ba thứ nhìn na ná nhau trên trang web nên
// vẽ cạnh nhau cho thấy ngay khác biệt về cách chọn.
function RadioCheckboxSelect() {
  const mono = { fontFamily: "var(--font-mono)" } as const;
  const tick = (x: number, y: number) => `M ${x + 4} ${y + 9} L ${x + 7.5} ${y + 13} L ${x + 14} ${y + 5}`;
  return (
    <Frame viewBox="0 0 640 320">
      <Lines
        x={320}
        y={24}
        lines={["Ba cách cho người dùng chọn — nhìn giống nhau nhưng chọn khác nhau"]}
        size={13}
        weight={700}
        fill={C.ink}
      />

      {/* ── radio ── */}
      <rect x={20} y={44} width={190} height={224} rx={16} fill={C.sea} fillOpacity={0.06} stroke={C.sea} strokeWidth={2} />
      <text x={115} y={72} fontSize={13.5} fontWeight={700} fill={C.seaDeep} textAnchor="middle" style={mono}>radio</text>

      <circle cx={70} cy={110} r={9} fill={C.white} stroke={C.line} strokeWidth={2} />
      <text x={90} y={115} fontSize={12.5} fill={C.inkSoft} textAnchor="start">Nam</text>
      <circle cx={70} cy={142} r={9} fill={C.white} stroke={C.sea} strokeWidth={2.5} />
      <circle cx={70} cy={142} r={4.5} fill={C.sea} />
      <text x={90} y={147} fontSize={12.5} fill={C.ink} fontWeight={600} textAnchor="start">Nữ</text>

      <Lines x={115} y={196} lines={["Chọn MỘT giá trị", "trong nhóm cùng name"]} size={12} gap={17} fill={C.inkSoft} />
      <text x={115} y={246} fontSize={12} fill={C.seaDeep} fontWeight={600} textAnchor="middle" style={mono}>name=&quot;gioitinh&quot;</text>

      {/* ── checkbox ── */}
      <rect x={225} y={44} width={190} height={224} rx={16} fill={C.leaf} fillOpacity={0.07} stroke={C.leaf} strokeWidth={2} />
      <text x={320} y={72} fontSize={13.5} fontWeight={700} fill={C.leafDeep} textAnchor="middle" style={mono}>checkbox</text>

      <rect x={268} y={96} width={18} height={18} rx={4} fill={C.white} stroke={C.line} strokeWidth={2} />
      <text x={298} y={110} fontSize={12.5} fill={C.inkSoft} textAnchor="start">Toán</text>

      <rect x={268} y={124} width={18} height={18} rx={4} fill={C.leaf} stroke={C.leaf} strokeWidth={2} />
      <path d={tick(268, 124)} stroke={C.white} strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x={298} y={138} fontSize={12.5} fill={C.ink} fontWeight={600} textAnchor="start">Văn</text>

      <rect x={268} y={152} width={18} height={18} rx={4} fill={C.leaf} stroke={C.leaf} strokeWidth={2} />
      <path d={tick(268, 152)} stroke={C.white} strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x={298} y={166} fontSize={12.5} fill={C.ink} fontWeight={600} textAnchor="start">Ngoại ngữ</text>

      <Lines x={320} y={196} lines={["Mỗi ô hỏi riêng: có / không", "→ tích bao nhiêu ô cũng được"]} size={12} gap={17} fill={C.inkSoft} />
      <text x={320} y={246} fontSize={12} fill={C.leafDeep} fontWeight={600} textAnchor="middle" style={mono}>value=&quot;Toán&quot;</text>

      {/* ── select ── */}
      <rect x={430} y={44} width={190} height={224} rx={16} fill={C.gold} fillOpacity={0.1} stroke={C.gold} strokeWidth={2} />
      <text x={525} y={72} fontSize={13.5} fontWeight={700} fill={C.goldDeep} textAnchor="middle" style={mono}>select</text>

      <rect x={462} y={94} width={126} height={26} rx={5} fill={C.white} stroke={C.line} strokeWidth={2} />
      <text x={474} y={112} fontSize={12.5} fill={C.ink} textAnchor="start">Khoa học tự nhiên</text>
      <path d="M 570 104 L 580 104 L 575 111 Z" fill={C.inkSoft} />

      <rect x={462} y={126} width={126} height={52} rx={5} fill={C.white} stroke={C.line} strokeWidth={1.5} />
      <rect x={464} y={128} width={122} height={24} rx={4} fill={C.gold} fillOpacity={0.3} />
      <text x={474} y={144} fontSize={12} fill={C.ink} fontWeight={600} textAnchor="start">Khoa học tự nhiên</text>
      <text x={474} y={169} fontSize={12} fill={C.inkSoft} textAnchor="start">Khoa học xã hội</text>

      <Lines x={525} y={196} lines={["Danh sách thả xuống —", "chọn một, đỡ tốn chỗ"]} size={12} gap={17} fill={C.inkSoft} />
      <text x={525} y={246} fontSize={12} fill={C.goldDeep} fontWeight={600} textAnchor="middle" style={mono}>&lt;option&gt;</text>

      <Lines
        x={320}
        y={296}
        lines={["Các ô radio chỉ loại trừ nhau khi có CÙNG name — chọn ô này thì ô kia tự bỏ"]}
        size={12}
        weight={600}
        fill={C.seaDeep}
      />
    </Frame>
  );
}

// ── Mổ xẻ một mẫu định dạng CSS (Bài 13) ────────────────────────────────────
// SGK gọi tên hai phần (bộ chọn / vùng mô tả) bằng chữ, nhưng học sinh cần
// thấy chúng nằm ở ĐÂU trong dòng lệnh mới nhớ được — nên dán nhãn thẳng lên
// từng mảnh của chính dòng CSS.
function CauTrucCss() {
  const mono = { fontFamily: "var(--font-mono)" } as const;
  const x0 = 140;
  const w = 9.6; // bề ngang một kí tự ở cỡ 16
  const at = (n: number) => x0 + n * w;

  return (
    <Frame viewBox="0 0 640 300">
      <Lines x={320} y={24} lines={["Một mẫu định dạng CSS gồm hai phần"]} size={13.5} weight={700} fill={C.ink} />

      {/* nhan phia tren, co gach noi xuong dung manh no chi */}
      <Lines x={at(0) + w / 2} y={70} lines={["bộ chọn"]} size={12} weight={700} fill={C.coral} />
      <Lines x={231} y={70} lines={["thuộc tính"]} size={12} weight={700} fill={C.seaDeep} />
      <Lines x={322} y={70} lines={["giá trị"]} size={12} weight={700} fill={C.leafDeep} />

      <line x1={at(0) + w / 2} y1={78} x2={at(0) + w / 2} y2={98} stroke={C.coral} strokeWidth={1.5} strokeDasharray="3 3" />
      <line x1={231} y1={78} x2={231} y2={98} stroke={C.sea} strokeWidth={1.5} strokeDasharray="3 3" />
      <line x1={322} y1={78} x2={322} y2={98} stroke={C.leaf} strokeWidth={1.5} strokeDasharray="3 3" />

      {/* o to mau tung manh */}
      <rect x={at(0) - 5} y={100} width={w + 10} height={26} rx={5} fill={C.coral} fillOpacity={0.2} stroke={C.coral} strokeWidth={1.5} />
      <rect x={at(4) - 4} y={100} width={11 * w + 8} height={26} rx={5} fill={C.sea} fillOpacity={0.14} />
      <rect x={at(17) - 4} y={100} width={4 * w + 8} height={26} rx={5} fill={C.leaf} fillOpacity={0.16} />

      {/* chinh dong CSS */}
      <text x={x0} y={119} fontSize={16} fill={C.ink} style={mono}>{"p { text-indent: 15px; color: blue; }"}</text>

      {/* dau moc duoi vung mo ta */}
      <path d={`M ${at(2) - 5} 134 L ${at(2) - 5} 141 L ${at(37) + 5} 141 L ${at(37) + 5} 134`} stroke={C.sea} strokeWidth={2} fill="none" />
      <line x1={327} y1={141} x2={327} y2={149} stroke={C.sea} strokeWidth={2} />
      <Lines
        x={327}
        y={166}
        lines={["vùng mô tả — gồm một hay nhiều quy định,", "các quy định ngăn nhau bởi dấu ;"]}
        size={12}
        gap={17}
        weight={600}
        fill={C.seaDeep}
      />

      {/* nhieu the cung luc */}
      <rect x={24} y={210} width={592} height={70} rx={14} fill={C.gold} fillOpacity={0.1} stroke={C.gold} strokeWidth={1.5} />
      <text x={320} y={240} fontSize={15} fill={C.ink} textAnchor="middle" style={mono}>{"h1, h2, h3 { color: red; }"}</text>
      <Lines
        x={320}
        y={266}
        lines={["Bộ chọn có thể gồm nhiều thẻ cùng lúc — các thẻ ngăn nhau bởi dấu phẩy"]}
        size={12}
        weight={600}
        fill={C.goldDeep}
      />
    </Frame>
  );
}

// ── Ba cách thiết lập CSS và tầm với của từng cách (Bài 13) ──────────────────
// Trả lời thẳng hai câu hỏi củng cố của SGK: muốn áp dụng cho cả tệp thì dùng
// cách nào, muốn áp dụng cho nhiều trang thì dùng cách nào. Điểm mấu chốt là
// CSS nằm ở đâu thì với được tới đâu, nên vẽ theo trục "tầm với".
function BaCachCss() {
  const mono = { fontFamily: "var(--font-mono)" } as const;
  return (
    <Frame viewBox="0 0 640 340">
      <Lines x={320} y={24} lines={["Ba cách thiết lập CSS — đặt ở đâu thì với được tới đâu"]} size={13} weight={700} fill={C.ink} />

      {/* ── a) CSS trong ── */}
      <rect x={20} y={44} width={190} height={252} rx={16} fill={C.sea} fillOpacity={0.06} stroke={C.sea} strokeWidth={2} />
      <Lines x={115} y={72} lines={["CSS trong"]} size={13.5} weight={700} fill={C.seaDeep} />

      <text x={115} y={98} fontSize={12} fill={C.inkSoft} textAnchor="middle" style={mono}>trang.html</text>
      <rect x={48} y={106} width={134} height={72} rx={8} fill={C.white} stroke={C.line} strokeWidth={1.5} />
      <rect x={54} y={145} width={104} height={15} rx={4} fill={C.gold} fillOpacity={0.35} />
      <text x={58} y={124} fontSize={12} fill={C.inkSoft} style={mono}>{"<head>"}</text>
      <text x={58} y={140} fontSize={12} fill={C.inkSoft} style={mono}>{" <style>"}</text>
      <text x={58} y={156} fontSize={12} fill={C.ink} fontWeight={700} style={mono}>{" h1{...}"}</text>
      <text x={58} y={172} fontSize={12} fill={C.inkSoft} style={mono}>{" </style>"}</text>

      <rect x={48} y={196} width={134} height={26} rx={13} fill={C.sea} fillOpacity={0.18} />
      <Lines x={115} y={213} lines={["Chỉ trang này"]} size={12} weight={700} fill={C.seaDeep} />
      <Lines x={115} y={246} lines={["Đặt trong <style>", "ở phần head"]} size={12} gap={17} fill={C.inkSoft} />

      {/* ── b) CSS ngoài ── */}
      <rect x={225} y={44} width={190} height={252} rx={16} fill={C.gold} fillOpacity={0.1} stroke={C.gold} strokeWidth={2} />
      <Lines x={320} y={72} lines={["CSS ngoài"]} size={13.5} weight={700} fill={C.goldDeep} />

      <text x={320} y={98} fontSize={12} fill={C.inkSoft} textAnchor="middle" style={mono}>styles.css</text>
      <rect x={258} y={106} width={124} height={36} rx={8} fill={C.gold} fillOpacity={0.25} stroke={C.gold} strokeWidth={2} />
      <text x={320} y={129} fontSize={12} fill={C.goldDeep} fontWeight={700} textAnchor="middle" style={mono}>{"h1{color:red}"}</text>

      <path d="M 310 144 C 296 150, 284 150, 278 154" stroke={C.gold} strokeWidth={2} fill="none" markerEnd="url(#arrow-soft)" />
      <line x1={320} y1={144} x2={320} y2={154} stroke={C.gold} strokeWidth={2} />
      <path d="M 330 144 C 344 150, 356 150, 362 154" stroke={C.gold} strokeWidth={2} fill="none" markerEnd="url(#arrow-soft)" />

      <rect x={258} y={158} width={36} height={28} rx={5} fill={C.white} stroke={C.line} strokeWidth={1.5} />
      <rect x={302} y={158} width={36} height={28} rx={5} fill={C.white} stroke={C.line} strokeWidth={1.5} />
      <rect x={346} y={158} width={36} height={28} rx={5} fill={C.white} stroke={C.line} strokeWidth={1.5} />
      <Lines x={276} y={177} lines={["1"]} size={12} fill={C.inkSoft} />
      <Lines x={320} y={177} lines={["2"]} size={12} fill={C.inkSoft} />
      <Lines x={364} y={177} lines={["3"]} size={12} fill={C.inkSoft} />

      <rect x={236} y={196} width={168} height={26} rx={13} fill={C.gold} fillOpacity={0.28} />
      <Lines x={320} y={213} lines={["Nhiều trang, cả website"]} size={12} weight={700} fill={C.goldDeep} />
      <Lines x={320} y={246} lines={["Tệp .css riêng, nối bằng", "<link> hoặc @import"]} size={12} gap={17} fill={C.inkSoft} />

      {/* ── c) CSS nội tuyến ── */}
      <rect x={430} y={44} width={190} height={252} rx={16} fill={C.coral} fillOpacity={0.08} stroke={C.coral} strokeWidth={2} />
      <Lines x={525} y={72} lines={["CSS nội tuyến"]} size={13.5} weight={700} fill={C.coral} />

      <text x={525} y={98} fontSize={12} fill={C.inkSoft} textAnchor="middle" style={mono}>ngay trong thẻ</text>
      <rect x={444} y={106} width={162} height={52} rx={8} fill={C.white} stroke={C.line} strokeWidth={1.5} />
      <text x={456} y={128} fontSize={12} fill={C.inkSoft} style={mono}>{"<h1 "}</text>
      <text x={485} y={128} fontSize={12} fill={C.coral} fontWeight={700} style={mono}>{"style="}</text>
      <text x={456} y={146} fontSize={12} fill={C.coral} fontWeight={700} style={mono}>{'"color: red"'}</text>
      <text x={543} y={146} fontSize={12} fill={C.inkSoft} style={mono}>{">"}</text>

      <rect x={452} y={196} width={146} height={26} rx={13} fill={C.coral} fillOpacity={0.2} />
      <Lines x={525} y={213} lines={["Chỉ một phần tử"]} size={12} weight={700} fill={C.ink} />
      <Lines x={525} y={246} lines={["Viết thẳng vào thẻ", "qua thuộc tính style"]} size={12} gap={17} fill={C.inkSoft} />

      <Lines
        x={320}
        y={322}
        lines={["Càng để ra ngoài càng dùng lại được nhiều — nội tuyến chỉ đúng một phần tử"]}
        size={12}
        weight={600}
        fill={C.seaDeep}
      />
    </Frame>
  );
}

// ── Đường cơ sở và chiều cao dòng (Bài 14) ──────────────────────────────────
// Hình 14.3 của SGK chỉ vẽ MỘT dòng nên không thấy được chiều cao dòng thật sự
// là khoảng cách giữa hai đường cơ sở. Ở đây vẽ hai dòng để đo được khoảng đó.
function BaselineLineHeight() {
  return (
    <Frame viewBox="0 0 640 300">
      <Lines x={320} y={24} lines={["Đường cơ sở (baseline) và chiều cao dòng (line-height)"]} size={13.5} weight={700} fill={C.ink} />

      {/* hai dong chu that, co chu g/y tho xuong duoi duong co so */}
      <text x={70} y={112} fontSize={19} fill={C.ink}>Đây là dòng thứ nhất</text>
      <text x={70} y={180} fontSize={19} fill={C.ink}>Đây là dòng thứ hai</text>

      <line x1={60} y1={112} x2={390} y2={112} stroke={C.coral} strokeWidth={2} strokeDasharray="6 4" />
      <line x1={60} y1={180} x2={390} y2={180} stroke={C.coral} strokeWidth={2} strokeDasharray="6 4" />
      <Lines x={400} y={116} lines={["đường cơ sở"]} size={12} weight={600} fill={C.coral} anchor="start" />
      <Lines x={400} y={184} lines={["đường cơ sở"]} size={12} weight={600} fill={C.coral} anchor="start" />

      {/* mui ten hai dau do khoang cach giua hai duong co so */}
      <line x1={495} y1={112} x2={515} y2={112} stroke={C.sea} strokeWidth={2} />
      <line x1={495} y1={180} x2={515} y2={180} stroke={C.sea} strokeWidth={2} />
      <path d="M505 148 L505 116" stroke={C.sea} strokeWidth={2.5} fill="none" markerEnd="url(#arrow)" />
      <path d="M505 148 L505 176" stroke={C.sea} strokeWidth={2.5} fill="none" markerEnd="url(#arrow)" />
      <Lines x={524} y={142} lines={["chiều cao dòng", "(line-height)"]} size={12} gap={17} weight={600} fill={C.seaDeep} anchor="start" />

      <rect x={24} y={216} width={592} height={64} rx={14} fill={C.sea} fillOpacity={0.06} stroke={C.sea} strokeWidth={1.5} />
      <Lines
        x={320}
        y={242}
        lines={[
          "Đường cơ sở: đường ngang mà các chữ cái đứng thẳng lên trên nó",
          "Chiều cao dòng: khoảng cách giữa đường cơ sở của hai dòng liền nhau",
        ]}
        size={12}
        gap={20}
        weight={600}
        fill={C.seaDeep}
      />
    </Frame>
  );
}

// ── Tính kế thừa trong cây HTML (Bài 14) ────────────────────────────────────
// Vẽ lại ý của Hình 14.5 nhưng theo dạng cây cha–con, để thấy màu "chảy" từ
// body xuống con cháu, và thấy phần tử nào có mẫu riêng thì chặn dòng chảy đó.
function KeThuaCayHtml() {
  const mono = { fontFamily: "var(--font-mono)" } as const;
  const DO = "#D12B2B";
  const XANH = "#1D4ED8";
  return (
    <Frame viewBox="0 0 640 340">
      <Lines x={320} y={24} lines={["Định dạng chảy từ phần tử cha xuống con cháu"]} size={13.5} weight={700} fill={C.ink} />

      {/* nut cha */}
      <rect x={250} y={48} width={140} height={50} rx={10} fill={C.sea} fillOpacity={0.14} stroke={C.sea} strokeWidth={2} />
      <text x={320} y={70} fontSize={13} fontWeight={700} fill={C.seaDeep} textAnchor="middle" style={mono}>{"<body>"}</text>
      <text x={320} y={89} fontSize={12} fill={XANH} textAnchor="middle" style={mono}>color: blue</text>

      {/* ba nhanh xuong con */}
      <path d="M 290 100 C 240 118, 160 122, 130 146" stroke={C.line} strokeWidth={2.5} fill="none" markerEnd="url(#arrow-soft)" />
      <path d="M 320 100 L 320 146" stroke={C.line} strokeWidth={2.5} fill="none" markerEnd="url(#arrow-soft)" />
      <path d="M 350 100 C 400 118, 480 122, 510 146" stroke={C.line} strokeWidth={2.5} fill="none" markerEnd="url(#arrow-soft)" />

      {/* con 1: co mau rieng nen chan ke thua */}
      <rect x={55} y={150} width={150} height={62} rx={10} fill={C.coral} fillOpacity={0.12} stroke={C.coral} strokeWidth={2} />
      <text x={130} y={172} fontSize={13} fontWeight={700} fill={C.coral} textAnchor="middle" style={mono}>{"<h1>"}</text>
      <text x={130} y={191} fontSize={12} fill={DO} textAnchor="middle" style={mono}>color: red</text>
      <Lines x={130} y={206} lines={["có mẫu riêng"]} size={12} weight={600} fill={C.coral} />

      {/* con 2 va 3: ke thua */}
      <rect x={245} y={150} width={150} height={62} rx={10} fill={C.white} stroke={C.line} strokeWidth={2} />
      <text x={320} y={172} fontSize={13} fontWeight={700} fill={C.inkSoft} textAnchor="middle" style={mono}>{"<h2>"}</text>
      <text x={320} y={191} fontSize={12} fill={XANH} textAnchor="middle" style={mono}>color: blue</text>
      <Lines x={320} y={206} lines={["kế thừa từ body"]} size={12} fill={C.inkSoft} />

      <rect x={435} y={150} width={150} height={62} rx={10} fill={C.white} stroke={C.line} strokeWidth={2} />
      <text x={510} y={172} fontSize={13} fontWeight={700} fill={C.inkSoft} textAnchor="middle" style={mono}>{"<p>"}</text>
      <text x={510} y={191} fontSize={12} fill={XANH} textAnchor="middle" style={mono}>color: blue</text>
      <Lines x={510} y={206} lines={["kế thừa từ body"]} size={12} fill={C.inkSoft} />

      {/* ket qua tren trinh duyet */}
      <rect x={24} y={232} width={592} height={72} rx={14} fill={C.white} stroke={C.line} strokeWidth={1.5} />
      <text x={320} y={258} fontSize={15} fontWeight={700} fill={DO} textAnchor="middle">Tính kế thừa của CSS</text>
      <text x={320} y={280} fontSize={12.5} fontWeight={700} fill={XANH} textAnchor="middle">1. Mô hình cây html</text>
      <text x={320} y={298} fontSize={12} fill={XANH} textAnchor="middle">Đây là đoạn đầu tiên…</text>

      <Lines
        x={320}
        y={326}
        lines={["h1 có mẫu riêng nên giữ màu đỏ — h2 và p không có nên nhận màu xanh của body"]}
        size={12}
        weight={600}
        fill={C.seaDeep}
      />
    </Frame>
  );
}

// ── Thang ưu tiên khi nhiều mẫu tranh nhau (Bài 14) ─────────────────────────
// SGK diễn giải bằng lời và KHÔNG có hình cho phần này, trong khi đây lại là
// chỗ khó nhất của bài. Xếp thành ba bậc để nhìn một cái là nhớ thứ tự.
function ThuTuUuTienCss() {
  const mono = { fontFamily: "var(--font-mono)" } as const;
  return (
    <Frame viewBox="0 0 640 320">
      <Lines x={320} y={24} lines={["Nhiều mẫu cùng tranh một phần tử — mẫu nào thắng?"]} size={13.5} weight={700} fill={C.ink} />

      {/* truc uu tien tang dan */}
      <path d="M 52 246 L 52 66" stroke={C.sea} strokeWidth={2.5} fill="none" markerEnd="url(#arrow)" />
      <Lines x={52} y={272} lines={["ưu tiên", "tăng dần"]} size={12} gap={16} weight={600} fill={C.seaDeep} />

      {/* bac 1 - cao nhat */}
      <rect x={100} y={58} width={500} height={54} rx={12} fill={C.gold} fillOpacity={0.28} stroke={C.gold} strokeWidth={2} />
      <text x={124} y={82} fontSize={15} fontWeight={700} fill={C.goldDeep} textAnchor="start" style={mono}>!important</text>
      <Lines x={124} y={101} lines={["ưu tiên cao nhất, không phụ thuộc viết ở đâu trong CSS"]} size={12} fill={C.inkSoft} anchor="start" />

      {/* bac 2 - thuong */}
      <rect x={100} y={124} width={500} height={54} rx={12} fill={C.sea} fillOpacity={0.1} stroke={C.sea} strokeWidth={2} />
      <Lines x={124} y={148} lines={["mẫu định dạng thường"]} size={14} weight={700} fill={C.seaDeep} anchor="start" />
      <Lines x={124} y={167} lines={["nhiều mẫu cùng bộ chọn → mẫu viết SAU CÙNG được áp dụng"]} size={12} fill={C.inkSoft} anchor="start" />

      {/* bac 3 - thap nhat */}
      <rect x={100} y={190} width={500} height={54} rx={12} fill={C.ink} fillOpacity={0.05} stroke={C.line} strokeWidth={2} />
      <text x={124} y={214} fontSize={15} fontWeight={700} fill={C.inkSoft} textAnchor="start" style={mono}>* </text>
      <Lines x={146} y={214} lines={["— bộ chọn mọi phần tử"]} size={13} weight={600} fill={C.inkSoft} anchor="start" />
      <Lines x={124} y={233} lines={["áp dụng cho mọi phần tử nhưng ưu tiên THẤP NHẤT"]} size={12} fill={C.inkSoft} anchor="start" />

      <rect x={24} y={262} width={592} height={44} rx={12} fill={C.gold} fillOpacity={0.1} />
      <Lines
        x={320}
        y={280}
        lines={[
          "h1 {text-align: center !important;} vẫn thắng h1 {text-align: left;}",
          "dù mẫu sau được viết xuống dưới",
        ]}
        size={12}
        gap={17}
        weight={600}
        fill={C.goldDeep}
      />
    </Frame>
  );
}

// ── Bài 15: Vòng tròn màu Hue + thang Saturation/Lightness (Hình 15.2) ──────
function polarPoint(cx: number, cy: number, r: number, angleDeg: number) {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}
function donutSlicePath(cx: number, cy: number, rOuter: number, rInner: number, a0: number, a1: number) {
  const p0 = polarPoint(cx, cy, rOuter, a0);
  const p1 = polarPoint(cx, cy, rOuter, a1);
  const p2 = polarPoint(cx, cy, rInner, a1);
  const p3 = polarPoint(cx, cy, rInner, a0);
  const large = a1 - a0 <= 180 ? 0 : 1;
  return `M ${p0.x} ${p0.y} A ${rOuter} ${rOuter} 0 ${large} 1 ${p1.x} ${p1.y} L ${p2.x} ${p2.y} A ${rInner} ${rInner} 0 ${large} 0 ${p3.x} ${p3.y} Z`;
}
function HeMauHsl() {
  const cx = 155, cy = 150, rO = 92, rI = 52;
  const hues = [
    "#FF0000", "#FF8000", "#FFFF00", "#80FF00", "#00FF00", "#00FF80",
    "#00FFFF", "#0080FF", "#0000FF", "#8000FF", "#FF00FF", "#FF0080",
  ];
  const marks = [0, 60, 120, 180, 240, 300];
  return (
    <Frame viewBox="0 0 640 320">
      <Lines x={320} y={24} lines={["Ba tham số của hệ màu HSL: Hue · Saturation · Lightness"]} size={13.5} weight={700} fill={C.ink} />

      {hues.map((col, i) => (
        <path key={i} d={donutSlicePath(cx, cy, rO, rI, i * 30, (i + 1) * 30)} fill={col} stroke={C.white} strokeWidth={1} />
      ))}
      {marks.map((deg, i) => {
        const p = polarPoint(cx, cy, rO + 16, deg);
        return <Lines key={i} x={p.x} y={p.y + 4} lines={[`${deg}°`]} size={12} fill={C.inkSoft} weight={600} />;
      })}
      <Lines x={cx} y={cy - 4} lines={["Hue"]} size={13} fill={C.ink} weight={700} />
      <Lines x={cx} y={cy + 14} lines={["0°–360°"]} size={12} fill={C.inkSoft} />

      <Lines x={470} y={70} lines={["Saturation (độ bão hoà)"]} size={13} weight={700} fill={C.ink} anchor="middle" />
      <defs>
        <linearGradient id="satGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9C9C9C" />
          <stop offset="100%" stopColor="#FF2020" />
        </linearGradient>
        <linearGradient id="lightGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="50%" stopColor="#FF2020" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
      <rect x={330} y={82} width={280} height={26} rx={8} fill="url(#satGrad)" stroke={C.line} strokeWidth={1} />
      <Lines x={330} y={124} lines={["0% — chỉ còn xám"]} size={12} fill={C.inkSoft} anchor="start" />
      <Lines x={610} y={124} lines={["100% — đủ màu"]} size={12} fill={C.inkSoft} anchor="end" />

      <Lines x={470} y={162} lines={["Lightness (độ sáng)"]} size={13} weight={700} fill={C.ink} anchor="middle" />
      <rect x={330} y={174} width={280} height={26} rx={8} fill="url(#lightGrad)" stroke={C.line} strokeWidth={1} />
      <Lines x={330} y={216} lines={["0% — đen"]} size={12} fill={C.inkSoft} anchor="start" />
      <Lines x={470} y={216} lines={["50% — màu đúng"]} size={12} fill={C.inkSoft} anchor="middle" />
      <Lines x={610} y={216} lines={["100% — trắng"]} size={12} fill={C.inkSoft} anchor="end" />

      <rect x={24} y={252} width={592} height={48} rx={12} fill={C.sea} fillOpacity={0.08} />
      <Lines x={320} y={272} lines={["hsl(h, s%, l%) — ví dụ hsl(0, 100%, 50%) là màu đỏ đúng,", "hsl(0, 0%, 50%) là màu xám (không có độ bão hoà)"]} size={12} gap={17} weight={600} fill={C.seaDeep} />
    </Frame>
  );
}

// ── Bài 15: Bốn bộ chọn tổ hợp E F, E>F, E+F, E~F (theo sơ đồ cuối trang 87) ──
function BoChonToHop() {
  const mono = { fontFamily: "var(--font-mono)" } as const;
  function Node({ x, y, label }: { x: number; y: number; label: string }) {
    return (
      <g>
        <rect x={x - 26} y={y - 20} width={52} height={40} rx={10} fill={C.white} stroke={C.sea} strokeWidth={2} />
        <text x={x} y={y + 6} fontSize={15} fontWeight={700} fill={C.seaDeep} textAnchor="middle" style={mono}>{label}</text>
      </g>
    );
  }
  const cols = [
    { cx: 90, title: "E F", desc: ["con/cháu,", "bất kỳ cấp nào"] },
    { cx: 250, title: "E > F", desc: ["con trực tiếp"] },
    { cx: 410, title: "E + F", desc: ["anh em,", "liền kề ngay sau"] },
    { cx: 570, title: "E ~ F", desc: ["anh em,", "không cần liền kề"] },
  ];
  return (
    <Frame viewBox="0 0 640 260">
      <Lines x={320} y={22} lines={["Bốn kiểu bộ chọn là tổ hợp các phần tử có quan hệ"]} size={13.5} weight={700} fill={C.ink} />

      {/* Cột 1: E F — qua nhiều cấp, đường chấm cong */}
      <Node x={cols[0].cx} y={64} label="E" />
      <path d={`M ${cols[0].cx - 10} 84 C ${cols[0].cx - 40} 110, ${cols[0].cx - 10} 120, ${cols[0].cx} 140`} stroke={C.coral} strokeWidth={2.5} fill="none" strokeDasharray="3 4" markerEnd="url(#arrow-coral)" />
      <Node x={cols[0].cx} y={160} label="F" />

      {/* Cột 2: E > F — trực tiếp, đường thẳng */}
      <Node x={cols[1].cx} y={64} label="E" />
      <line x1={cols[1].cx} y1={84} x2={cols[1].cx} y2={140} stroke={C.sea} strokeWidth={2.5} markerEnd="url(#arrow)" />
      <Node x={cols[1].cx} y={160} label="F" />

      {/* Cột 3: E + F — anh em liền kề, ngang hàng sát nhau */}
      <Node x={cols[2].cx - 30} y={110} label="E" />
      <line x1={cols[2].cx - 4} y1={110} x2={cols[2].cx + 24} y2={110} stroke={C.leaf} strokeWidth={2.5} markerEnd="url(#arrow)" />
      <Node x={cols[2].cx + 30} y={110} label="F" />

      {/* Cột 4: E ~ F — anh em không cần liền kề, ngang hàng xa nhau */}
      <Node x={cols[3].cx - 40} y={110} label="E" />
      <line x1={cols[3].cx - 14} y1={110} x2={cols[3].cx + 24} y2={110} stroke={C.gold} strokeWidth={2.5} strokeDasharray="3 4" markerEnd="url(#arrow-soft)" />
      <Node x={cols[3].cx + 40} y={110} label="F" />

      {cols.map((c, i) => (
        <g key={i}>
          <text x={c.cx} y={200} fontSize={14} fontWeight={700} fill={C.ink} textAnchor="middle" style={mono}>{c.title}</text>
          <Lines x={c.cx} y={220} lines={c.desc} size={12} fill={C.inkSoft} gap={14} />
        </g>
      ))}
    </Frame>
  );
}

// ── Bài 16: Mô hình khung CSS — margin/border/padding/content (Hình 16.3) ──
function BoxModelKhung() {
  const outer = { x: 60, y: 40, w: 500, h: 230 };
  const border = { x: 110, y: 66, w: 400, h: 178 };
  const padding = { x: 126, y: 80, w: 368, h: 150 };
  const content = { x: 190, y: 114, w: 240, h: 82 };
  return (
    <Frame viewBox="0 0 640 300">
      <Lines x={320} y={22} lines={["Các thông số chính của khung một phần tử HTML"]} size={13.5} weight={700} fill={C.ink} />

      <rect {...outer} fill="none" stroke={C.inkSoft} strokeWidth={1.5} strokeDasharray="5 4" />
      <rect {...border} fill="none" stroke={C.sea} strokeWidth={4} />
      <rect {...padding} fill={C.sea} fillOpacity={0.06} stroke={C.line} strokeWidth={1} strokeDasharray="3 3" />
      <rect {...content} fill={C.white} stroke={C.coral} strokeWidth={2} />
      <Lines x={content.x + content.w / 2} y={content.y + content.h / 2 - 4} lines={["Nội dung"]} size={13} weight={700} fill={C.coral} />
      <Lines x={content.x + content.w / 2} y={content.y + content.h / 2 + 14} lines={["width × height"]} size={12} fill={C.inkSoft} />

      {/* Nhãn bên phải, mỗi nhãn có mũi tên trỏ vào đúng lớp khung */}
      {[
        { ly: 58, px: outer.x + outer.w, py: 90, lines: ["Lề khung", "(margin)"] },
        { ly: 108, px: border.x + border.w, py: 130, lines: ["Khung", "(border)"] },
        { ly: 158, px: padding.x + padding.w, py: 170, lines: ["Vùng đệm", "(padding)"] },
        { ly: 208, px: content.x + content.w, py: content.y + content.h / 2, lines: ["Nội dung", "(content)"] },
      ].map((l, i) => (
        <g key={i}>
          <line x1={l.px} y1={l.py} x2={560} y2={l.ly + 4} stroke={C.line} strokeWidth={1.5} markerEnd="url(#arrow-soft)" />
          <Lines x={566} y={l.ly} lines={l.lines} size={12} fill={C.inkSoft} weight={500} anchor="start" gap={15} />
        </g>
      ))}

      {/* Chiều rộng, chú thích dưới */}
      <line x1={content.x} y1={content.y + content.h + 14} x2={content.x + content.w} y2={content.y + content.h + 14} stroke={C.gold} strokeWidth={2} markerEnd="url(#arrow)" markerStart="url(#arrow)" />
      <Lines x={content.x + content.w / 2} y={content.y + content.h + 30} lines={["Chiều rộng (width)"]} size={12} fill={C.goldDeep} weight={600} />
    </Frame>
  );
}

// ── Bài 17: Bảy mức ưu tiên khi áp dụng CSS (Bảng 17.3) ─────────────────────
function ThangBayMucUuTien() {
  const mono = { fontFamily: "var(--font-mono)" } as const;
  const levels = [
    { label: "!important", desc: "mức ưu tiên cao nhất" },
    { label: "CSS trực tiếp", desc: "thuộc tính style trong thẻ" },
    { label: "CSS theo thiết bị", desc: "@media (kích thước màn hình)" },
    { label: "Trọng số CSS", desc: "specificity của bộ chọn" },
    { label: "Thứ tự cuối cùng", desc: "cùng trọng số → viết sau thắng" },
    { label: "Kế thừa từ cha", desc: "không có mẫu nào khớp trực tiếp" },
    { label: "Mặc định trình duyệt", desc: "không có mẫu CSS nào cả" },
  ];
  const top = 34, bandH = 34, gap = 4;
  const h = top + levels.length * (bandH + gap) + 20;
  return (
    <Frame viewBox={`0 0 640 ${h}`}>
      <Lines x={320} y={20} lines={["Bảy mức ưu tiên khi áp dụng CSS — từ cao xuống thấp"]} size={13.5} weight={700} fill={C.ink} />

      <line x1={46} y1={top + 6} x2={46} y2={top + levels.length * (bandH + gap) - gap} stroke={C.sea} strokeWidth={2.5} markerEnd="url(#arrow)" />
      <Lines x={46} y={h - 20} lines={["ưu tiên", "giảm dần"]} size={12} fill={C.seaDeep} weight={600} gap={14} />

      {levels.map((lv, i) => {
        const y = top + i * (bandH + gap);
        const w = 560 - i * 8;
        const isTop = i === 0;
        return (
          <g key={i}>
            <rect x={70} y={y} width={w} height={bandH} rx={9} fill={isTop ? C.gold : C.sea} fillOpacity={isTop ? 0.26 : 0.08 + (levels.length - i) * 0.01} stroke={isTop ? C.gold : C.sea} strokeWidth={1.5} />
            <text x={90} y={y + 15} fontSize={12.5} fontWeight={700} fill={isTop ? C.goldDeep : C.seaDeep} style={mono}>{i + 1}. {lv.label}</text>
            <text x={90} y={y + 29} fontSize={12} fill={C.inkSoft}>{lv.desc}</text>
          </g>
        );
      })}
    </Frame>
  );
}

// ── Bài 17: Cách tính trọng số của bộ chọn (Bảng 17.4, 17.5) ────────────────
function TinhTrongSoBoChon() {
  const mono = { fontFamily: "var(--font-mono)" } as const;
  const parts = [
    { text: "p", kind: "phần tử", w: 1, color: C.sea },
    { text: "em", kind: "phần tử", w: 1, color: C.sea },
    { text: "#p123", kind: "mã ID", w: 100, color: C.coral },
  ];
  let x = 70;
  const chipY = 90;
  return (
    <Frame viewBox="0 0 640 220">
      <Lines x={320} y={22} lines={["Trọng số = tổng giá trị đóng góp của từng thành phần trong bộ chọn"]} size={13} weight={700} fill={C.ink} />
      <text x={320} y={54} fontSize={16} fontWeight={700} fill={C.ink} textAnchor="middle" style={mono}>p &gt; em#p123</text>

      {parts.map((p, i) => {
        const chipW = 96;
        const cx = x;
        x += chipW + 40;
        return (
          <g key={i}>
            <rect x={cx} y={chipY} width={chipW} height={54} rx={12} fill={p.color} fillOpacity={0.12} stroke={p.color} strokeWidth={2} />
            <text x={cx + chipW / 2} y={chipY + 22} fontSize={14} fontWeight={700} fill={p.color} textAnchor="middle" style={mono}>{p.text}</text>
            <Lines x={cx + chipW / 2} y={chipY + 38} lines={[`${p.kind}: ${p.w}`]} size={12} fill={C.inkSoft} />
            {i < parts.length - 1 && (
              <text x={cx + chipW + 20} y={chipY + 32} fontSize={18} fontWeight={700} fill={C.inkSoft} textAnchor="middle">+</text>
            )}
          </g>
        );
      })}

      <text x={x - 10} y={chipY + 32} fontSize={18} fontWeight={700} fill={C.inkSoft} textAnchor="middle">=</text>
      <rect x={x + 10} y={chipY - 6} width={90} height={66} rx={14} fill={C.gold} fillOpacity={0.22} stroke={C.gold} strokeWidth={2} />
      <text x={x + 55} y={chipY + 26} fontSize={20} fontWeight={700} fill={C.goldDeep} textAnchor="middle" style={mono}>102</text>
      <Lines x={x + 55} y={chipY + 46} lines={["trọng số"]} size={12} fill={C.goldDeep} weight={600} />

      <rect x={24} y={170} width={592} height={40} rx={10} fill={C.sea} fillOpacity={0.06} />
      <Lines x={320} y={194} lines={["ID = 100 điểm · class/pseudo-class/thuộc tính = 10 điểm · phần tử/pseudo-element = 1 điểm"]} size={12} fill={C.seaDeep} weight={600} />
    </Frame>
  );
}

// ── Bài 23: Cấu trúc phần đầu trang (Hình 23.1) ─────────────────────────────
function CauTrucDauTrang() {
  const badge = (cx: number, cy: number, n: string) => (
    <g>
      <circle cx={cx} cy={cy} r={11} fill={C.gold} stroke={C.white} strokeWidth={2} />
      <text x={cx} y={cy + 4} fontSize={12} fontWeight={700} fill={C.white} textAnchor="middle">
        {n}
      </text>
    </g>
  );
  return (
    <Frame viewBox="0 0 640 320">
      <Lines x={320} y={20} lines={["Cấu trúc phần đầu trang (header)"]} size={14} weight={700} fill={C.ink} />

      <rect x="40" y="40" width="560" height="120" rx="18" fill={C.sea} fillOpacity="0.05" stroke={C.sea} strokeWidth="2" />

      <rect x="58" y="58" width="42" height="42" rx="10" fill={C.coral} fillOpacity="0.18" stroke={C.coral} strokeWidth="2" />
      <text x="79" y="86" fontSize="20" textAnchor="middle">
        🏫
      </text>
      {badge(52, 52, "1")}

      <Lines x={116} y={84} lines={["Tên trang website"]} size={13} weight={700} anchor="start" fill={C.ink} />
      {badge(110, 52, "2")}

      <rect x="300" y="58" width="200" height="30" rx="15" fill={C.white} stroke={C.line} strokeWidth="1.5" />
      <text x="400" y="78" fontSize="12" textAnchor="middle" fill={C.inkSoft}>
        Trang chủ · Giới thiệu · Liên hệ
      </text>
      {badge(294, 52, "3")}

      <text x="560" y="80" fontSize="18" textAnchor="middle">
        🔍
      </text>
      {badge(566, 52, "4")}

      <Lines x={320} y={122} lines={["TIÊU ĐỀ TRANG"]} size={16} weight={700} fill={C.seaDeep} />
      {badge(224, 116, "5")}

      <Lines x={320} y={144} lines={["Thông tin tóm tắt của trang"]} size={12} fill={C.inkSoft} />
      {badge(224, 140, "6")}

      <Lines x={60} y={192} lines={["1 · Logo"]} size={12.5} weight={600} anchor="start" fill={C.ink} />
      <Lines x={60} y={216} lines={["2 · Tên trang"]} size={12.5} weight={600} anchor="start" fill={C.ink} />
      <Lines x={60} y={240} lines={["3 · Biểu tượng bảng chọn"]} size={12.5} weight={600} anchor="start" fill={C.ink} />

      <Lines x={340} y={192} lines={["4 · Biểu tượng tìm kiếm"]} size={12.5} weight={600} anchor="start" fill={C.ink} />
      <Lines x={340} y={216} lines={["5 · Tiêu đề"]} size={12.5} weight={600} anchor="start" fill={C.ink} />
      <Lines x={340} y={240} lines={["6 · Tóm tắt thông tin nổi bật"]} size={12.5} weight={600} anchor="start" fill={C.ink} />

      <rect x="40" y="264" width="560" height="40" rx="14" fill={C.gold} fillOpacity="0.14" />
      <Lines
        x={320}
        y={288}
        lines={["Phần đầu trang có vai trò như trang bìa thu gọn của một cuốn sách"]}
        size={12.5}
        weight={600}
        fill={C.goldDeep}
      />
    </Frame>
  );
}

// ── Bài 23: Cấu trúc phần thân trang (Hình 23.2) ────────────────────────────
function CauTrucThanTrang() {
  const block = (x: number, y: number, w: number, h: number, label: string) => (
    <g key={label}>
      <rect x={x} y={y} width={w} height={h} rx={14} fill={C.white} stroke={C.sea} strokeWidth={2} strokeDasharray="6 5" />
      <text x={x + w / 2} y={y + h / 2 - 4} fontSize={20} textAnchor="middle">
        🖼️
      </text>
      <rect x={x + 12} y={y + h - 26} width={w - 24} height={22} rx={11} fill={C.sea} fillOpacity={0.12} />
      <text x={x + w / 2} y={y + h - 10} fontSize={12} fontWeight={700} textAnchor="middle" fill={C.seaDeep}>
        {label}
      </text>
    </g>
  );
  return (
    <Frame viewBox="0 0 640 260">
      <Lines
        x={320}
        y={20}
        lines={["Cấu trúc phần thân trang (body) — mỗi khối một tiêu đề riêng"]}
        size={13.5}
        weight={700}
        fill={C.ink}
      />

      {block(40, 44, 270, 70, "Khối nội dung 1.1")}
      {block(330, 44, 270, 70, "Khối nội dung 1.2")}

      {block(40, 134, 176, 70, "Khối 2.1")}
      {block(236, 134, 176, 70, "Khối 2.2")}
      {block(432, 134, 176, 70, "Khối 2.3")}

      <rect x="40" y="220" width="560" height="34" rx="14" fill={C.gold} fillOpacity="0.14" />
      <Lines
        x={320}
        y={242}
        lines={["Mỗi khối có thể chứa văn bản, hình ảnh, âm thanh, biểu mẫu hay ứng dụng nhúng"]}
        size={12}
        weight={600}
        fill={C.goldDeep}
      />
    </Frame>
  );
}

// ── Bài 18: Bố cục website — mỗi phần một lớp CSS riêng (Hình 18.2) ─────────
function BoCucWebsiteClb() {
  const cell = (x: number, y: number) => (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width={244} height={38} rx={8} fill={C.white} stroke={C.gold} strokeWidth={1.5} />
      <text x={x + 122} y={y + 24} fontSize={12} textAnchor="middle" fill={C.goldDeep} fontWeight={600}>
        Ảnh minh hoạ / Nội dung
      </text>
    </g>
  );
  return (
    <Frame viewBox="0 0 640 340">
      <Lines x={320} y={20} lines={["Bố cục website — mỗi phần một lớp CSS riêng"]} size={13.5} weight={700} fill={C.ink} />

      <rect x="40" y="40" width="560" height="90" rx="14" fill={C.sea} fillOpacity="0.1" stroke={C.sea} strokeWidth="2" />
      <Lines x={320} y={58} lines={["Đầu trang (Header)"]} size={13} weight={700} fill={C.seaDeep} />
      <rect x="56" y="66" width="528" height="26" rx="8" fill={C.white} stroke={C.sea} strokeWidth="1.5" />
      <text x={320} y={83} fontSize={12.5} textAnchor="middle" fill={C.seaDeep} fontWeight={600}>
        Banner — .banner
      </text>
      <rect x="56" y="96" width="528" height="24" rx="8" fill={C.white} stroke={C.sea} strokeWidth="1.5" />
      <text x={320} y={112} fontSize={12.5} textAnchor="middle" fill={C.seaDeep} fontWeight={600}>
        Khẩu hiệu — .slogan
      </text>

      <rect x="40" y="140" width="560" height="130" rx="14" fill={C.gold} fillOpacity="0.12" stroke={C.gold} strokeWidth="2" />
      <Lines x={320} y={158} lines={["Phần nội dung chính — .content"]} size={13} weight={700} fill={C.goldDeep} />
      {cell(56, 168)}
      {cell(340, 168)}
      {cell(56, 216)}
      {cell(340, 216)}

      <rect x="40" y="284" width="560" height="40" rx="14" fill={C.coral} fillOpacity="0.14" stroke={C.coral} strokeWidth="2" />
      <Lines x={320} y={308} lines={["Cuối trang (Footer) — .footer"]} size={13} weight={700} fill={C.coral} />
    </Frame>
  );
}

// ── Bài 18: Bố cục slogan — ba lớp CSS lồng nhau (Hình 18.3) ────────────────
function BoCucSloganLongLop() {
  const o = [
    { label: "Ô 1", cls: ".block_3" },
    { label: "Ô 2", cls: ".block_3" },
    { label: "Ô 3", cls: ".block_3" },
  ];
  const xs = [80, 246, 412];
  return (
    <Frame viewBox="0 0 640 280">
      <Lines x={320} y={20} lines={["Bố cục slogan — ba lớp CSS lồng nhau"]} size={13.5} weight={700} fill={C.ink} />

      <rect x="40" y="60" width="560" height="170" rx="14" fill="none" stroke={C.gold} strokeWidth="2.5" />
      <rect x="40" y="36" width="104" height="26" rx="6" fill={C.gold} />
      <text x={92} y={54} fontSize={12.5} fontWeight={700} textAnchor="middle" fill={C.white}>
        .slogan
      </text>

      <rect x="64" y="96" width="512" height="112" rx="12" fill="none" stroke={C.leaf} strokeWidth="2.5" />
      <rect x="64" y="76" width="80" height="24" rx="6" fill={C.leaf} />
      <text x={104} y={93} fontSize={12.5} fontWeight={700} textAnchor="middle" fill={C.white}>
        .row
      </text>

      {o.map((b, i) => (
        <g key={b.label}>
          <rect x={xs[i]} y="118" width="150" height="70" rx="10" fill={C.sea} fillOpacity="0.08" stroke={C.sea} strokeWidth="2" />
          <Lines x={xs[i] + 75} y={148} lines={[b.label]} size={14} weight={700} fill={C.seaDeep} />
          <Lines x={xs[i] + 75} y={168} lines={[b.cls]} size={12} fill={C.seaDeep} />
        </g>
      ))}

      <rect x="40" y="240" width="560" height="34" rx="14" fill={C.gold} fillOpacity="0.14" />
      <Lines
        x={320}
        y={262}
        lines={["Mỗi ô rộng 1/3 hàng nhờ .block_3 { width: 33.33333333%; }"]}
        size={12.5}
        weight={600}
        fill={C.goldDeep}
      />
    </Frame>
  );
}

const DIAGRAMS: Record<string, () => JSX.Element> = {
  "turing-test": TuringTest,
  "ai-hep-va-manh": AiHepVaManh,
  "ai-linh-vuc": AiLinhVuc,
  "chatgpt-flow": ChatGptFlow,
  "hub-vs-switch": HubVsSwitch,
  "router-lan-wan": RouterLanWan,
  "modem-so-tuong-tu": ModemSoTuongTu,
  "dia-chi-ip": DiaChiIp,
  "bang-dinh-tuyen": BangDinhTuyen,
  "tcp-cat-goi": TcpCatGoi,
  "chia-se-thu-muc": ChiaSeThuMuc,
  "may-in-mang": MayInMang,
  "uu-nhuoc-giao-tiep-mang": UuNhuocGiaoTiepMang,
  "bon-yeu-to-nhan-van": BonYeuToNhanVan,
  "phan-tu-html": PhanTuHtml,
  "cay-html": CayHtml,
  "cu-phap-thuoc-tinh": CuPhapThuocTinh,
  "div-va-span": DivVaSpan,
  "cay-thu-muc-website": CayThuMucWebsite,
  "kich-thuoc-anh": KichThuocAnh,
  "iframe-lien-ket": IframeLienKet,
  "label-for-id": LabelForId,
  "radio-checkbox-select": RadioCheckboxSelect,
  "cau-truc-css": CauTrucCss,
  "ba-cach-css": BaCachCss,
  "baseline-line-height": BaselineLineHeight,
  "ke-thua-cay-html": KeThuaCayHtml,
  "thu-tu-uu-tien-css": ThuTuUuTienCss,
  "he-mau-hsl": HeMauHsl,
  "bo-chon-to-hop": BoChonToHop,
  "box-model-khung": BoxModelKhung,
  "thang-bay-muc-uu-tien": ThangBayMucUuTien,
  "tinh-trong-so-bo-chon": TinhTrongSoBoChon,
  "cau-truc-dau-trang": CauTrucDauTrang,
  "cau-truc-than-trang": CauTrucThanTrang,
  "bo-cuc-website-clb": BoCucWebsiteClb,
  "bo-cuc-slogan-long-lop": BoCucSloganLongLop,
};

export default function Diagram({ name }: { name: string }) {
  const Cmp = DIAGRAMS[name];
  if (!Cmp) return null;
  return <Cmp />;
}
