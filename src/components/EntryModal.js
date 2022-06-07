import { useEffect, useRef, useState } from "react";

import styles from "./css/EntryModal.module.css";
import Overlay from "./Overlay";
import Typewriter from 'typewriter-effect';

import { buildTags } from "./CompendiumEntry";
import TagList from "./TagList";

export default function EntryModal({entryData, onHide, onShow}) {
    const wrapperRef = useRef(null);
    const [showClass, setShowClass] = useState(null);
    const [data, setData] = useState(null)

    useEffect(() => {
        setShowClass(entryData ? ` ${styles.show}` : null);
        setData(entryData ? entryData : null);
    }, [entryData])

    const handleClickOutside = event => {
        if (showClass && wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            document.removeEventListener("click", handleClickOutside);
            setShowClass(null);
            onHide();
        }
    };

    document.addEventListener("click", handleClickOutside, false);    
    onShow();

    const startTypewriter = (typewriter) => {
        typewriter.typeString(`<span class="entry-title-font"'>${data.title}<span>`)
            .pauseFor(500)
            .typeString(`<span class="entry-title-font"'>.<span>`)
            .start();
    }
    
    return (
        <>
            <div ref={wrapperRef} className={styles.modal + showClass}>
                <div className={styles.header}>
                    { data ? <Typewriter options={{autoStart: false, delay: 100}} onInit={startTypewriter} /> : null } 
                </div>
                <div className={styles.body}>
                    { data ? <p className="entry-content-font" style={{fontSize: "1.3rem"}}>{data.description}</p> : null}
                </div>
                <div className={styles.footer}>
                    { data ? <TagList tags={data.tags} fontSize="1.3rem"/> : null }
                </div>
            </div>
            {showClass ? <Overlay opacity="0.7" color="black" z="5"/> : null}
        </>
    );
}
