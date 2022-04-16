import Overlay from "./Overlay";
import background from "../resources/angled-bookcase.jpg";


export default function Backdrop(props) {
    return (
        <>
        <div style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            paddingTop: "59px",
            backgroundImage:`url(${background})`,
            backgroundSize: "cover",
            maxWidth: "100%",
            height: "100vh"
            }}>
            {props.children}
        </div>
        <Overlay opacity="0.7" color="black" />
        </>
    )
}