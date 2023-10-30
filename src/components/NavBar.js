import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import {
  HiOutlineNewspaper
} from "react-icons/hi"
import {
  FaProjectDiagram
} from "react-icons/fa"

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <>
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container fluid>
        <Navbar.Brand href="/" className="d-flex"></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto"
            defaultActiveKey="#home"
            style={{maxHeight: '100px'}}
          >
            <Nav.Item>
              <Nav.Link
              as={Link}
              to="/"
              onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projects"
                onClick={() => updateExpanded(false)}
              >
                <FaProjectDiagram style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/publications"
                onClick={() => updateExpanded(false)}
              >
                <HiOutlineNewspaper style={{ marginBottom: "2px" }} /> Publications
              </Nav.Link>
            </Nav.Item>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container fluid className="navbar-banner">
    <Row>
        <Col>
        <p style={{marginBottom: "0px", fontSize: "2rem"}}>
        Open to Work!
        </p>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default NavBar;
