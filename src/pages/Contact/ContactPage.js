import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Breadcrumb from "./Breadcrumb-section";
import Cta from "../Home/Cta-section";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Breadcrumb />

      {/* Contact Page */}
      <section className="contact-section">
        <Container>
          <div className="section-title">
            <h2>Get In Touch</h2>
          </div>
          <Row>
            <Col lg={6}>
              <div className="contact-item" data-aos="fade-down">
                {/* Address */}
                <div className="service-inner-item mb-3">
                  <div className="d-flex align-items-start">
                    <div
                      className="icon"
                      style={{
                        minWidth: "50px",
                        maxWidth: "50px",
                        fontSize: "24px",
                        color: "#007bff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "50px",
                      }}
                    >
                      <FaMapMarkerAlt />
                    </div>
                    <div className="ms-3">
                      <h2 className="mt-0">Address:</h2>
                      <p>
                        <a
                          href="https://maps.app.goo.gl/qNfU2MpD5jHSWu9k6?g_st=aw"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          SadaTech Solutions, 9th Floor, No.901, Brigade IRV
                          Centre, Whitefield main road, Nallurahalli, Bengaluru,
                          Karnataka - 560066
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="service-inner-item mb-3">
                  <div className="d-flex align-items-start">
                    <div
                      className="icon"
                      style={{
                        minWidth: "50px",
                        maxWidth: "50px",
                        fontSize: "24px",
                        color: "#007bff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "50px",
                      }}
                    >
                      <FaPhoneAlt />
                    </div>
                    <div className="ms-3">
                      <h2 className="mt-0">Contact Details:</h2>
                      <p>
                        <a href="tel:+918046872432">+91 80468 72432 |</a>
                        <a href="tel:+918065194733">+91 806519 4733</a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="service-inner-item mb-3">
                  <div className="d-flex align-items-start">
                    <div
                      className="icon"
                      style={{
                        minWidth: "50px",
                        maxWidth: "50px",
                        fontSize: "24px",
                        color: "#007bff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "50px",
                      }}
                    >
                      <MdEmail />
                    </div>
                    <div className="ms-3">
                      <h2 className="mt-0">Email:</h2>
                      <p>
                        <a href="mailto:info@sadatechsolutions.com">
                          info@sadatechsolutions.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Google Form */}
            <Col lg={6}>
              <div className="contact-form-item" data-aos="fade-down">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSemcka3xRHT_ZjHc0a8M3QM8dUpOHdYDreuPaUu-ImoUEMrXg/viewform?embedded=true"
                  width="100%"
                  height="470"
                  title="Google Form"
                >
                  Loading…
                </iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-item" data-aos="fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0194352609674!2d77.73055719999999!3d12.9706081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a47f412a3cd4531%3A0xa7b60b7bd6e6a9f1!2sSadaTech%20Solutions!5e0!3m2!1sen!2sin!4v1750101273741!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SadaTech Solutions Map"
          ></iframe>
        </div>

        <section className="map-overlay">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="map-overlay-content">
                  <h2>Find Us Here</h2>
                  <p>
                    We are located in the heart of Bengaluru, ready to assist
                    you with your IT needs.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </section>

      <Cta />
    </>
  );
};

export default ContactSection;
