import { COLORS } from "../constants";

export default function EldritchTitle({text, subtitle, fontClass}) {
    if (subtitle) {
        return (
            <div className="title-box" style={{display:"flex", flexDirection:"column"}}>
                <h1 style={{textShadow: `10px 10px var(${COLORS.background})`, color: `var(${COLORS.title})`}} className={fontClass || 'eldritch-font'}>
                    {text}
                </h1>
                <h4 className="subtitle-font" style={{paddingLeft: "50px", marginTop: "-20px", color: `var(${COLORS.content})`}}>
                    {subtitle}
                </h4>
            </div>
        );
    }
    return (
        <h1 style={{textShadow: `10px 10px var(${COLORS.background})`, color: `var(${COLORS.title})`}} className='eldritch-font'>
            {text}
        </h1>
    );
}