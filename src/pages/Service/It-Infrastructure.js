import React from "react";
import { Container, Row, Col, Card, Image, ListGroup } from "react-bootstrap";
import Breadcrumb from "./Breadcrumb-section";
import TeamSection from "../Home/Team-section";
import CtaSection from "../Home/Cta-section";
import Service1 from "../../assets/images/mit-service-1.jpg";
import Service2 from "../../assets/images/mit-service-2.jpg";
import Service3 from "../../assets/images/mit-service-3.jpg";
import Service4 from "../../assets/images/mit-service-4.jpg";
import Service5 from "../../assets/images/mit-service-5.jpg";
import Service6 from "../../assets/images/mit-service-6.jpg";
import Service7 from "../../assets/images/mit-service-7.jpg";
import Service8 from "../../assets/images/mit-service-8.jpg";
import { FaPhoneAlt } from "react-icons/fa";

function AdditionalServices() {
  const services = [
    {
      title: "IT Managed Services (AMC)",
      description:
        "At SadaTech Solutions, our IT Managed Services (AMC) are crafted to ensure your business operates without disruption. We take a proactive approach to managing your entire IT infrastructure—from servers and networks to endpoints and applications. With round-the-clock monitoring, preventive maintenance, and real-time support, we keep your systems optimized, secure, and aligned with your business objectives. Our goal is to reduce downtime, enhance performance, and provide complete visibility and control over your IT environment, allowing you to focus on business growth while we handle the tech backbone.",
      details: [
        "24/7 infrastructure monitoring with instant alerts and resolution",
        "Preventive maintenance including OS patching, antivirus updates, and system tuning",
        "Remote and on-site support for troubleshooting, installations, and upgrades",
        "Comprehensive data backup strategies with disaster recovery planning",
        "Detailed monthly health reports, audits, and future-ready IT insights",
        "Asset and license management with regular compliance checks",
        "Firewall, antivirus, and network security implementation with threat detection",
        "Scalable AMC plans that grow with your business needs"
      ],
      img: Service1,
    },
    {
      title: "Hardware Rental Services",
      description:
        "At SadaTech Solutions, our Hardware Rental Services are designed to provide businesses with the flexibility to scale their IT hardware requirements without the burden of ownership. Whether you need devices for short-term projects, corporate training, exhibitions, or remote setups, we offer a wide range of high-performance hardware on rent. With cost-effective plans, timely delivery, and full technical support, our rental services ensure your operations run smoothly while saving on capital investment.",
      details: [
        "Wide range of equipment: desktops, laptops, servers, printers, and projectors",
        "Networking hardware including routers, switches, and access points",
        "Custom rental durations—available on daily, weekly, and monthly basis",
        "Complete logistics: delivery, setup, and on-site installation services",
        "On-call technical support and maintenance during rental period",
        "Ideal for events, training sessions, temporary offices, and remote teams"
      ],
      img: Service2,
    },

    {
      title: "IT Infrastructure Services",
      description:
        "SadaTech Solutions delivers end-to-end IT Infrastructure Services to build, optimize, and support resilient digital environments. From small businesses to large enterprises, we design infrastructure solutions that are secure, scalable, and ready for future growth. Our team ensures efficient planning, structured deployment, and seamless integration of both physical and cloud-based systems—empowering your organization with reliable connectivity, data flow, and power continuity. We focus on performance, security, and efficiency so your core business never slows down.",
      details: [
        "Complete LAN/WAN network architecture and deployment",
        "Data center design, implementation, and environmental planning",
        "Professional structured cabling for voice, data, and fiber networks",
        "Cloud service integration with secure hybrid and private network models",
        "Installation of UPS systems and enterprise power backup solutions",
        "Infrastructure audits, monitoring, and optimization planning"
      ],
      img: Service3,
    },
    {
      title: "Hardware Support & Maintenance",
      description:
        "SadaTech Solutions provides expert Hardware Support & Maintenance services to ensure your IT equipment remains reliable, efficient, and fully operational. We specialize in preventive diagnostics and fast corrective actions to minimize unexpected breakdowns and extend hardware lifecycle. Whether you're managing desktops, servers, printers, or networking gear, our certified technicians deliver timely support, routine servicing, and brand-independent maintenance. Our approach ensures your systems stay optimized and your business continues without costly disruptions.",
      details: [
        "Regular diagnostic checks and performance assessments",
        "Hardware repairs, parts replacement, and firmware upgrades",
        "Support for all major hardware brands and multi-vendor environments",
        "Rapid-response troubleshooting and on-site service availability",
        "Annual reviews to ensure hardware efficiency and upgrade planning",
        "Proactive maintenance to reduce downtime and lower long-term costs"
      ],
      img: Service4,
    },
    {
      title: "IT Consultants",
      description:
        "At SadaTech Solutions, our IT Consulting services are designed to help businesses make smarter, future-ready technology decisions. We work as strategic partners, guiding you through every stage of IT transformation—from assessing current infrastructure to planning scalable digital initiatives. Whether you're migrating to the cloud, optimizing your tech stack, or strengthening cybersecurity, our consultants provide actionable insights that align with your business objectives. With deep industry experience and a goal-driven approach, we turn IT challenges into growth opportunities.",
      details: [
        "Strategic cloud migration and digital transformation planning",
        "Technology budgeting, cost optimization, and ROI analysis",
        "Cybersecurity audits and compliance risk mitigation strategies",
        "Evaluation of software vendors and custom tech stack suggestions",
        "Infrastructure modernization and future roadmap consulting",
        "Tailored IT advisory aligned with business growth goals"
      ],
      img: Service5,
    },

    {
      title: "IT Hardware Sales",
      description:
        "SadaTech Solutions offers a wide range of high-performance IT hardware solutions sourced from trusted global brands. Whether you’re setting up a new office, upgrading your infrastructure, or expanding operations, we provide tailored hardware recommendations that match your technical needs and budget. From end-user devices to enterprise-grade networking and printing solutions, we ensure quality, compatibility, and post-sales support. With competitive pricing and a focus on reliability, we help you build a strong IT foundation for your business.",
      details: [
        "Desktops, laptops, servers, and high-performance workstations",
        "Enterprise-grade firewalls, switches, routers, and wireless access points",
        "Office essentials: printers, scanners, multifunction devices (MFDs)",
        "Genuine OEM parts, power supplies, cabling, and IT accessories",
        "Procurement assistance, vendor sourcing, and warranty management",
        "End-to-end delivery and after-sales technical support"
      ],
      img: Service6,
    },
    {
      title: "Software Reselling",
      description:
        "SadaTech Solutions is your trusted partner for genuine, business-grade software licensing. We provide licensed software solutions from globally recognized vendors, ensuring your organization remains compliant, secure, and fully equipped for productivity. From operating systems and creative tools to enterprise resource planning (ERP) and cybersecurity suites, we help you choose the right software stack tailored to your business operations. With transparent licensing, renewal tracking, and expert guidance, our reselling services are built to simplify software procurement and compliance management.",
      details: [
        "Microsoft Windows, Office 365, Azure, and related licenses",
        "Adobe Creative Cloud and industry-specific design software",
        "ERP, CRM, and productivity platforms for SMBs and enterprises",
        "Advanced antivirus, firewall, and endpoint security software",
        "License audits, usage monitoring, and renewal planning",
        "Procurement consulting to ensure cost-effective licensing"
      ],
      img: Service7,
    },
    {
      title: "Refurbished Hardware",
      description:
        "SadaTech Solutions offers reliable Refurbished Hardware solutions for businesses looking to reduce costs without compromising performance. Every device we provide—whether it's a desktop, laptop, or server—is thoroughly tested, certified, and restored to full functionality. Ideal for startups, scaling teams, or budget-conscious enterprises, our refurbished equipment is backed by warranty and technical support. By choosing refurbished hardware, you not only save money but also contribute to sustainable IT practices through eco-friendly reuse.",
      details: [
        "Certified refurbished laptops, desktops, and workstations",
        "High-performance servers, storage units, and networking gear",
        "Replacement parts including RAM, SSDs, motherboards, and power units",
        "Rigorous quality checks and certified performance testing",
        "Warranty coverage with dedicated support and service options",
        "Cost-effective hardware upgrades for offices and IT labs"
      ],
      img: Service8,
    }
  ]

  return (
    <>
      <Breadcrumb />
      <section className="additional-services-section">
        <Container fluid>
          <div className="section-title">
            <span>IT INFRASTRUCTURE SERVICES</span>
            <h2>Robust IT Infrastructure Solutions for Modern Businesses</h2>
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
      </section >
      <TeamSection />
      <CtaSection />
    </>
  );
}

export default AdditionalServices;
