import {useState} from "react";
import { COLORS } from "../constants";


export default function GuideButton({text, opacity}) {
    const [bgColor, setBgColor] = useState(COLORS.interactive)

    return (
        <button className="guidebutton" style={{opacity: opacity, backgroundColor: `var(${bgColor})`}}
            onMouseEnter={() => setBgColor(COLORS.title)}
            onMouseLeave={() => setBgColor(COLORS.interactive)}
        >
            {text}
        </button>
    )
}