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
        <Item
          href="/counter"
          title="カウンター"
          description="シンプルなマルチカウンター"
        />
        <Item
          href="https://ssdh233.me/popn-score-tool"
          title="ポップンスコアツール"
          description="ケルパニさんのスコアツールから改造したポップンスコアツール"
        />
        <Item
          href="https://ssdh233.me/black"
          title="BLACK"
          description="真っ暗なだけ"
        />
        <Item
          href="/popn-sudden"
          title="ポップンSUDDEN計算"
          description="ポップン新筐体のSUDDEN+数値計算ツール"
        />
      </div>
      <a href="https://github.com/ssdh233/ssdh233-tools" style={{ marginRight: 8 }}>Github</a>
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
