import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

function Whoweare() {
  AOS.init({
    duration: 1000, // Animation duration
    once: true, // Whether animation should happen only once
  });

  return (
    <section className="who-we-are">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="Who-wre-are-item" data-aos="zoom-in">
              <span>We are IT service Agency</span>
              <h2>We Provide Exclusive Digital Service</h2>

              <div className="explore-link" data-aos="fade-down">
                <Link to="/contactus">Contact Now</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Whoweare;
