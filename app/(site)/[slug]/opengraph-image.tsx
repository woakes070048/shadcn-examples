import { ImageResponse } from "next/og";
import { Example } from "@/types/example";
import data from "@/app/(site)/[slug]/data.json";

export const size = {
  width: 1200,
  height: 630
};

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

  const logoSrc = await fetch(new URL("logo-light.png", process.env.BASE_URL)).then((res) =>
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
          backgroundImage: "linear-gradient(to bottom, #dbf4ff, #fff1f1)"
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
          <div tw="invert bg-white p-3 rounded-lg flex bg-black">
            <img width={36} height={36} tw="object-cover" src={logoBase64} />
          </div>
          <span style={{ fontSize: 32 }}>shadcnexamples.com</span>
        </div>
        <div
          tw="font-bold text-8xl mb-10"
          style={{
            display: "flex",
            marginTop: 30,
            whiteSpace: "pre-wrap",
            backgroundImage: "linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }}>
          <b>{exampleData.meta.title}</b>
        </div>
        <div
          tw="text-black/70 text-3xl max-w-6xl"
          style={{
            display: "flex",
            fontWeight: 200,
            whiteSpace: "pre-wrap"
          }}>
          <b>{exampleData.info.description}</b>
        </div>
        <div tw="ml-3 mt-14 flex ">
          <a tw="flex gap-3 items-center justify-center bg-black rounded-lg px-8 py-6 text-base font-medium text-3xl text-white">
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
