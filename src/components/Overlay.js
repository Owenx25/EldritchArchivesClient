export default function Overlay({opacity, color}) {
    return (
        <div className="overlay" style={{backgroundColor: color, opacity: opacity}}/>
    );
};