import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Accordion } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { AiOutlineYoutube }  from 'react-icons/ai'

function VideoModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName='video-modal-content'
    >
      <iframe className='video-modal-iframe' width="625px" height="400px" 
        src={props.videoUrl} title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen
      />
    </Modal>
  );
}

function Projects() {
  const [modalShow, setModalShow] = React.useState(false);
  const [videoUrl, setVideoUrl] = React.useState("");
  
  return (
    <>
      <Container fluid className="home-section">
        <Container className="project-content">
          <h2 style={{textAlign: 'left', color: 'white'}}>
            Conversations for Vision: Human-Computer Synergies in Prosthetic Interactions <i>(NIH Funded)</i>
          </h2>
          <p style={{textAlign: 'justify', color: 'white'}}>
                Remote sighted assistance (RSA) is an assistive service for people with visual impairments (PVI), 
                in which a visually impaired user establishes a video connection with a remotely located sighted assistant. 
                The latter interprets the user's camera feed in real-time and converses with them to provide assistance as needed or requested. 
                With trained professional agents or untrained crowdsourcing volunteers, RSA has been applied to assist PVI with tasks ranging 
                from low-stakes (e.g., reading) to high-stakes challenges (e.g., navigation). The following projects outline our efforts in 
                investigating diverse aspects of the RSA paradigm. 
              </p>
          {/* <Row>
            <Col md="6">
              
            </Col>
            <Col md="5"> */}
              <h3 style={{color: 'white'}}>Papers</h3>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Opportunities for Human-AI Collaboration in Remote Sighted Assistance</Accordion.Header>
                  <Accordion.Body>
                    <p style={{textAlign: 'justify', margin: 0}}>
                    Through a thorough literature review and user interviews, this project delves into the technical and navigational 
                    challenges faced by both sighted agents and visually impaired users. We uniquely spotlight the 
                    <strong> emerging problems in Human-Computer Vision collaboration</strong>, 
                    pioneering the path for next-generation RSA services.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Iterative Design and Prototyping of Computer Vision Mediated Remote Sighted Assistance </Accordion.Header>
                  <Accordion.Body>
                    <p style={{textAlign: 'justify', margin: 0}}>
                    Diving into the world of RSA, this project illuminates the transformative potential of computer vision for 
                    supporting real-world <strong> indoor and outdoor navigation </strong>
                    scenarios. By <strong> adopting a scenario-based design</strong>, we developed a 
                    <strong> low-fidelity prototype </strong>
                    that integrated <strong>computer vision</strong> with RSA and iteratively refined it. 
                    Through multiple rounds
                    of expert evaluations and insights, we have delved deep into the core needs, goals, and challenges surrounding 
                    computer vision-mediated RSA from the perspective of professional assistants. This project explores the intersection
                    of technology and human-centric design, striving to enhance PVI navigation through innovative RSA systems. 
                    </p>
                    <Button 
                      style={{marginTop: "8px"}}
                      onClick={()=>{
                        setVideoUrl("https://www.youtube.com/embed/vdcHhw5C-ZE?si=as-pwJBngiXUyXE_")
                        setModalShow(true);
                    }}>
                      <AiOutlineYoutube style={{ marginRight: "6px", marginBottom: "2px" }}/>
                      Video
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                  Helping Helpers: Supporting Volunteers in Remote Sighted Assistance with Augmented Reality Maps
                  </Accordion.Header>
                  <Accordion.Body>
                    <p style={{textAlign: 'justify', margin: 0}}>
                    Turning the spotlight on <strong> indoor navigation </strong> challenges, this project pioneers the integration 
                    of <strong>Augmented Reality</strong> (AR) technology to refine and scale RSA services. Our <strong>high-fidelity system </strong>  
                    implements AR maps with localization and virtual elements placement capabilities, providing an
                    innovative framework for sighted assistants to support blind users. A <strong> confederate-based study </strong> 
                    highlights the significant enhancements delivered by AR technology — quicker indoor navigation
                    assistance and reduced mental strain on sighted, untrained volunteers.  
                    </p>
                    <Button 
                      style={{marginTop: "8px"}}
                      onClick={()=>{
                        setVideoUrl("https://www.youtube.com/embed/A6NyAfch9X8?si=N-sABibnAwB9reh7")
                        setModalShow(true);
                    }}>
                      <AiOutlineYoutube style={{ marginRight: "6px", marginBottom: "2px" }}/>
                      Video
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                  Are Two Heads Better than One? Investigating Remote Sighted Assistance with Paired Volunteers
                  </Accordion.Header>
                  <Accordion.Body>
                    <p style={{textAlign: 'justify', margin: 0}}>
                    Extending the traditional one-on-one RSA model, this project introduces a novel paradigm: 
                    <strong> paired-volunteer RSA</strong>. Here, two sighted volunteers collaboratively assist a blind user. 
                    The project explores the dynamics of this <strong>three-way collaboration</strong>, revealing the 
                    enhanced potential for RSA to cover more intellectual, experiential, and open-ended 
                    tasks. The project is significant for its exploration of a <strong>more collaborative and 
                    engaging RSA paradigm</strong>, aiming to broaden the scope and depth of RSA's impact.  
                    </p>
                    <Button 
                      style={{marginTop: "8px"}}
                      onClick={()=>{
                        setVideoUrl("https://www.youtube.com/embed/JJrgIoGQb0Y?si=u_HCwjiVU7MaJhVI")
                        setModalShow(true);
                    }}>
                      <AiOutlineYoutube style={{ marginRight: "6px", marginBottom: "2px" }}/>
                      Video
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                  YouTube Videos as Data: Seeing Daily Challenges for People with Visual Impairments During COVID-19
                  </Accordion.Header>
                  <Accordion.Body>
                    <p style={{textAlign: 'justify', margin: 0}}>
                    This study uses YouTube videos to capture the experiences of PVI during the COVID-19 pandemic. 
                    By analyzing 51 videos from both the visually impaired and news media communities, 
                    we gain a comprehensive view of the pandemic's impact on PVI. This approach highlights 
                    the importance of accessible and inclusive emergency protocols, addressing the 
                    gaps in current pandemic responses for PVI. 
                    </p>
                    <Button 
                      style={{marginTop: "8px"}}
                      onClick={()=>{
                        setVideoUrl("https://www.youtube.com/embed/Sn1ICFai1Q8?si=oQ-AI2IakEIuDwHi")
                        setModalShow(true);
                    }}>
                      <AiOutlineYoutube style={{ marginRight: "6px", marginBottom: "2px" }}/>
                      Video
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            {/* </Col>
          </Row> */}
          
        </Container>
      </Container>
      <VideoModal
        show={modalShow}
        videoUrl={videoUrl}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Projects;