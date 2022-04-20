import { COLORS } from "../constants";
import { Link } from "react-router-dom";


export default function CompendiumTypeBox(props) {
    return (
        <Link to={props.link} className="compendium-type-box">
                <div className="type-box-header">
                    <span style={{color: `var(${COLORS.subtext})`}} className="compendiums-font">
                        {props.title}
                    </span>
                </div>
                <div className="type-box-image" style={{backgroundImage: `url(${props.image})`}} />
        </Link>
    )
}