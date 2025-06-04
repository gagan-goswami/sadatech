import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Team1 from "../../assets/images/team8.png";
import Team2 from "../../assets/images/team7.jpg";
import Team3 from "../../assets/images/team6.jpg";
import Team4 from "../../assets/images/team5.jpg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

function Team() {
  AOS.init({
    duration: 1000, // Animation duration
    once: true, // Whether animation should happen only once
  });

  return (
    <section className="our-team">
      <Container>
        <div className="section-title">
          <span>Meet the Expert People</span>
          <h2>Our Professional Expert Team Members</h2>
        </div>
        <Row>
          <Col lg={3} sm={6}>
            <div className="Team-item" data-aos="zoom-in">
              <div className="team-image">
                <img src={Team1} alt="team-image" className="img-fluid"></img>
              </div>
              <div className="team-scoial">
                <ul className="social-icon">
                  <li>
                    <Link to="/">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaXTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="team-content">
                <span>Product Designer</span>
                <h2>Eliyana Rose</h2>
              </div>
            </div>
          </Col>

          <Col lg={3} sm={6}>
            <div className="Team-item" data-aos="zoom-in">
              <div className="team-image">
                <img src={Team2} alt="team-image" className="img-fluid"></img>
              </div>
              <div className="team-scoial">
                <ul className="social-icon">
                  <li>
                    <Link to="/">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaXTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="team-content">
                <span>Co-Founder</span>
                <h2>Travis Dean</h2>
              </div>
            </div>
          </Col>

          <Col lg={3} sm={6}>
            <div className="Team-item" data-aos="zoom-in">
              <div className="team-image">
                <img src={Team3} alt="team-image" className="img-fluid"></img>
              </div>
              <div className="team-scoial">
                <ul className="social-icon">
                  <li>
                    <Link to="/">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaXTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="team-content">
                <span>Web Developer</span>
                <h2>Maria Cruke</h2>
              </div>
            </div>
          </Col>

          <Col lg={3} sm={6}>
            <div className="Team-item" data-aos="zoom-in">
              <div className="team-image">
                <img src={Team4} alt="team-image" className="img-fluid"></img>
              </div>
              <div className="team-scoial">
                <ul className="social-icon">
                  <li>
                    <Link to="/">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaXTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="team-content">
                <span>Designer</span>
                <h2>Luke Weite</h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Team;
