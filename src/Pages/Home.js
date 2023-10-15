import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../Assets/cyber_theme.jpg";
// import Home2 from "./Home2";
import Type from '../components/Type';
import {
  AiOutlineMail
} from "react-icons/ai";
import {
  FaLinkedinIn
} from "react-icons/fa";
import {
  SiGooglescholar
} from "react-icons/si";

function Home() {
  return (
    <>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md="7" className="home-header">
              {/* <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1> */}

              <h1 className="heading-name">
                Hello
                <span className="wave" role="img" aria-labelledby="wave" style={{marginBottom:"1rem"}}>
                  👋🏻
                </span>
                <br/>
                Welcome to <br/>
                <strong className="main-name"> Jingyi Xie </strong>'s
                Personal Page
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md="5" style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          {/* <Row>
            <Col className='home-about-description'>
              <h1>Who am I?</h1>
            </Col>
          </Row> */}
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Contact Me</h1>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="mailto://jzx5099@psu.edu"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineMail />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://scholar.google.com/citations?user=kVVYTAEAAAAJ&hl=en"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <SiGooglescholar />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/jingyi-xie/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home;