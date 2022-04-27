import { COLORS } from "../constants";
import { Link } from "react-router-dom";
import styles from "./css/CompendiumTypeBox.module.css";


export default function CompendiumTypeBox(props) {
    return (
        <Link to={props.link} className={styles.box}>
                <div className={styles.header}>
                    <span style={{color: `var(${COLORS.subtext})`}} className="compendiums-font">
                        {props.title}
                    </span>
                </div>
                <div className={styles.image} style={{backgroundImage: `url(${props.image})`}} />
        </Link>
    )
}