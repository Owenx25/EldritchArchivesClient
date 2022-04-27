import { COLORS } from "../constants";
import styles from "./css/CompendiumEntry.module.css";

export default function CompendiumEntry({entryData}) {
    // May need a few conditional checks in here for specific
    // compendium information like location, or known locations.
    // Could also just save these for modal!
    return (
        <div className={styles.box} style={{backgroundColor: `var(${COLORS.background})`}}>
            <div>
                <div className={styles['content-container']}>
                    <p>
                        <span className="entry-title-font" style={{color: `var(${COLORS.content})`, marginRight: "5px"}}>{entryData.title}.</span>
                        <span className="entry-content-font" style={{color: `var(${COLORS.subtext})`}}>{entryData.description}</span>
                    </p>
                </div>
                <div className={styles['tags-container']}>
                    {/* TODO make these tags dynamically generated! */}
                    <p>
                        <span className="entry-content-font" style={{color: `var(${COLORS.content})`}}>Author: </span>
                        <span className="entry-content-font" style={{color: `var(${COLORS.subtext})`}}>{entryData.author}</span>
                    </p>
                </div>
            </div>
            <div className={styles['source-container']}>
                <p className="entry-source-font" style={{color: `var(${COLORS.content})`, margin: 0}}>
                    Source: {buildSource(entryData)}
                </p>
            </div>
        </div>
    )
}

function buildSource(entryData) {
    // Use response data to format source
    return "fully formatted source"
}