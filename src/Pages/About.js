import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import myPhoto from "../Assets/me.jpg";
// import Home2 from "./Home2";
import Type from '../components/Type';

function About() {
  return (
    <>
      <Container fluid className="home-section" id="background">
        <Container className="home-content">
          <Row className='publication-row'>
            <Col md="3">
              <img
                src={myPhoto}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Col>
            <Col md="8" className="publication-entry">
            <p style={{marginBottom: "2rem"}}>
            I'm a fourth-year PhD candidate in Human-Computer Interaction at the <a className='about-link' href='https://ist.psu.edu/' target="_blank">Penn State College of Information Science and Technology</a>. 
            Under the mentorship of <a className='about-link' href='https://jcarroll.ist.psu.edu/' target="_blank">Prof. John M. Carroll</a>, I'm affiliated with Laboratory for Computer Supported Collaboration and Learning. My research is anchored in accessibility, with a keen focus on designing and assessing Computer Vision-mediated prosthetic aids for individuals with visual impairments. Through this, I have enhanced the navigation, engagement, and privacy facets of sighted-blind collaborations.
            </p>
            <p style={{marginBottom: "2rem"}}>
            Prior to my deep dive into qualitative research, I earned a dual-title MS degree in Industrial Engineering & Operations Research from Penn State Department of Industrial and Manufacturing Engineering. Advised by <a className='about-link' href='https://sites.google.com/site/qiushichen16/' target="_blank">Prof. Qiushi Chen</a>, my focus during this phase was on health informatics and data mining. This experience plays a pivotal role in my current experimental designs and in fostering my interdisciplinary collaborations with AI and software development experts during my PhD journey.
            </p>
            <p style={{marginBottom: "2rem"}}>
            Beyond academia, I'm devoted to making impactful community contributions. I volunteer to read books for visually impaired students and have completed a substantial 388-page textbook with an intent to continue. Additionally, I work closely with the local chapter of the National Federation of the Blind.
            </p>

            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default About;