import { COLORS } from "../constants";
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
            <div style={{
                zIndex: 4,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                overflowY: "scroll",
                width: "100%",
                paddingTop: "20px",
                paddingBottom: "50px"
            }}>
                <EldritchTitle text="The Eldritch Archives"/>
                <p className="eldritch-subtitle-font" style={{width: "650px", paddingLeft:"50px", color: `var(${COLORS.subtext})`}}>
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