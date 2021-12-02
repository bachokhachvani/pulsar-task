import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function Navbarcomp() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Nav.Link>
            <Link to="/">Sign up</Link>
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/Login">Login</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarcomp;
