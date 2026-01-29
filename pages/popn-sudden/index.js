import { FormField, Divider, Header, Message, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { } from 'semantic-ui-react'
import { useEffect, useState } from 'react';

function Page() {
    const [high, setHigh] = useState("");
    const [low, setLow] = useState("");
    const [roof, setRoof] = useState(0);
    const [lift, setLift] = useState(0);

    const highNum = Number(high);
    const lowNum = Number(low);
    const roofNum = Number(roof);
    const liftNum = Number(lift);

    useEffect(() => {
        setHigh(localStorage.getItem("high") || "");
        setLow(localStorage.getItem("low") || "");
        setRoof(localStorage.getItem("roof") || 0);
        setLift(localStorage.getItem("lift") || 0);
    }, [])

    const sudden = (110 + liftNum) - lowNum / highNum * (400 + liftNum - roofNum);

    const [showWarning, setShowWarning] = useState(false);

    return <main style={{
        maxWidth: 320,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 16
    }}><h1 style={{ fontSize: 24, textAlign: "center" }}>ポップン新筐体用<br />SUDDEN+数値計算ツール</h1>
        <Form>
            <FormField inline>
                <label>SUDDEN+</label>
                <label style={{ fontSize: 24 }} >{sudden.toFixed(1)}</label>
            </FormField>
            <FormField inline>
                <label style={{ width: 42 }}>高BPM</label>
                <input placeholder='0' value={high} onChange={event => {
                    setHigh(event.target.value);
                    localStorage.setItem("high", event.target.value);
                }} />
            </FormField>
            <FormField inline>
                <label style={{ width: 42 }}>低BPM</label>
                <input placeholder='0' value={low} onChange={event => {
                    setLow(event.target.value);
                    localStorage.setItem("low", event.target.value);
                }} />
            </FormField>
        </Form>
        <Divider horizontal>
            <Header as='h4'>
                Option
            </Header>
        </Divider>
        <Form>
            <FormField inline>
                <label style={{ width: 42 }}>ROOF</label>
                <input placeholder='0' value={roof} onChange={event => {
                    setRoof(event.target.value);
                    localStorage.setItem("roof", event.target.value);
                    if (!showWarning) setShowWarning(true);
                }} />
            </FormField>
            <FormField inline>
                <label style={{ width: 42 }}>LIFT</label>
                <input placeholder='0' value={lift} onChange={event => {
                    setLift(event.target.value);
                    localStorage.setItem("lift", event.target.value);
                    if (!showWarning) setShowWarning(true);
                }} />
            </FormField>
        </Form>
        {showWarning &&
            <Message warning>
                <p>ROOF/LIFTの数値を更新したため、現在のリンクをブックマークに追加し直してください。</p>
                <p>ホーム画面に追加した方は何もしなくてOKです。</p>
            </Message>
        }
    </main>;
}

export default Page;