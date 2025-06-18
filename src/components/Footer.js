import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/images/sadatech-logo.png";
import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaAngleRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/FooterStyle.css";

function Footer() {
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / windowHeight) * 100;
    setProgress(scrollPercent);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg={3} md={6}>
              <div className="footer-item" data-aos="fade-right">
                <div className="footer-logo">
                  <Link to="/">
                    <img src={Logo} alt="Logo" className="img-fluid" />
                  </Link>
                </div>
                <p>
                  Empowering businesses with customized web, mobile, and automation solutions tailored to today’s digital era.
                </p>
                <ul className="footer-social">
                  <li><a href="https://www.linkedin.com/company/sadatechsolutions" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li>
                  <li><a href="https://www.instagram.com/sadatechsolutions/" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
                  <li><a href="https://wa.me/919743111090"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-link"><FaWhatsapp /></a></li>
                </ul>
              </div>
            </Col>

            <Col lg={2} md={6}>
              <div className="footer-item" data-aos="fade-right">
                <span>Company</span>
                <ul className="footer-links page-links">
                  <li><Link to="/"><FaAngleRight /> Home</Link></li>
                  <li><Link to="/about"><FaAngleRight /> About Us</Link></li>
                  <li><Link to="#"><FaAngleRight /> Our Services</Link></li>
                  <li><Link to="/contactus"><FaAngleRight /> Contact Us</Link></li>
                </ul>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="footer-item" data-aos="fade-right">
                <span>Solutions</span>
                <ul className="footer-links quick-links">
                  <li><Link to="/it-infrastructure"><FaAngleRight /> IT Infrastructure Services</Link></li>
                  <li><Link to="/website-design-development"><FaAngleRight /> website-design-development</Link></li>
                  <li><Link to="/email-solution"><FaAngleRight /> Email Solution</Link></li>
                  <li><Link to="/cloud-computing"><FaAngleRight /> Cloud Computing</Link></li>
                </ul>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="footer-item" data-aos="fade-right">
                <span>Get In Touch</span>
                <ul className="footer-links contact-links">
                  <li>
                    <a
                      href="https://www.google.com/maps?q=Brigade+IRV,+Nallurhalli+Rd,+Whitefield,+Bengaluru,+Karnataka+560066"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaMapMarkerAlt /> 9th Floor, Brigade IRV, Nallurhalli Rd,<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Whitefield, Bengaluru, KA 560066
                    </a>
                  </li>
                  <li>
                    <FaPhoneAlt />{" "}
                    <a href="tel:+918046872432">
                      +91 80468 72432 |
                    </a>
                    -
                    <a href="tel:+918065194733">
                      +91 806519 4733
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@sadatechsolutions.com">
                      <FaRegEnvelope /> info@sadatechsolutions.com
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="copy-right">
          <p>Copyright © {new Date().getFullYear()} SadaTech Solutions. All rights reserved.</p>
        </div>

        <div className={`progress-wrap ${progress > 5 ? "active-progress" : ""}`} onClick={scrollToTop}>
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              style={{
                strokeDasharray: "308",
                strokeDashoffset: `${308 - (progress * 308) / 100}`,
              }}
            />
          </svg>
          <FaArrowUp className="chevron-icon" />
        </div>
      </footer>
    </>
  );
}

export default Footer;
