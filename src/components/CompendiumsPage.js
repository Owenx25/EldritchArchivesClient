import Nav from "./MainNav";
import Backdrop from "./Backdrop";
import { ICONS } from "../constants";
import CompendiumTypeBox from "./CompendiumTypeBox";
import { useRouteMatch } from "react-router-dom";
import EldritchTitle from "./EldritchTitle";


export default function CompendiumsPage(props) {
    let match = useRouteMatch();

    return (
        <div>
            <Nav />
            <Backdrop>
                <div className="page-container compendiums-container">
                    <EldritchTitle text="Compendiums"/>
                    <div className="type-box-container">
                        <CompendiumTypeBox image={ICONS.associations} title="Associations" link={`${match.url}/associations`}/>
                        <CompendiumTypeBox image={ICONS.locations} title="Locations" link={`${match.url}/locations`}/>
                        <CompendiumTypeBox image={ICONS.texts} title="Texts" link={`${match.url}/texts`}/>
                        <CompendiumTypeBox image={ICONS.people} title="People" link={`${match.url}/people`}/>
                        <CompendiumTypeBox image={ICONS.artifacts} title="Artifacts" link={`${match.url}/artifacts`}/>
                        <CompendiumTypeBox image={ICONS.entities} title="Entities" link={`${match.url}/entities`}/>
                    </div>
                </div>
            </Backdrop>
        </div>
    )
}