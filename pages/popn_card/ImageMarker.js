import { useState } from "react";
export default function ImageMarker({ src }) {
    const [checked, setChecked] = useState(false);
    return <div style={{ position: "relative" }}>
        {[1, 2, 3, 4, 5, 11, 12, 13, 14].map(i => {
            const x = i % 5;
            const y = Math.floor(i / 5);
            return <button
                onClick={() => setChecked(checked => !checked)} style={{ background: checked ? "none" : "rgba(255,255,255,0.9)", border: "none", position: "absolute", width: 187, height: 280, top: 34 + y * 315, left: 255 + (x -1) * 194 }}></button>
        })}

        <img src={src}></img>
    </div>
}