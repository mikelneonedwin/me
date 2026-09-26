import { ImageResponse } from "next/og";

export const alt = "Winner Edwin — Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#0d0e0d",
        padding: "72px 84px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        position: "relative",
      }}
    >
      {/* Subtle grid pattern background accent */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.04) 2%, transparent 0%)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient emerald radial glow behind content */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          right: "5%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(52, 211, 153, 0.12) 0%, rgba(13, 14, 13, 0) 70%)",
        }}
      />

      {/* Top Header / Status bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Identity & location indicator */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: "#10b981",
              boxShadow: "0 0 14px #10b981",
            }}
          />
          <span
            style={{
              fontSize: "26px",
              color: "#f3f4f6",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              fontFamily: "monospace",
            }}
          >
            Winner Edwin
          </span>
          <span
            style={{
              fontSize: "22px",
              color: "#9ca3af",
              fontFamily: "monospace",
              marginLeft: "4px",
            }}
          >
            / Uyo, Nigeria 🇳🇬
          </span>
        </div>

        {/* Icon Badge using the exact app/icon.png lightning bolt geometry and amber hue */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "68px",
            height: "68px",
            borderRadius: "18px",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 0 24px rgba(251, 178, 28, 0.18)",
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 512 512"
            fill="none"
            style={{ display: "flex" }}
          >
            <polygon
              points="346,2 274,176 426,244 146,510 291,288 97,227"
              fill="#fbb21c"
            />
          </svg>
        </div>
      </div>

      {/* Center: Main title & Role */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "16px",
        }}
      >
        {/* Terminal prompt pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-start",
            padding: "9px 20px",
            borderRadius: "8px",
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            fontFamily: "monospace",
            fontSize: "20px",
            color: "#34d399",
          }}
        >
          &gt; I build web applications.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <h1
            style={{
              fontSize: "78px",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.04em",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Winner Edwin
          </h1>
          <span
            style={{
              fontSize: "44px",
              fontWeight: 500,
              color: "#34d399",
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Software Engineer
          </span>
        </div>

        <p
          style={{
            fontSize: "26px",
            color: "#9ca3af",
            lineHeight: 1.45,
            maxWidth: "920px",
            margin: 0,
          }}
        >
          Building fast, lightweight software, distributed backend systems, and
          resilient web platforms.
        </p>
      </div>

      {/* Bottom Bar: Philosophy quote + domain */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          paddingTop: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontFamily: "monospace",
            fontSize: "21px",
            color: "#d1d5db",
          }}
        >
          <span style={{ color: "#9ca3af" }}>approach:</span>
          <span style={{ color: "#34d399", fontWeight: 600 }}>
            make it work, make it right, make it fast.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "monospace",
            fontSize: "20px",
            color: "#9ca3af",
          }}
        >
          mikelneonedwin.vercel.app
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
