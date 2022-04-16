import CountUp from 'react-countup';
import { COLORS } from "../constants";

export default function OpacityCountup({values}) {
    let counter = 0
    const rows = []
    for (const key in values) {
        rows.push(row(key, values[key], counter++));
    }
    return (
        <div className="mainContainer" style={{display: "flex", position: "relative", flexDirection: "column", paddingTop: "40px"}}>
            {rows}
        </div>
    );
};

function row(label, value, counter) {
    return (
        <div key={counter} className="rowContainer" style={{display: "flex", position: "relative", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: "15px", paddingLeft: "25px"}}>
            <div className="counter-box countup-font" style={{
                backgroundColor: "rgb(29,19,30, 0.7)",
                display:"flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10%",
                padding: "0 10px 0 10px",
                height: "50px",
                width: "75px"
                }}>
                <CountUp style={{color: `var(${COLORS.content})`}} end={value} duration={3} useEasing={true} easingFn={easingFn}/>
            </div>
            <span className="counterLabel countup-font" style={{color: `var(${COLORS.content})`, paddingLeft: "100px", minWidth: "300px"}}>{label}</span>
        </div>
    );
}

const easingFn = (t, b, c, d) => {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  };