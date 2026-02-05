import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => (
  <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
    <Container>
      <Navbar.Brand as={Link} to="/">My Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
          <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
