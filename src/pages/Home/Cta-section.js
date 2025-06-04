import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

function Cta() {
  AOS.init({
    duration: 1000, // Animation duration
    once: true, // Whether animation should happen only once
  });
  return (
    <section className="cta-section">
      <Container fluid>
        <Row>
          <Col lg={12}>
            <div className="cta-item">
              <h2 data-aos="fade-right">Preparing For Your Business Success</h2>
              <div data-aos="fade-down">
                <Link to="/" className="cta-btn">
                  Get Started
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
