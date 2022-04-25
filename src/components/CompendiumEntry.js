import { COLORS } from "../constants";

export default function CompendiumEntry({entryData}) {
    // May need a few conditional checks in here for specific
    // compendium information like location, or known locations.
    // Could also just save these for modal!
    return (
        <div style={{
            width: "550px",
            height: "400px",
            backgroundColor: `var(${COLORS.background})`,
            placeSelf: "center",
            opacity: "0.8",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <div className="entry-content-container">
                <div className="entry-title-desc-container" style={{height: "75%", overflow: "hidden"}}>
                    <p>
                        <span className="entry-title-font" style={{color: `var(${COLORS.content})`, marginRight: "5px"}}>{entryData.title}.</span>
                        <span className="entry-content-font" style={{color: `var(${COLORS.subtext})`}}>{entryData.description}</span>
                    </p>
                </div>
                <div className="entry-tag-container" style={{paddingTop: "5px"}}>
                    {/* TODO make these tags dynamically generated! */}
                    <p>
                        <span className="entry-content-font" style={{color: `var(${COLORS.content})`}}>Author: </span>
                        <span className="entry-content-font" style={{color: `var(${COLORS.subtext})`}}>{entryData.author}</span>
                    </p>
                </div>
            </div>
            <div className="entry-source-container" style={{display: "flex", justifyContent: "center"}}>
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