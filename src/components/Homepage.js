import Nav from "./MainNav";
import OpacityCountup from "./OpacityCountup";
import GuideButton from "./GuideButton";
import { Link } from "react-router-dom";
import Backdrop from "./Backdrop";
import EldritchTitle from "./EldritchTitle";

export default function Homepage(props) {
    return (
        <>
        <Nav />
        <Backdrop>
            <div className="page-container" style={{paddingBottom: "50px"}}>
                <EldritchTitle text="The Eldritch Archives"/>
                <p className="eldritch-subtitle-font homepage-subtitle">
                    A comprehensive collection of references to everything eldritch in horror literature...
                </p>
                <OpacityCountup values={{"Associations": 20, "Locations": 30, "Artifacts": 173, "Entities": 5, "People": 64, "Texts": 99}}/>
                <Link to="/compendiums">
                    <GuideButton text={"View Compendiums"} opacity={1} />
                </Link>
            </div>
        </Backdrop>
        </>
    );
}