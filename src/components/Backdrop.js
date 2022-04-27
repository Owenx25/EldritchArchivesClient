import Overlay from "./Overlay";
import styles from "./css/Backdrop.module.css"


export default function Backdrop(props) {
    return (
        <>
            <div className={styles.container}>
                {props.children}
            </div>
            <Overlay opacity="0.7" color="black" />
        </>
    )
}