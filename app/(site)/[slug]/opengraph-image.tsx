import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { Example } from "@/types/example";
import data from "@/app/(site)/[slug]/data.json";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

const getFont = async (url: URL) => {
  const res = await fetch(url);
  return await res.arrayBuffer();
};

function arrayBufferToBase64(buffer: ArrayBuffer) {
  const binary = String.fromCharCode(...new Uint8Array(buffer));
  return `data:image/png;base64,${Buffer.from(binary, "binary").toString("base64")}`;
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exampleData: Example | undefined = data.find((item) => item.href === slug);

  const interBold = await getFont(new URL("fonts/inter/Inter_28pt-Bold.ttf", process.env.BASE_URL));

  const logoSrc = await fetch(new URL("logo.png", process.env.BASE_URL)).then((res) =>
    res.arrayBuffer()
  );

  const logoBase64 = arrayBufferToBase64(logoSrc);

  if (!exampleData) return null;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "nowrap",
          background: "linear-gradient(46deg, rgba(0, 0, 0, 1) 0%, rgba(94, 3, 82, 1) 100%) "
        }}>
        <div
          style={{
            position: "absolute",
            top: 30,
            left: 30,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
            backgroundSize: "100px 100px",
            zIndex: 10,
            opacity: 0.15
          }}></div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            alignItems: "center",
            top: 30,
            left: 30,
            gap: 20
          }}>
          <div tw="invert bg-white p-2 rounded-lg flex">
            <img width={36} height={36} tw="object-cover" src={logoBase64} />
          </div>
          <span style={{ fontSize: 32 }} tw="text-white/80">
            shadcnexamples.com
          </span>
        </div>
        <div
          tw="font-bold text-6xl mb-8"
          style={{
            display: "flex",
            marginTop: 30,
            whiteSpace: "pre-wrap",
            color: "white"
          }}>
          <b>{exampleData.meta.title}</b>
        </div>
        <div
          tw="text-white/70 text-2xl max-w-3xl"
          style={{
            display: "flex",
            fontStyle: "normal",
            whiteSpace: "pre-wrap"
          }}>
          <b>{exampleData.info.description}</b>
        </div>
        <div tw="ml-3 mt-14 flex ">
          <a tw="flex gap-3 items-center justify-center bg-white rounded-lg px-7 py-4 text-base font-medium text-xl text-black">
            Preview Example <span style={{ display: "flex", marginLeft: "10px" }}>&#62;</span>
          </a>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interBold,
          style: "normal",
          weight: 600
        }
      ]
    }
  );
}
