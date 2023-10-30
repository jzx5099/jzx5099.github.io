import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function Publications() {
  return (
    <>
      <Container fluid className="home-section" id="background">
        <Container className="home-content">
          <h1>Journal Articles</h1>
          <Row className='publication-row'>
            <Col md="2"></Col>
            <Col md="8" className="publication-entry">
            [J.1] <u>Jingyi Xie</u>, Madison Reddie, Sooyeon Lee, Syed M Billah, Zihan Zhou, Chun-Hua Tsai, and John M. Carroll. (2022). 
            Iterative Design and Prototyping of Computer Vision Mediated Remote Sighted Assistance. 
            ACM Transactions on Computer-Human Interaction (TOCHI), 29(4), 1-40.
            </Col>
            <Col md="3"></Col>
          </Row>

          <h1>Conference Papers</h1>
          <Row className='publication-row'>
            <Col md="2"></Col>
            <Col md="8" className="publication-entry">
            [C.7] <u>Jingyi Xie</u>, Rui Yu, Kaiming Cui, Sooyeon Lee, John M. Carroll, and Syed M Billah. (2023). 
            Are Two Heads Better than One? Investigating Remote Sighted Assistance with Paired Volunteers. 
            In Proceedings of the 2023 ACM Designing Interactive Systems Conference (DIS '23)
            </Col>
            <Col md="3"></Col>
          </Row>

          <Row className='publication-row'>
            <Col md="2"></Col>
            <Col md="8" className="publication-entry">
            [C.6] Jeongwon Jo, <u>Jingyi Xie</u>, Tiffany Knearem, Priyanka Aiyer, Anisa Callis, and John M. Carroll. (2023). 
            Infrastructuring Community Fridges for Food Commoning. 
            In Proceedings of the ACM on Human-Computer Interaction (Accepted and to appear at CSCW 2024)
            </Col>
            <Col md="3"></Col>
          </Row>

          <Row className='publication-row'>
            <Col md="2"></Col>
            <Col md="8" className="publication-entry">
            [C.5] Jeongwon Jo, <u>Jingyi Xie</u>, and John M. Carroll. (2023). 
            Food with Dignity: Public Values in the Supplemental Nutrition Assistance Program Mobile Applications. 
            In Proceedings of the 2023 ACM Conference on Information Technology for Social Good (GoodIT '23)
            </Col>
            <Col md="3"></Col>
          </Row>

          <Row className='publication-row'>
            <Col md="2"></Col>
            <Col md="8" className="publication-entry">
            [C.4] <u>Jingyi Xie</u>*, Michiharu Yamashita*, Zekun Cai*, and Aiping Xiong. (2022). 
            User Study on the Feasibility of Topic-aware Misinformation Warning on Social Media. 
            In Proceedings of the Human Factors and Ergonomics Society Annual Meeting (HFES Vol. 66, No. 1).
            </Col>
            <Col md="3"></Col>
          </Row>

          <Row className='publication-row'>
            <Col md="2"></Col>
            <Col md="8" className="publication-entry">
            [C.3] <u>Jingyi Xie</u>, Na Li, Sooyeon Lee, and John M. Carroll. (2022). 
            YouTube Videos as Data: Seeing Daily Challenges for People with Visual Impairments During COVID-19. 
            In Proceedings of the 2022 ACM Conference on Information Technology for Social Good (GoodIT '22)
            </Col>
            <Col md="3"></Col>
          </Row>
          <Row className='publication-row'>
            <Col md="2"></Col>
            <Col md="8" className="publication-entry">
            [C.2] <u>Jingyi Xie</u>*, Rui Yu*, Sooyeon Lee, Yao Lyu, Syed M Billah, and John M. Carroll. (2022). 
            Helping Helpers: Supporting Volunteers in Remote Sighted Assistance with Augmented Reality Maps. 
            In Designing Interactive Systems (DIS '22)
            </Col>
            <Col md="3"></Col>
          </Row>
          <Row className='publication-row'>
            <Col md="2"></Col>
            <Col md="8" className="publication-entry">
            [C.1] Sooyeon Lee*, Rui Yu*, <u>Jingyi Xie</u>, Syed M Billah, and John M. Carroll. (2022). 
            Opportunities for Human-AI Collaboration in Remote Sighted Assistance. 
            In 27th International Conference on Intelligent User Interfaces (IUI '22)
            </Col>
            <Col md="3"></Col>
          </Row>
          
          <h1>Workshop Papers</h1>
          <Row className='publication-row'>
            <Col md="2"></Col>
            <Col md="8" className="publication-entry">
            [W.1] <u>Jingyi Xie</u>, Rui Yu, Sooyeon Lee, Syed M Billah, and John M. Carroll. (2023). 
            Resilience in Remote Sighted Assistance. 
            Workshop paper for the DIS 2023 workshop, "Designing for and Reflecting upon Resilience in Health and Wellbeing." (DIS '23)
            </Col>
            <Col md="3"></Col>
          </Row>
          
        </Container>
      </Container>
    </>
  );
}

export default Publications;