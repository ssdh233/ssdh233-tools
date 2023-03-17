import { useState } from "react";

const counterNumber = 12;
const defaultState = Array(counterNumber).fill(0).map(x => 0);

function Counter() {
    const [state, setState] = useState(defaultState);

    return <div style={{ fontSize: 36 }}>
        <button onClick={() => setState(defaultState)} style={{ width: 200, height: 80, fontSize: 36, marginBottom: 24, marginRight: 64 }}>reset</button>
        <span >Total: {state.reduce((a, b) => a + b)}</span>
        <br />
        <div style={{ display: "inline-grid", gridTemplateColumns: "auto auto auto", gap: 16 }}>
            {state.map((value, i) => {
                return <CounterBlock key={i} value={value} onChange={(value) => {
                    setState((state) => {
                        const newState = state.slice(0);
                        newState[i] = value;
                        return newState;
                    })
                }} />
            })}
        </div>
    </div>
}

function CounterBlock({ value, onChange }) {
    return <div style={{ width: 250, height: 250, border: "1px solid blue", position: "relative", fontSize: 36 }}>
        <div style={{ position: "absolute", width: "100%", height: "100%", lineHeight: "250px", textAlign: "center", pointerEvents: "none" }}>{value}</div>
        <button style={{ width: 125, height: 250, border: "none", background: "none", fontSize: 36 }} onClick={() => { if (value > 0) onChange(value - 1) }}>-</button>
        <button style={{ width: 125, height: 250, border: "none", background: "none", fontSize: 36 }} onClick={() => onChange(value + 1)}>+</button>
    </div>
}

export default Counter;