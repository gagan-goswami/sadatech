import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaLongArrowAltRight,
  FaLaptopCode,
  FaServer,
  FaUserTie,
  FaDatabase,
  FaGlobe,
  FaEnvelope,
  FaCloud,
  FaBullhorn,
  FaPhoneAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "IT Infrastructure Services",
    icon: <FaServer />,
    link: "/Services/ITInfrastructure",
    desc: "Designing, implementing, and managing robust IT infrastructures that scale with your business growth.",
  },
  {
    title: "IT Consultants",
    icon: <FaUserTie />,
    link: "/Services/ITConsultants",
    desc: "Professional consultancy to help you plan and optimize your IT strategy for maximum business impact.",
  },
  {
    title: "Software Reselling",
    icon: <FaDatabase />,
    link: "/ITSales/SoftwareReselling",
    desc: "Licensed software from trusted vendors, offered at competitive prices with full implementation support.",
  },
  {
    title: "Domain, Hosting",
    icon: <FaGlobe />,
    link: "/WebSolutions/Hosting",
    desc: "Secure and reliable domain registration, website hosting, and business-class email services for online presence.",
  },
  {
    title: "Website Design & Development",
    icon: <FaLaptopCode />,
    link: "/WebSolutions/DesignDevelopment",
    desc: "Custom website solutions with responsive designs, optimized UX/UI, and seamless backend functionality.",
  },
  {
    title: "Email Solutions",
    icon: <FaEnvelope />,
    link: "/WebSolutions/WebsiteAudit",
    desc: "Secure, reliable, and professional business email solutions tailored for seamless communication and collaboration",
  },
  {
    title: "Digital Marketing Services",
    icon: <FaBullhorn />,
    link: "/Marketing/DigitalMarketing",
    desc: "SEO, social media, PPC, and content strategies to drive traffic, generate leads, and boost brand visibility online.",
  },
  {
    title: "Telecom Services",
    icon: <FaPhoneAlt />,
    link: "/Services/Telecom",
    desc: "Complete telecom solutions including VoIP, PBX systems, and managed communication infrastructure for businesses.",
  },
  {
    title: "Cloud Computing",
    icon: <FaCloud />,
    link: "/Services/CloudComputing",
    desc: "Flexible and scalable cloud solutions for storage, apps, and infrastructure—ensuring availability and data security.",
  },
];

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="service-section">
      <Container>
        <div className="section-title">
          <span>OUR SERVICES</span>
          <h2>Our IT Solutions & Services for Your Business</h2>
        </div>
        <Row>
          {services.map((service, index) => (
            <Col key={index} lg={4} md={6} sm={6} data-aos="fade-up" className="h-100">
              <div className="service-item">
                <div className="service-icon">{service.icon}</div>
                <div className="service-content">
                  <h2>{service.title}</h2>
                  <p>{service.desc}</p>
                  <Link to={service.link}>
                    Read More <FaLongArrowAltRight />
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
