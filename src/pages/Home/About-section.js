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
        <Row>
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
            <div className="about-item">
              <div className="about-content" data-aos="fade-left">
                <span>ABOUT US</span>
                <h2>Your Trusted Partner for Innovative IT Solutions</h2>
                <p>
                  At <strong>SadaTech Solutions</strong>, we deliver tailored IT services that empower your business to thrive in today’s competitive digital landscape. From startups to established enterprises, our expert team crafts innovative, scalable solutions designed to boost efficiency, security, and growth.
                </p>
                <p>
                  We combine deep technical expertise with a customer-first approach, ensuring every solution aligns perfectly with your business goals. Partner with us to experience seamless digital transformation and ongoing support you can rely on.
                </p>
              </div>

              <div className="service-main">
                <div className="service" data-aos="fade-left">
                  <div className="flex-shrink-0">
                    <FaGlobe />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h2 className="mt-0">Comprehensive Global Solutions</h2>
                    <p>
                      Offering robust IT infrastructure, cloud services, and web solutions to businesses worldwide — no matter the scale or industry.
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
                      Built on integrity and accountability, we deliver consistent, high-quality IT services trusted by businesses.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                to="/read-more"
                className="read-more"
                aria-label="Read more about our services"
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
