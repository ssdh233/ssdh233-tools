import { useRouter } from "next/router";
import { useCallback } from "react";
import ImageMarker from "./ImageMarker";

const data = {
  "9_0": [1, 2, 3, 4, 5, 11, 12, 13, 14],
  "9_1": [0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "9_2": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "9_3": [0, 1, 2, 3, 4],
  "9_4": [],
  "8_0": [1, 2, 3, 4, 5, 11, 12, 13, 14],
  "8_1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "8_2": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "8_3": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "8_4": [0, 1, 2, 3, 4],
  "7_0": [1, 2, 3, 4, 5, 11, 12, 13, 14],
  "7_1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "7_2": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "7_3": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "7_4": [0, 1, 2, 3, 4],
  "6_0": [1, 2, 3, 4, 5, 11, 12, 13, 14],
  "6_1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "6_2": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "6_3": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "6_4": [0, 1, 2, 3, 4],
  "5_0": [1, 2, 3, 4, 5, 11, 12, 13, 14],
  "5_1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "5_2": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "5_3": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "5_4": [0, 1, 2, 3, 4],
  "4_0": [1, 2, 3, 4, 5, 11, 12, 13, 14],
  "4_1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "4_2": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "4_3": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "4_4": [0, 1, 2, 3, 4],
  "3_0": [1, 2, 3, 4, 5, 11, 12, 13, 14],
  "3_1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "3_2": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "3_3": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "3_4": [0, 1, 2, 3, 4],
  "2_0": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "2_1": [0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "2_2": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "2_3": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "2_4": [0, 1, 2, 3, 4],
  "1_0": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "1_1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
};

const initChecked = {
  "9_0": Array(15).fill(0),
  "9_1": Array(15).fill(0),
  "9_2": Array(15).fill(0),
  "9_3": Array(15).fill(0),
  "9_4": Array(15).fill(0),
  "8_0": Array(15).fill(0),
  "8_1": Array(15).fill(0),
  "8_2": Array(15).fill(0),
  "8_3": Array(15).fill(0),
  "8_4": Array(15).fill(0),
  "7_0": Array(15).fill(0),
  "7_1": Array(15).fill(0),
  "7_2": Array(15).fill(0),
  "7_3": Array(15).fill(0),
  "7_4": Array(15).fill(0),
  "6_0": Array(15).fill(0),
  "6_1": Array(15).fill(0),
  "6_2": Array(15).fill(0),
  "6_3": Array(15).fill(0),
  "6_4": Array(15).fill(0),
  "5_0": Array(15).fill(0),
  "5_1": Array(15).fill(0),
  "5_2": Array(15).fill(0),
  "5_3": Array(15).fill(0),
  "5_4": Array(15).fill(0),
  "4_0": Array(15).fill(0),
  "4_1": Array(15).fill(0),
  "4_2": Array(15).fill(0),
  "4_3": Array(15).fill(0),
  "4_4": Array(15).fill(0),
  "3_0": Array(15).fill(0),
  "3_1": Array(15).fill(0),
  "3_2": Array(15).fill(0),
  "3_3": Array(15).fill(0),
  "3_4": Array(15).fill(0),
  "2_0": Array(15).fill(0),
  "2_1": Array(15).fill(0),
  "2_2": Array(15).fill(0),
  "2_3": Array(15).fill(0),
  "2_4": Array(15).fill(0),
  "1_0": Array(15).fill(0),
  "1_1": Array(15).fill(0),
};

const decode = (c) => {
  try {
    const checked = atob(c)
      .split(",")
      .map((cc) => cc.split(":"))
      .reduce((acc, [key, value]) => {
        const num = Number(value);
        acc[key] = Array(15)
          .fill(0)
          .map((_, i) => (((2 ** i) & num) === 0 ? 0 : 1));
        return acc;
      }, {});
    console.log("decode result", checked);
    return checked;
  } catch (e) {
    console.error(e);
    return initChecked;
  }
};

const encode = (checked) => {
  const result = btoa(
    Object.keys(checked)
      .map((key) => {
        return (
          key +
          ":" +
          checked[key].reduce((acc, cur, index) => {
            return acc + cur * 2 ** index;
          }, 0)
        );
      })
      .join(",")
  );
  console.log({ result });
  return result;
};

function PopnCard() {
  const router = useRouter();
  const checked = decode(router.query.c);
  const setChecked = useCallback(
    (blockKey, i) => {
      const newChecked = { ...checked };
      newChecked[blockKey] = newChecked[blockKey].slice(0);
      newChecked[blockKey][i] = 1 - newChecked[blockKey][i];

      router.push(
        { pathname: router.pathname, query: { c: encode(newChecked) } },
        undefined,
        { scroll: false, shallow: true }
      );
    },
    [checked, router]
  );

  return (
    <div>
      <button
        onClick={() => {
          localStorage.setItem("c", router.query.c);
        }}
      >
        ブラウザに保存
      </button>
      <button
        onClick={() => {
          try {
            const c = localStorage.getItem("c");
            router.push(
              { pathname: router.pathname, query: { c: c } },
              undefined,
              { scroll: false, shallow: true }
            );
          } catch (e) {
            console.error(e);
          }
        }}
      >
        ブラウザから読み取る
      </button>
      <h1>ポップンカードコレクター</h1>
      <div>
        {Object.keys(data).map((key) => {
          const [a, b] = key.split("_").map(Number);
          return (
            <>
              {b === 0 ? (
                <div className="title-ver">
                  ポップンミュージックカード コネクトvol.{a}
                </div>
              ) : (
                <img src="https://eacache.s.konaminet.jp/game/card_connect/1/images/gacha/bar.png" />
              )}
              {key !== "9_4" && (
                <ImageMarker
                  blockKey={key}
                  src={`https://eacache.s.konaminet.jp/game/card_connect/1/images/gacha/popn/popn_detail_${key}.png`}
                  cardIndexes={data[key]}
                  checked={checked}
                  setChecked={setChecked}
                />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default PopnCard;
