import { useState } from "react";
import { COLORS } from "../constants";
import styles from "./css/CompendiumEntry.module.css";
import TagList from "./TagList";

export default function CompendiumEntry({entryData, onEntryClick}) {
    // May need a few conditional checks in here for specific
    // compendium information like location, or known locations.
    // Could also just save these for modal!
    return (
        <button className={styles.box} onClick={() => onEntryClick(entryData)}>
            <div className={styles['content-container']}>
                <p>
                    <span className="entry-title-font" style={{color: `var(${COLORS.content})`, marginRight: "5px"}}>{entryData.title}.</span>
                    <span className="entry-content-font" style={{color: `var(${COLORS.subtext})`}}>{entryData.description}</span>
                </p>
            </div>
            <TagList tags={entryData.tags}/>
            <div className={styles['source-container']}>
                {buildSource(entryData)}
            </div>
        </button>
    );
}


function buildSource(entryData) {
    const source = entryData.source;
    let sourceElement;
    if (source.hasOwnProperty('parentSource')) {
        sourceElement = <span>"{source.title}", <i>{source.parentSource}</i> ({source.year}), {source.author}</span>
    } else {
        sourceElement = <span><i>{source.title}</i> ({source.year}), {source.author}</span>
    } 

    return (
        <p className="entry-source-font" style={{color: `var(${COLORS.content})`, margin: 0}}>
            {sourceElement}
        </p>
    )
}
