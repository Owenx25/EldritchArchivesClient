import { Container } from "react-bootstrap";
import CreateEntry from "./CreateEntry";
import CreateSource from "./CreateSource";

export default function AdminDashboard(props) {


    return (
        <Container style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h3 style={{marginBottom: "1em"}}>Admin Dashboard</h3>
            <Container className="createButtons" style={{display: "flex", flexDirection:"row", justifyContent: "space-around"}}>
                <CreateEntry />
                <CreateSource />
                
            </Container>
        </Container>
    )

}