import React from "react";
import { Container, Row, Col, Card, Image, ListGroup } from "react-bootstrap";
import Breadcrumb from "./Breadcrumb-section";
import { FaPhoneAlt } from "react-icons/fa";
import Service1 from "../../assets/images/cloud-service-1.jpg";
import Service2 from "../../assets/images/cloud-service-2.jpg";
function AdditionalServices() {
  const services = [
    {
      title: "Amazon Web Services (AWS)",
      description:
        "Leverage the power of the cloud with our end-to-end Amazon Web Services (AWS) solutions. SadaTech Solutions helps businesses design, deploy, and manage secure and scalable infrastructure on AWS. Whether you're launching a new cloud-native app, migrating existing workloads, or optimizing cloud costs, we tailor every AWS deployment to your business goals. From architecture to automation, our certified experts ensure performance, security, and reliability at every step.",
      details: [
        "Cloud infrastructure setup with EC2, S3, RDS, and more",
        "Secure VPC, IAM roles, and data encryption configuration",
        "Lift-and-shift migration of on-premise apps to AWS cloud",
        "Auto-scaling, load balancing, and performance optimization",
        "Cost management, usage monitoring, and billing control",
        "DevOps support: CI/CD pipelines, Docker, and Lambda automation"
      ],
      img: Service1,
    },
    {
      title: "Microsoft Azure Solutions",
      description:
        "Transform your business with secure, scalable, and intelligent cloud infrastructure through Microsoft Azure. At SadaTech Solutions, we design and implement Azure-powered environments tailored to your business goals — whether it's hosting applications, migrating servers, or building hybrid cloud strategies. Our Azure experts ensure seamless integration, maximum uptime, and long-term cost optimization, helping you take full advantage of Microsoft's enterprise-grade cloud ecosystem.",
      details: [
        "End-to-end Azure migration and deployment services",
        "Setup of Virtual Machines, Azure SQL, and Blob Storage",
        "Hybrid cloud architecture with on-premise integration",
        "Azure Active Directory & role-based access control (RBAC)",
        "Scalable infrastructure with auto-scaling and load balancing",
        "Security hardening, backup, and disaster recovery planning"
      ],
      img: Service2,
    },
  ];

  return (
    <>
      <Breadcrumb />
      <section className="additional-services-section">
        <Container fluid>
          <div className="section-title">
            <span>CLOUD COMPUTING SERVICES</span>
            <h2>Empower Your Business with Scalable, Secure & Cost-Effective Cloud Solutions</h2>
          </div>
          <Row className="services-grid">
            {services.map((service, index) => (
              <Col key={index} xs={12} sm={6} md={6} lg={6} className="mb-4">
                <Card className="service-card h-100">
                  <Image
                    src={service.img} // Directly use the imported image
                    alt={service.title}
                    className="service-image"
                    fluid
                  />
                  <Card.Body>
                    <h3>{service.title}</h3>
                    <Card.Text>{service.description}</Card.Text>
                    <ListGroup variant="flush" className="service-details mt-3">
                      {service.details.map((item, i) => (
                        <ListGroup.Item key={i}>{item}</ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <a href="tel:+918046872432" className="contact-button">
              <FaPhoneAlt />  Get in Touch
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

export default AdditionalServices;
