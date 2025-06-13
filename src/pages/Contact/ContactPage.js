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
                    <div className="icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="ms-3">
                      <h2 className="mt-0">Address:</h2>
                      <p>
                        <a href="/">123 Street, New York, USA</a>
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
                        <a href="/">+123 456 7890</a>,{" "}
                        <a href="/">+123 7890 456</a>
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
                        <a href="/">example@gmail.com</a>
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
      <Cta />
    </>
  );
};

export default ContactSection;
