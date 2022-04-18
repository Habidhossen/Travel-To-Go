import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
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
              <CustomLink className="nav-link" to="/login">
                Login
              </CustomLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
