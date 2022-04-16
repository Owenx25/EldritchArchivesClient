


export default function Overlay({opacity, color}) {
    return (
        <div style={{
            position: "absolute",
            bottom: 0,
            backgroundColor: color,
            maxWidth: "100%",
            width:"100%",
            height: "100%",
            zIndex: "0",
            opacity: opacity,
        }}/>
    );
};