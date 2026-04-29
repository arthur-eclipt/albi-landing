import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #F4C95D 0%, #F08A5D 40%, #E27396 70%, #B084CC 100%)",
          color: "#1F1A2E",
          fontWeight: 800,
          fontSize: 20,
          fontFamily: "Georgia, serif",
          letterSpacing: -0.5,
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}
