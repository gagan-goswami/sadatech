import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutImage from "../../assets/images/about.webp";
import { FaGlobe, FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  AOS.init({
    duration: 1000,
    once: true,
  });

  return (
    <section className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right">
            <div className="about-item">
              <div className="about-image">
                <img
                  src={AboutImage}
                  alt="About SadaTech Solutions"
                  className="img-fluid"
                />
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="about-item" data-aos="fade-left">
              <div className="about-content">
                <span>ABOUT US</span>
                <h2>Your Complete IT Solution Provider!</h2>
                <p>
                  We are dedicated to fostering innovation and tranquility in IT
                  Sales, Service, and Infrastructure. We aim to build enduring
                  customer relationships, backed by a commitment to delivering
                  high-tech solutions, comprehensive support, and reliable
                  infrastructure.
                </p>
                <p>
                  <strong>Vision:</strong> “To be remembered as a
                  customer-focused organization, delivering end-to-end IT
                  solutions.”
                </p>
                <p>
                  <strong>Mission:</strong> “Our mission is to provide reliable,
                  innovative IT solutions that meet our clients’ needs. We aim
                  to build lasting relationships through excellent service and a
                  seamless experience from start to finish.”
                </p>
              </div>

              <div className="service-main">
                <div className="service" data-aos="fade-left">
                  <div className="flex-shrink-0">
                    <FaGlobe />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h2 className="mt-0">Global IT Solutions</h2>
                    <p>
                      Scalable, flexible, and innovative IT services delivered
                      to clients worldwide.
                    </p>
                  </div>
                </div>

                <div className="service" data-aos="fade-left">
                  <div className="flex-shrink-0">
                    <FaHandshake />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h2 className="mt-0">Trust & Reliability</h2>
                    <p>
                      Long-term partnerships built on transparency and
                      dependable support.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="read-more"
                aria-label="Read more about SadaTech"
              >
                Read More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
