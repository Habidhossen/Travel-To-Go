import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Link className="navbar-brand" to="/">
            Travel To Go
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <CustomLink className="nav-link" to="/">
                Home
              </CustomLink>
              <CustomLink className="nav-link" to="/blogs">
                Blogs
              </CustomLink>
              <CustomLink className="nav-link" to="/about">
                About
              </CustomLink>
              {user ? (
                <button onClick={logout} className="logout-btn">
                  Logout
                </button>
              ) : (
                <CustomLink className="nav-link" to="/login">
                  Login
                </CustomLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
