import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Project1 from "../../assets/images/project-1.jpg";
import Project2 from "../../assets/images/project-2.jpg";
import Project3 from "../../assets/images/project-3.jpg";
import Project4 from "../../assets/images/project-4.jpg";
import Project5 from "../../assets/images/project-5.png";
import Project6 from "../../assets/images/project-6.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

function Project() {
  AOS.init({
    duration: 1000, // Animation duration
    once: true, // Whether animation should happen only once
  });

  return (
    <section className="project service-page">
      <Container>
        <div className="section-title">
          <span>SELECTED PROJECTS</span>
          <h2>Digital Case Studies.</h2>
        </div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col md={12} data-aos="fade-down">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">All </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="second"> Cloud </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="third"> Data Analaysis </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="fourth">Mobile Apps</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="five">Technology </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={12}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    <Col lg={4} sm={6}>
                      <div className="project-item" data-aos="fade-right">
                        <img
                          src={Project1}
                          alt="project"
                          className="img-fluid"
                        ></img>
                      </div>
                    </Col>

                    <Col lg={4} sm={6}>
                      <div className="project-item" data-aos="fade-right">
                        <img
                          src={Project2}
                          alt="project"
                          className="img-fluid"
                        ></img>
                      </div>
                    </Col>

                    <Col lg={4} sm={6}>
                      <div className="project-item" data-aos="fade-right">
                        <img
                          src={Project3}
                          alt="project"
                          className="img-fluid"
                        ></img>
                      </div>
                    </Col>

                    <Col lg={4} sm={6}>
                      <div className="project-item" data-aos="fade-left">
                        <img
                          src={Project4}
                          alt="project"
                          className="img-fluid"
                        ></img>
                      </div>
                    </Col>

                    <Col lg={4} sm={6}>
                      <div className="project-item" data-aos="fade-left">
                        <img
                          src={Project5}
                          alt="project"
                          className="img-fluid"
                        ></img>
                      </div>
                    </Col>

                    <Col lg={4} sm={6}>
                      <div className="project-item" data-aos="fade-left">
                        <img
                          src={Project6}
                          alt="project"
                          className="img-fluid"
                        ></img>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Row>
                    <Col lg={4} sm={6}>
                      <div className="project-item">
                        <img
                          src={Project1}
                          alt="project"
                          className="img-fluid"
                        ></img>
                      </div>
                    </Col>

                    <Col lg={4} sm={6}>
                      <div className="project-item">
                        <img
                          src={Project2}
                          alt="project"
                          className="img-fluid"
                        ></img>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <Row>
                    <Col lg={4} sm={6}>
                      <div className="project-item">
                        <img
                          src={Project5}
                          alt="project"
                          className="img-fluid"
                        ></img>
                      </div>
                    </Col>

                    <Col lg={4} sm={6}>
                      <div className="project-item">
                        <img
                          src={Project6}
                          alt="project"
                          className="img-fluid"
                        ></img>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                  <Row>
                    <Col lg={4} sm={6}>
                      <div className="project-item">
                        <img
                          src={Project3}
                          alt="project"
                          className="img-fluid"
                        ></img>
                      </div>
                    </Col>

                    <Col lg={4} sm={6}>
                      <div className="project-item">
                        <img
                          src={Project4}
                          alt="project"
                          className="img-fluid"
                        ></img>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="five">
                  <Row>
                    <Col lg={4} sm={6}>
                      <div className="project-item">
                        <img
                          src={Project3}
                          alt="project"
                          className="img-fluid"
                        ></img>
                      </div>
                    </Col>
                    <Col lg={4} sm={6}>
                      <div className="project-item">
                        <img
                          src={Project5}
                          alt="project"
                          className="img-fluid"
                        ></img>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </section>
  );
}

export default Project;
