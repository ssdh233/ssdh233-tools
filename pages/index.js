import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>自作ツール置き場</h2>
      <div
        style={{ display: "flex", flexDirection: "column", marginBottom: 16 }}
      >
        <Item
          href="/mahjong-souls-haifu-converter"
          title="雀魂NAGA用牌譜変換器"
          description="雀魂の牌譜をNAGAに認識できるように変換するもの"
        />
        <Item
          href="/ffmpeg-concat-helper"
          title="ffmpeg concat helper"
          description="ffmpeg concat用のファイルリストを生成するもの"
        />
        <Item
          href="/popn-card"
          title="ポップンカード"
          description="ポップンミュージックのカードのメモ帳"
        />
      </div>
      <a href="https://github.com/ssdh233/ssdh233-tools">Github</a>
      <a href="https://ssdh233.me">Home</a>
    </>
  );
}

function Item({ href, title, description }) {
  return (
    <div>
      <Link href={href}>
        <a style={{ marginRight: 8 }}>{title}</a>
      </Link>
      <span style={{ color: "lightgray", fontSize: "90%" }}>{description}</span>
    </div>
  );
}
