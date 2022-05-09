import { useState } from "react";
import { COLORS } from "../constants";
import styles from "./css/CompendiumEntry.module.css";

export default function CompendiumEntry({entryData, onEntryClick}) {
    // May need a few conditional checks in here for specific
    // compendium information like location, or known locations.
    // Could also just save these for modal!
    return (
        <button className={styles.box} onClick={onEntryClick}>
            <div className={styles['content-container']}>
                <p>
                    <span className="entry-title-font" style={{color: `var(${COLORS.content})`, marginRight: "5px"}}>{entryData.title}.</span>
                    <span className="entry-content-font" style={{color: `var(${COLORS.subtext})`}}>{entryData.description}</span>
                </p>
            </div>
            <div className={styles['tags-container']}>
                {buildTags(entryData)}
            </div>
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

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function buildTags(entryData) {
    const tagElements = [];

    for (const [label,value] of Object.entries(entryData.tags)) {
        tagElements.push(
            <p style={{margin: 0, lineHeight: "1.3"}} key={label}>
                <span className="entry-content-font" style={{color: `var(${COLORS.content})`}}>
                    {capitalize(label) + ': '}
                </span>
                <span className="entry-content-font" style={{color: `var(${COLORS.subtext})`}}>
                    {value}
                </span>
            </p>
        )
    }
    return tagElements;
}