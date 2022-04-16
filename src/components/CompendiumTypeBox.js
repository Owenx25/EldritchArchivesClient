import { COLORS } from "../constants";
import { Link } from "react-router-dom";


export default function CompendiumTypeBox(props) {
    return (
        <Link to={props.link} className="compendium-box" style={{
            width: "300px", height: "300px",
            marginLeft: "50px",
            marginRight: "50px",
            marginBottom: "40px",
            display: "flex",
            flexDirection: "column",
            textDecoration: "none"
            }}>
                <div style={{
                    backgroundColor: `var(${COLORS.interactive})`,
                    height: "17%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: ".8",
                    borderRadius: "9px 9px 0 0"
                }}>
                    <span 
                        style={{color: `var(${COLORS.subtext})`}}
                        className="compendiums-font">
                            {props.title}
                    </span>
                </div>
                <div style={{
                    backgroundImage: `url(${props.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "auto",
                    height: "85%",
                    width: "100%",
                    borderRadius: "0 0 9px 9px"
                }}>

                </div>
        </Link>
    )
}