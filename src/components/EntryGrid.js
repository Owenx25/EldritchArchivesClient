import styles from "./css/EntryGrid.module.css"

export default function EntryGrid({entries}) {
    return (
        <div className={styles.grid}>
            {entries}
        </div>
    );
}