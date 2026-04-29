import { ImageResponse } from "next/og";

export const alt = "Albi&Us — Little Adventures, Big Moments Together";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#FAFAF7",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(244,201,93,0.35), transparent 45%), radial-gradient(circle at 85% 30%, rgba(226,115,150,0.35), transparent 45%), radial-gradient(circle at 70% 90%, rgba(176,132,204,0.35), transparent 50%), radial-gradient(circle at 10% 90%, rgba(125,190,122,0.30), transparent 45%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 36,
            color: "#1F1A2E",
            letterSpacing: -1,
            fontWeight: 700,
          }}
        >
          Albi&Us
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#1F1A2E",
            fontSize: 104,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: -3,
          }}
        >
          <div style={{ display: "flex" }}>Little adventures.</div>
          <div style={{ display: "flex" }}>Big moments.</div>
          <div style={{ display: "flex", color: "#F08A5D" }}>Together.</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#5C5470",
            fontSize: 26,
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          <div style={{ display: "flex", maxWidth: 720 }}>
            An activity card app for ages 3–5 and their favourite grown-up.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#1F1A2E",
              fontWeight: 600,
            }}
          >
            Coming soon
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
