import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Breadcrumb from "./Breadcrumb-section";
import Cta from "../Home/Cta-section";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CS

const ContactSection = () => {
  AOS.init({
    duration: 1000, // Animation duration
    once: true, // Whether animation should happen only once
  });

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    vehicle: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send formData to API)
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Breadcrumb />

      {/* contact-page */}
      <section className="contact-section">
        <Container>
          <div className="section-title">
            <h2>Get In Touch</h2>
          </div>
          <Row>
            <Col lg={6}>
              <div className="contact-item" data-aos="fade-down">
                <div className="service-inner-item mb-3">
                  <div className="d-flex">
                    <div className="icon" style={{ width: "100px" }}>
                      <FaMapMarkerAlt />
                    </div>
                    <div className="ms-3">
                      <h2 className="mt-0">Address:</h2>
                      <p>
                        <a href="https://maps.app.goo.gl/qNfU2MpD5jHSWu9k6?g_st=aw">SadaTech Solutions, 9th Floor, No.901, Brigade IRV Centre, Whitefield main road, Nallurahalli, Bengaluru, Karnataka - 560066</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="service-inner-item mb-3">
                  <div className="d-flex">
                    <div className="icon">
                      <FaPhoneAlt />
                    </div>
                    <div className="ms-3">
                      <h2 className="mt-0">Contact Details:</h2>
                      <p>
                        <a href="tel:+918046872432">+91 8046872432</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="service-inner-item mb-3">
                  <div className="d-flex">
                    <div className="icon">
                      <MdEmail />
                    </div>
                    <div className="ms-3">
                      <h2 className="mt-0">Email:</h2>
                      <p>
                        <a href="mailto:info@sadatechsolutions.com">info@sadatechsolutions.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="contact-form-item" data-aos="fade-down">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={12}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          id="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="tel"
                          id="contact"
                          placeholder="Enter your contact number"
                          value={formData.contact}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          id="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      id="message"
                      rows={5}
                      placeholder="Enter your message here"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Button className="submit-btn" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
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
                  <p>We are located in the heart of Bengaluru, ready to assist you with your IT needs.</p>
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
