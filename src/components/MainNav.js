import { Navbar, Nav } from "react-bootstrap";

import { NavLink, Link } from "react-router-dom";
 
export default function MainNav({style}) {
  return (
    <Navbar bg="dark" variant="dark" style={{
      position: "absolute",
      display:"flex",
      width: "100%",
      top: "0",
      zIndex: "10"
    }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Navbar.Brand style={{paddingLeft: "6em", marginRight: "1.5rem", fontFamily:"CallistoMT", fontSize: "20px"}}>Eldritch Archives</Navbar.Brand>
      </Link>
      <Nav style={{paddingLeft: "1em"}}>
        <NavLink className="nav-link nav-item nav-font" aria-current="page" style={{paddingRight:"2em"}} to="/compendiums">Compendiums</NavLink>
        <NavLink className="nav-link nav-item nav-font" to="/authors" style={{paddingRight:"2em"}}>Authors</NavLink>
        <NavLink className="nav-link nav-item nav-font" style={{paddingRight:"2em"}} to="/about">About</NavLink>
        <NavLink className="nav-link nav-item nav-font" to="/contact">Contact</NavLink>
      </Nav>
    </Navbar>
  );
};