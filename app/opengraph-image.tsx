import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "Workpool: oo... smart.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fonts = join(process.cwd(), "assets/fonts");
  const [bold, medium] = await Promise.all([
    readFile(join(fonts, "Poppins-Bold.ttf")),
    readFile(join(fonts, "Poppins-Medium.ttf")),
  ]);
  const dot = { width: 0.705 * 150, height: 0.705 * 150, borderRadius: 9999, background: "#4B69B1" };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#131213",
          color: "#E9E6E5",
          fontFamily: "Poppins",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", fontSize: 150, fontWeight: 700, lineHeight: 1 }}>
          <span>WORKP</span>
          <div style={{ display: "flex", margin: "0 3px", marginBottom: 0.15 * 150 }}>
            <div style={dot} />
            <div style={dot} />
          </div>
          <span>L</span>
        </div>
        <div style={{ marginTop: 28, fontSize: 52, fontWeight: 500 }}>{site.signoff}</div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Poppins", data: bold, weight: 700, style: "normal" },
        { name: "Poppins", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
