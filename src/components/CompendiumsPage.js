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
                <div style={{
                    zIndex: 4,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    overflowY: "scroll",
                    width: "100%",
                    paddingTop: "20px",
                    marginBottom: "20px"
                    
                }}>
                    <EldritchTitle text="Compendiums"/>
                    <div className="type-box-container" style={{
                        zIndex: 4,
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-evenly",
                        flexFlow: "row wrap",
                        paddingTop: '50px',
                        width: "75%",
                        height: "800px"
                    }}>
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