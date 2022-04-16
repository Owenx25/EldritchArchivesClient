import {useState} from "react";
import { COLORS } from "../constants";


export default function GuideButton({text, opacity}) {
    const [bgColor, setBgColor] = useState(COLORS.interactive)

    return (
        <button style={{
            position: "relative",
            marginTop: "50px",
            backgroundColor: `var(${bgColor})`,
            padding: "10px 15px 10px 15px",
            borderRadius: "5px",
            border: "None",
            fontFamily: "CallistoMT",
            color: `var(${COLORS.subtext})`,
            opacity: opacity,
            }}
            onMouseEnter={() => setBgColor(COLORS.title)}
            onMouseLeave={() => setBgColor(COLORS.interactive)}
            >
            {text}
        </button>
    )
}