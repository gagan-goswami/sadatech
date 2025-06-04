import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WhyChooseImage from "../../assets/images/why-choose.png";
import { GrSteps } from "react-icons/gr";
import { FaFileCode } from "react-icons/fa";
import { IoDocumentAttachSharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

function whyChoose() {
  AOS.init({
    duration: 1000, // Animation duration
    once: true, // Whether animation should happen only once
  });
  return (
    <section className="whyChoose-section">
      <Container>
        <Row>
          <Col lg={6} data-aos="zoom-in">
            <div className="whyChoose-item">
              <div className="whyChoose-image">
                <img
                  src={WhyChooseImage}
                  alt="whyChoose-image"
                  className="img-fluid"
                ></img>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="whyChoose-item">
              <div className="whyChoose-content" data-aos="fade-left">
                <span>Why Choose Us </span>
                <h2>We Create Result-Oriented Dynamic Applications</h2>
                <p>
                  Over 25 years working in IT services developing software
                  applications and mobile apps for clients all over the world.
                </p>
              </div>

              <div className="whyChoose-main">
                <div className="whyChoose" data-aos="fade-left">
                  <div className="flex-shrink-0">
                    <GrSteps />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h2 className="mt-0">First Growing Process</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>

                <div className="whyChoose" data-aos="fade-left">
                  <div className="flex-shrink-0">
                    <FaFileCode />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h2 className="mt-0">Clean code</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>

                <div className="whyChoose" data-aos="fade-left">
                  <div className="flex-shrink-0">
                    <IoDocumentAttachSharp />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h2 className="mt-0">Well Documentation</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default whyChoose;
