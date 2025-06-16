import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import {
  FaIndustry,
  FaBuilding,
  FaCloud,
  FaCogs,
  FaHospital,
  FaUniversity,
  FaLaptopCode,
  FaHome,
  FaTimes 
} from "react-icons/fa";

const caseStudies = [
  {
    title: "Robust Interconnect Systems for Aerospace",
    client: "Ray‑Q Interconnect",
    description:
      "Developed high-reliability cabling harnesses for critical military and aerospace systems, leveraging SadaTech’s hardware & firmware integration expertise.",
    services: "Hardware Supply",
    icon: <FaIndustry />,
  },
  {
    title: "Solar-Grade Polymer Automation",
    client: "DhaSh Group",
    description:
      "Automated polymer injection systems for solar PV applications—improving throughput, reliability, and traceability in manufacturing lines.",
    services: "Design Software, AutoCAD",
    icon: <FaCogs />,
  },
  {
    title: "Machinery Manufacturing IT Infrastructure",
    client: "DEAL Automations Pvt Ltd",
    description:
      "Designed a secure network and remote monitoring platform for industrial machinery producers in Bangalore—enhancing uptime and predictive maintenance.",
    services: "Automation, Laptop and Printer Setup",
    icon: <FaBuilding />,
  },
  {
    title: "Digital Banking Platform Enhancement",
    client: "Unity Small Finance Bank",
    description:
      "Upgraded core banking systems to support mobile app, online services, and compliance—including secure data pipelines and transaction monitoring.",
    services: "Networking",
    icon: <FaUniversity />,
  },
  {
    title: "SaaS Development & Support Portal",
    client: "Saastaa Products & Services",
    description:
      "Built and maintained their cloud-based service platform and support portal, streamlining product delivery and user management across Karnataka.",
    services: "Cloud Hosting",
    icon: <FaCloud />,
  },
  {
    title: "Healthcare System Digitization",
    client: "Shiva Prasad Healthcare",
    description:
      "Transformed patient-care workflows with a digital medical records system and online appointment scheduling—improving staff efficiency and patient satisfaction.",
    services: "Website and Digital Marketing",
    icon: <FaHospital />,
  },
  {
    title: "Enterprise Automation for Textile Conglomerate",
    client: "SARA Group",
    description:
      "Integrated automation and data tracking systems into textile and mining operations across global sites—enhancing quality and reducing manual interventions.",
    services: "IT Infrastructure",
    icon: <FaLaptopCode />,
  },
  {
    title: "Property Management Tech Portals",
    client: "MLC Estates",
    description:
      "Implemented a modern property leasing platform with online portals, cross-device responsiveness, and back-office management—scaling their US portfolio.",
    services: "IT Hardware",
    icon: <FaHome />,
  },
  {
    title: "Real Estate Website & Marketing Platform",
    client: "SD Housing",
    description:
      "Delivered a fully responsive real estate website with integrated lead capture, SEO, and multi-platform ad management tailored to residential housing.",
    services: "Real Estate Website, Digital Marketing",
    icon: <FaHome />,
  },
];

function CaseStudies() {
  const [showModal, setShowModal] = useState(false);
  const [activeCase, setActiveCase] = useState(null);

  const openModal = (item) => {
    setActiveCase(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveCase(null);
  };

  return (
    <section className="case-study-section">
      <Container>
        <div className="section-title">
          <span>Case Studies</span>
          <h2>How We Transformed Businesses</h2>
          <p>Explore real-world outcomes delivered by SadaTech Solutions.</p>
        </div>
        <Row>
          {caseStudies.map((item, idx) => (
            <Col md={6} lg={4} key={idx} className="mb-4">
              <div className="case-card" onClick={() => openModal(item)}>
                <div className="icon-wrap">{item.icon}</div>
                <h3>{item.title}</h3>
                <h4>{item.client}</h4>
                <p>{item.description.slice(0, 90)}...</p>
                <div className="services">{item.services}</div>
                <button className="read-btn">Read More</button>
              </div>
            </Col>
          ))}
        </Row>

        <Modal show={showModal} onHide={closeModal} centered>
          <Modal.Header>
            <Modal.Title>{activeCase?.title}</Modal.Title>
            <button
              type="button"
              className="btn-close-custom"
              onClick={closeModal}
              aria-label="Close"
            >
              <FaTimes />
            </button>
          </Modal.Header>
          <Modal.Body>
            <h5>
              <strong>Client:</strong> {activeCase?.client}
            </h5>
            <p>{activeCase?.description}</p>
            <p>
              <strong>Services:</strong> {activeCase?.services}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="primary" href="/contactus">
              Contact Us
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
}

export default CaseStudies;
