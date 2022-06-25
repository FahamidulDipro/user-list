import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navigation = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand to="#home">User List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              to="/"
              className="text-decoration-none text-light ms-3 mt-1"
            >
              Home
            </NavLink>
            {user ? (
              <span className="text-warning mx-3">
                {user?.email}
                <button className="btn btn-primary mx-5" onClick={logout}>
                  Logout
                </button>
              </span>
            ) : (
              <>
                {" "}
                <NavLink
                  to="/login"
                  className="text-decoration-none text-light ms-3 mt-1"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="text-decoration-none text-light ms-3 mt-1"
                >
                  Signup
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
