import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import ImageMarker from "./ImageMarker";

const VOLUME_COUNT = 10;

const data = {
  "10_0": [1, 2, 3, 4, 5, 11, 12, 13, 14],
  "10_1": [0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "10_2": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  "10_3": [0, 1, 2, 3, 4],
  "10_4": [],
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

const initChecked = Object.keys(data).reduce((result, key) => {
  return { ...result, [key]: Array(15).fill(0) };
}, {});

const decode = (c) => {
  try {
    if (c) {
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
      return checked;
    } else {
      return initChecked;
    }
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
  return result;
};

function PopnCard() {
  const router = useRouter();
  const checked = decode(router.query.c);
  const setChecked = useCallback(
    (blockKey, i) => {
      const newChecked = { ...checked };
      newChecked[blockKey] =
        newChecked[blockKey]?.slice(0) || Array(15).fill(0);
      newChecked[blockKey][i] = 1 - newChecked[blockKey][i];

      router.push(
        { pathname: router.pathname, query: { c: encode(newChecked) } },
        undefined,
        { scroll: false, shallow: true }
      );
    },
    [checked, router]
  );

  const [scale, setScale] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const qc = params.get("c");

    if (!qc) {
      const c = localStorage.getItem("c");
      if (c) {
        router.push({ pathname: router.pathname, query: { c: c } }, undefined, {
          scroll: false,
          shallow: true,
        });
      }
    }
  }, [router]);

  const adjustSize = useCallback(() => {
    setScale(Math.min(Math.floor((window.innerWidth / 1080) * 100) / 100, 1));
  }, [setScale]);

  useEffect(() => {
    adjustSize();
  }, [adjustSize]);

  useEffect(() => {
    window.addEventListener("resize", adjustSize);
    return () => window.removeEventListener("resize", adjustSize);
  }, [adjustSize]);

  const totalCount = Object.keys(data).reduce((acc, cur) => {
    const [a] = cur.split("_");
    if (!acc[a]) acc[a] = 0;
    acc[a] += data[cur].length;
    return acc;
  }, {});

  const collectedCount = Object.keys(checked).reduce((acc, cur) => {
    const [a] = cur.split("_");
    if (!acc[a]) acc[a] = 0;
    acc[a] += checked[cur].reduce((acc, cur) => acc + cur, 0);
    return acc;
  }, {});

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: 1080,
        }}
      >
        <button
          onClick={() => {
            const c = localStorage.getItem("c");
            if (c) {
              if (
                window.confirm(
                  "すでに保存されているデータがあります。上書きしますか？"
                )
              ) {
                localStorage.setItem("c", router.query.c);
              }
            } else {
              localStorage.setItem("c", router.query.c);
            }
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
      </div>
      <h1 style={{ fontSize: "1.5em" }}>ポップンカードコレクター</h1>
      <Link href="/popn-card/qanda">
        <a style={{ display: "block" }}>Q & A</a>
      </Link>
      <div>
        <h3>統計</h3>
        {Array(VOLUME_COUNT)
          .fill(0)
          .map((_, i) => {
            const key = VOLUME_COUNT - i;
            return (
              <div style={{ display: "flex", alignItems: "center" }} key={key}>
                <span style={{ marginRight: 8, width: 48 }}>vol.{key}</span>
                <span
                  style={{
                    height: 16,
                    border: "1px solid",
                    width: totalCount[key] * 5,
                    textAlign: "center",
                    fontSize: 12,
                    position: "relative",
                  }}
                >
                  {(collectedCount[key] || 0) + "/" + totalCount[key]}
                  <span
                    style={{
                      height: 16,
                      width: collectedCount[key] * 5,
                      backgroundColor: "gray",
                      display: "block",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      opacity: 0.3,
                    }}
                  ></span>
                </span>
              </div>
            );
          })}
      </div>
      <div
        style={{
          transformOrigin: "top left",
          transform: `scale(${scale})`,
          maxWidth: 1080,
        }}
      >
        <div>
          {Object.keys(data).map((key) => {
            const [a, b] = key.split("_").map(Number);
            return (
              <React.Fragment key={key}>
                {b === 0 ? (
                  <div
                    style={{
                      width: 1000,
                      color: "#1f5b70",
                      background: "#fff",
                      backgroundImage:
                        "url(https://eacache.s.konaminet.jp/game/card_connect/1/images/original/template/frame01.png) , url(https://eacache.s.konaminet.jp/game/card_connect/1/images/original/template/frame02.png)",
                      backgroundPosition: "top left , bottom right",
                      backgroundRepeat: "no-repeat , no-repeat",
                      fontSize: 28,
                      fontWeight: "bold",
                      textAlign: "center",
                      border: "2px solid #1f5b70",
                      padding: 15,
                      margin: "40px auto 0",
                    }}
                  >
                    ポップンミュージックカード コネクトvol.{a}
                  </div>
                ) : (
                  <img src="https://eacache.s.konaminet.jp/game/card_connect/1/images/gacha/bar.png" />
                )}
                {key !== "9_4" && key !== "10_4" && (
                  <ImageMarker
                    blockKey={key}
                    src={`https://eacache.s.konaminet.jp/game/card_connect/1/images/gacha/popn/popn_detail_${key}.png`}
                    cardIndexes={data[key]}
                    checked={checked}
                    setChecked={setChecked}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PopnCard;
