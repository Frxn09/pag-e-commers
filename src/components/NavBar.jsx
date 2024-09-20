import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar expand="lg" id="navBar">
      <Container fluid>
        <Navbar.Brand className="links" to="/" as={NavLink}>
          RaddiantBrazalet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <Nav.Link className="links" to="/category/oro" as={NavLink}>
              Oro
            </Nav.Link>
            <Nav.Link className="links" to="/category/plata" as={NavLink}>
              Plata
            </Nav.Link>
            <Nav.Link className="links" to="/category/cuero" as={NavLink}>
              Cuero
            </Nav.Link>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
