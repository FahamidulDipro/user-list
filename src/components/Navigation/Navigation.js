import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand to="#home">User List</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="text-decoration-none text-light ms-3">Home</NavLink>
              <NavLink to="/login" className="text-decoration-none text-light ms-3">Login</NavLink>
              <NavLink to="/signup" className="text-decoration-none text-light ms-3">Signup</NavLink>
           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;