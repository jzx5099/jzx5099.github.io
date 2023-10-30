import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import {
  AiOutlineMail
} from "react-icons/ai";
import {
  FaLinkedinIn
} from "react-icons/fa";
import {
  SiGooglescholar
} from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md={12} className="footer-social">
          <ul className="footer-social-links">
            <li className="social-icons">
              <a
                href="mailto://jzx5099@psu.edu"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  footer-icons"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://scholar.google.com/citations?user=kVVYTAEAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  footer-icons"
              >
                <SiGooglescholar />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/jingyi-xie/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  footer-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
