import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Item
        href="/mahjong-souls-haifu-converter"
        title="mahjong souls haifu converter"
        description="雀魂の牌譜をNAGAに認識できるように変換するもの"
      />
      <Item
        href="/ffmpeg-concat-helper"
        title="ffmpeg concat helper"
        description="ffmpeg concat用のファイルリストを生成するもの"
      />
      <Item
        href="/popn-card"
        title="popn card collector"
        description="ポップンミュージックのカードのメモ帳"
      />
    </div>
  );
}

function Item({ href, title, description }) {
  return (
    <div>
      <Link href={href}>
        <a style={{ marginRight: 0 }}>{title}</a>
      </Link>
      :{description}
    </div>
  );
}
