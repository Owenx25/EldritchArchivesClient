import styles from "./css/Overlay.module.css";

export default function Overlay({opacity, color}) {
    return (
        <div className={styles.container} style={{backgroundColor: color, opacity: opacity}}/>
    );
};