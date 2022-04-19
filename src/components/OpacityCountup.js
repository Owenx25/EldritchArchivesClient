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
        <div key={counter} className="countup-row-container">
            <div className="counter-box countup-font">
                <CountUp style={{color: `var(${COLORS.content})`}} end={value} duration={3} useEasing={true} easingFn={easingFn}/>
            </div>
            <span className="countup-label countup-font">{label}</span>
        </div>
    );
}

const easingFn = (t, b, c, d) => {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  };