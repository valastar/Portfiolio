import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const alt = `${portfolio.profile.name} | ${portfolio.profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const { name, role } = portfolio.profile;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0A0A0B",
          color: "#EDEDF0",
          borderLeft: "16px solid #8B9CFF",
        }}
      >
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700 }}>{name}</div>
        <div style={{ display: "flex", fontSize: 44, color: "#8B9CFF", marginTop: 16 }}>{role}</div>
        <div style={{ display: "flex", fontSize: 30, color: "#8B8D98", marginTop: 40 }}>
          Next.js · TypeScript · Tailwind CSS
        </div>
      </div>
    ),
    size
  );
}