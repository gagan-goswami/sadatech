import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <section className="Hero-section">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="hero-main">
              <div
                className="hero-caption"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <span>TECH SOLUTIONS, TODAY & ALWAYS!</span>
                <h2>We Specialize In Providing<br></br> End-to-end IT Services</h2>
                <p>
                  At SadaTech Solutions, we specialize in delivering innovative
                  and reliable IT services <br></br>that help businesses streamline
                  operations, boost productivity, and stay ahead in the digital
                  world.
                </p>

                <div
                  className="contact-btns"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <Link
                    to="/read-more"
                    className="readbtn"
                    aria-label="Read more about our services"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                  >
                    Read More
                  </Link>
                  <Link
                    to="/contact"
                    className="contactbtn"
                    aria-label="Contact us for more information"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
