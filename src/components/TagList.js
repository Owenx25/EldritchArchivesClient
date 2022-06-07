import styles from "./css/TagList.module.css";
import { COLORS } from "../constants";

export default function TagList({tags, fontSize}) {
    const tagElements = [];
    const labelStyling = {color: `var(${COLORS.content})`};
    const valueStyling = {color: `var(${COLORS.subtext})`};
    if (fontSize) {
        labelStyling.fontSize = fontSize;
        valueStyling.fontSize = fontSize;
    }

    for (const [label,value] of Object.entries(tags)) {
        tagElements.push(
            <p style={{margin: 0, lineHeight: "1.3"}} key={label}>
                <span className="entry-content-font" style={labelStyling}>
                    {capitalize(label) + ': '}
                </span>
                <span className="entry-content-font" style={valueStyling}>
                    {value}
                </span>
            </p>
        )
    }
    return (
        <div className={styles['tags-container']}>
            {tagElements}
        </div>
    )
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}