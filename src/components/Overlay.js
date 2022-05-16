import styles from "./css/Overlay.module.css";

export default function Overlay({opacity, color, z}) {
    return (
        <div className={styles.container} style={{backgroundColor: color, opacity: opacity, zIndex: z}}/>
    );
};