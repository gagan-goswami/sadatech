import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import WhyChooseImage from "../../assets/images/why-choose.png";
import { GrSteps } from "react-icons/gr";
import { FaFileCode } from "react-icons/fa";
import { IoDocumentAttachSharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

function WhyChoose() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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
                />
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="whyChoose-item">
              <div className="whyChoose-content" data-aos="fade-left">
                <span>Why Choose Us</span>
                <h2>Empowering Businesses with Scalable IT Solutions</h2>
                <p>
                  At <strong>SadaTech Solutions</strong>, we blend innovation, security, and experience to deliver end-to-end IT services. Our customer-first approach and commitment to quality set us apart in the digital landscape.
                </p>
              </div>

              <div className="whyChoose-main">
                <div className="whyChoose" data-aos="fade-left">
                  <div className="flex-shrink-0">
                    <GrSteps />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h2 className="mt-0">Strategic Growth Planning</h2>
                    <p>
                      We partner with you to understand your business goals and implement IT strategies that drive measurable results and scalability.
                    </p>
                  </div>
                </div>

                <div className="whyChoose" data-aos="fade-left">
                  <div className="flex-shrink-0">
                    <FaFileCode />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h2 className="mt-0">Quality-Driven Development</h2>
                    <p>
                      Our team writes clean, optimized, and scalable code that ensures performance, security, and maintainability.
                    </p>
                  </div>
                </div>

                <div className="whyChoose" data-aos="fade-left">
                  <div className="flex-shrink-0">
                    <IoDocumentAttachSharp />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h2 className="mt-0">Comprehensive Documentation</h2>
                    <p>
                      From setup guides to ongoing support manuals, we ensure every project is well-documented for smooth handover and scalability.
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

export default WhyChoose;
