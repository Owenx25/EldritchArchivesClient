import Overlay from "./Overlay";
import background from "../resources/angled-bookcase.jpg";


export default function Backdrop(props) {
    return (
        <>
        <div className="backdrop" style={{backgroundImage:`url(${background})`}}>
            {props.children}
        </div>
        <Overlay opacity="0.7" color="black" />
        </>
    )
}