import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Cta() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <section className="cta-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={8} md={12} className="mb-4 mb-lg-0">
            <div data-aos="fade-right">
              <h2 style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                marginBottom: "20px"
              }}>
                Ready to Transform Your Business with SadaTech?
              </h2>
              <p style={{
                fontSize: "1.2rem",
                opacity: "0.9",
                marginBottom: "30px"
              }}>
                Let's build your digital future together. Our experts are ready to help you with customized IT solutions that drive growth and efficiency.
              </p>
            </div>
          </Col>
          <Col lg={4} md={12}>
            <div data-aos="fade-left">
              <div className="d-flex flex-column flex-md-row flex-lg-column gap-3">
                <Link
                  to="/contactus"
                  className="cta-btn-primary">
                  Get Free Consultation
                </Link>
                <Link
                  to="#services"
                  className="cta-btn-secondary">
                  Explore Services
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Cta;