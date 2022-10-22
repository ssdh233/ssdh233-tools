import { useCallback, useState } from "react";

function Mahjong({}) {
  const [haifuData, setHaifuData] = useState(null);

  const handleFileChange = useCallback((ev) => {
    console.log("ev", ev.target.files);
    const reader = new FileReader();
    reader.readAsText(ev.target.files[0]);

    reader.onload = (ev) => {
      setHaifuData(JSON.parse(ev.target.result));
    };
  }, []);

  console.log(haifuData);

  return (
    <>
      <label htmlFor="haifu">雀魂の牌譜を選択してください</label>
      <div>
        <input
          type="file"
          id="haifu"
          accept=".json"
          onChange={handleFileChange}
        ></input>
      </div>
      <div>
        {haifuData?.log.map((x, i) => {
          if (x[16][2]) {
            x[16][2] = x[16][2].slice(0, 4);
            x[16][2][3] = x[16][2][3]
              .replace("Haneman ", "跳満")
              .replace("Mangan ", "満貫")
              .replace("Baiman ", "倍満")
              .replace("Sanbaiman ", "三倍満");
          }
          if (x[16][4]) {
            x[16][4] = x[16][4].slice(0, 4);
            x[16][4][3] = x[16][4][3]
              .replace("Haneman ", "跳満")
              .replace("Mangan ", "満貫")
              .replace("Baiman ", "倍満")
              .replace("Sanbaiman ", "三倍満");
          }
          console.log(x[16]);
          const url = `https://tenhou.net/6/#json=${encodeURIComponent(
            JSON.stringify({
              title: ["", ""],
              name: ["Aさん", "Bさん", "Cさん", "Dさん"],
              rule: { disp: "鳳南喰赤", aka: 1 },
              log: [x],
            })
          )}`;
          return (
            <div key={i}>
              <a href={url}>
                {x[0][0] < 8 ? (x[0][0] < 4 ? "東" : "南") : "西"}
                {(x[0][0] + 1) % 4 || 4}局 {x[0][1]}本場
              </a>
              <input
                value={url}
                onFocus={(event) => {
                  event.target.select();
                }}
              ></input>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Mahjong;
