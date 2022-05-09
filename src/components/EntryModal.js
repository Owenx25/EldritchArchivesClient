import styles from "./css/EntryModal.module.css";


// REMOVE
const sampleData = {
    "compendium": "texts",
    "title": "Black As Darkness",
    "description": "A black and white 1940’s film starring Verna Karndess. The film was adapted from the Lilith Blake short story “The Reunion” about a ghostly murderess stalking the streets. Oxford Don Muswell warned against the filming, stating that Blake’s work was a form of incantations which would cause unforeseen consequences. The audio and video was distorted and fights broke out at its first viewing because clips were missing and added and distorted. A hissing background static persists throughout the film. Only a small amount of bootleg copies remain. Verna’s widower learned of her murder by watching the film. A black and white 1940’s film starring Verna Karndess. The film was adapted from the Lilith Blake short story “The Reunion” about a ghostly murderess stalking the streets. Oxford Don Muswell warned against the filming, stating that Blake’s work was a form of incantations which would cause unforeseen consequences. The audio and video was distorted and fights broke out at its first viewing because clips were missing and added and distorted. A hissing background static persists throughout the film. Only a small amount of bootleg copies remain. Verna’s widower learned of her murder by watching the film.",
    "tags": {
        "author": "Various, A film",
    },
    "source": {
        "title": "Black As Darkness",
        "parentSource": "The White Hands and Other Weird Tales",
        "year": "2006",
        "author": "Mark Samuels"
    }
}



export default function EntryModal({show, onHide, onShow}) {
    let showClass = show ? ` ${styles.show}` : "";

    onShow();
    return (
        <div className={styles.modal + showClass}>
            <div className={styles.header}>

            </div>
            <div className={styles.body}>

            </div>
            <div className={styles.footer}>

            </div>

        </div>
    );
}
