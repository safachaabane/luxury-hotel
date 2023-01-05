import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../Assets/images/logo.png";
import "./index.scss";
function NavBar() {
    return (
      <Navbar expand="lg">

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">ACCUEIL</Nav.Link>
            <NavDropdown title="SUITES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
                lien 01
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">lien 02</NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link href="#link">RESTAURANTS</Nav.Link>
            <Navbar.Brand href="#home"><img alt="logo" src={logo}/></Navbar.Brand>
            <Nav.Link href="#link">SPAS</Nav.Link>
            <Nav.Link href="#link">RESERVATIONS</Nav.Link>
            <Nav.Link href="#link">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
