export default function ImageMarker({
  src,
  cardIndexes,
  blockKey,
  checked,
  setChecked,
}) {
  return (
    <div style={{ position: "relative" }}>
      {cardIndexes.map((i) => {
        const x = i % 5;
        const y = Math.floor(i / 5);
        return (
          <button
            key={i}
            onClick={() => setChecked(blockKey, i)}
            style={{
              background: checked[blockKey]?.[i] ? "none" : "rgba(255,255,255,0.9)",
              border: "none",
              position: "absolute",
              width: 187,
              height: 280,
              top: 34 + y * 315,
              left: 255 + (x - 1) * 194,
            }}
          ></button>
        );
      })}

      <img src={src}></img>
    </div>
  );
}
