import { useParams } from "react-router-dom";
import { axios } from "axios";
import EldritchTitle from "./EldritchTitle";

import Nav from "./MainNav";
import Backdrop from "./Backdrop";
import CompendiumEntry from "./CompendiumEntry";
import { TITLES, COLORS } from "../constants";
import EntryGrid from "./EntryGrid";

export default function CompendiumPage(props) {
    // Get the specific compendium
    let { compendium } = useParams();
    
    // Use compendium to get data from backend, MOCKING for now
    //const entries = axios.get(`/compeniums/${compendium}`);
    // May need to PAGINATE
    const entriesResponse = [
        {
            "compendium": "texts",
            "title": "20 Simple Steps to Ventriloquism",
            "source": "The Secret of Ventriloquism",
            "author": "Joseph Snavely",
            "description": "The text describes the necessary steps to become a ventriloquist of varying ability. The first eight steps are entirely normal while the subsequent steps begin to teach a more sinister and powerful form of ventriloquism. The more powerful form, greater ventriloquism, is one who can control “dummies” which are not inanimate, though the process is much more difficult and requires pulling many more strings. Greater ventriloquists themselves are themselves are only puppets of a mysterious Ultimate Ventriloquist. The text also includes instructions to harm a homeless man, and take down a plane in Dunnstown. The book is also a metatext.",
            "references": ["The Infusorium", "The Secret of Ventriloquism"]
        },
        {
            "compendium": "texts",
            "title": "Atlas of Untrod Paths, The",
            "source": "Lovecraft Country",
            "author": "Unknown",
            "description": "Presumably a text concerning natural philosophy, but certainly an occult tome of some sort which is of particular interest because it was sold by a rogue member of the Braithwhite family, Henry Braithwhite (using alias Henry Narrow) to fund an escape with his black wife, Pearl."
        },
        {
            "compendium": "texts",
            "title": "Black As Darkness",
            "source": "Black As Darkness",
            "author": "Various, A film",
            "description": "A black and white 1940’s film starring Verna Karndess. The film was adapted from the Lilith Blake short story “The Reunion” about a ghostly murderess stalking the streets. Oxford Don Muswell warned against the filming, stating that Blake’s work was a form of incantations which would cause unforeseen consequences. The audio and video was distorted and fights broke out at its first viewing because clips were missing and added and distorted. A hissing background static persists throughout the film. Only a small amount of bootleg copies remain. Verna’s widower learned of her murder by watching the film."
        },
    ]

    // TODO: Use LAZY rendering or pagination here so the page doesn't destroy memory
    let counter = 0
    const entries = []
    for (const response of entriesResponse) {
        entries.push(createEntry(response, counter++));
    }

    
    return (
        <div>
            <Nav />
            <Backdrop>
                <div className="page-container">
                    <div className="entrieshead-container">
                        <EldritchTitle text={TITLES[compendium]} fontClass={"compendium-title-font"} subtitle={entriesResponse.length + " Entries"} />
                        <p className="compendium-note-font" style={{color: `var(${COLORS.subtext})`, width: "500px"}}>
                            The texts within this list are
                            <span style={{color: `var(${COLORS.title})`}}> fictional </span> 
                            works of literature found with various horror stories, legends, folk tales, etc.
                             Their descriptions are a reader's interpretation of the text as described 
                            in the source.
                        </p>
                    </div>
                    <EntryGrid entries={entries}/>
                </div>
            </Backdrop>
        </div>
    )

}

function createEntry(response, counter) {
    return (
        <CompendiumEntry entryData={response} key={counter} />
    )
}
