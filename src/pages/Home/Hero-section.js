import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js";
    script.onload = () => {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80 },
          color: { value: "#ffffff" },
          size: { value: 3 },
          move: { speed: 1 },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.3,
          },
        },
        interactivity: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
        },
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section className="Hero-section">
      <div id="particles-js" className="particles-bg"></div>
      <Container>
        <Row className="align-items-center">
          <Col lg={12}>
            <div className="hero-main">
              <div className="hero-caption" data-aos="fade-up">
                <span>INNOVATIVE • SCALABLE • SECURE</span>
                <h2>
                  Empowering Businesses<br /> with Smart IT Solutions
                </h2>
                <p>
                  From cloud computing and digital marketing to enterprise telecom solutions,<br /> SadaTech Solutions delivers IT services that drive real-world transformation.
                </p>

                <div className="contact-btns" data-aos="fade-up">
                  <Link to="/about" className="readbtn" aria-label="Read more about our services">
                    Read More
                  </Link>
                  <Link to="/contactus" className="contactbtn" aria-label="Contact us for more information">
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
