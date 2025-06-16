import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Images (import or use require if dynamic)
import infraIcon from "../../assets/images/service(1).png";
import consultantIcon from "../../assets/images/service(2).png";
import softwareIcon from "../../assets/images/service(3).png";
import domainIcon from "../../assets/images/service(4).png";
import webIcon from "../../assets/images/service(5).png";
import emailIcon from "../../assets/images/service(6).png";
import marketingIcon from "../../assets/images/service(7).png";
import telecomIcon from "../../assets/images/service(8).png";
import cloudIcon from "../../assets/images/service(9).png";

const services = [
  {
    title: "IT Infrastructure Services",
    icon: infraIcon,
    link: "/it-infrastructure",
    desc: "Designing, implementing, and managing robust IT infrastructures that scale with your business growth.",
  },
  {
    title: "IT Consultants",
    icon: consultantIcon,
    link: "/it-infrastructure",
    desc: "Professional consultancy to help you plan and optimize your IT strategy for maximum business impact.",
  },
  {
    title: "Software Reselling",
    icon: softwareIcon,
    link: "/it-infrastructure",
    desc: "Licensed software from trusted vendors, offered at competitive prices with full implementation support.",
  },
  {
    title: "Domain, Hosting",
    icon: domainIcon,
    link: "/website-design-development",
    desc: "Secure and reliable domain registration, website hosting, and business-class email services for online presence.",
  },
  {
    title: "Website Design & Development",
    icon: webIcon,
    link: "/website-design-development",
    desc: "Custom website solutions with responsive designs, optimized UX/UI, and seamless backend functionality.",
  },
  {
    title: "Email Solutions",
    icon: emailIcon,
    link: "/email-solution",
    desc: "Secure, reliable, and professional business email solutions tailored for seamless communication and collaboration",
  },
  {
    title: "Digital Marketing Services",
    icon: marketingIcon,
    link: "/website-design-development",
    desc: "SEO, social media, PPC, and content strategies to drive traffic, generate leads, and boost brand visibility online.",
  },
  {
    title: "Telecom Services",
    icon: telecomIcon,
    link: "/it-infrastructure",
    desc: "Complete telecom solutions including VoIP, PBX systems, and managed communication infrastructure for businesses.",
  },
  {
    title: "Cloud Computing",
    icon: cloudIcon,
    link: "/cloud-computing",
    desc: "Flexible and scalable cloud solutions for storage, apps, and infrastructure—ensuring availability and data security.",
  },
];

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="service-section" id="services">
      <Container>
        <div className="section-title">
          <span>OUR SERVICES</span>
          <h2>Our IT Solutions & Services for Your Business</h2>
        </div>
        <Row>
          {services.map((service, index) => (
            <Col key={index} lg={4} md={6} sm={6} data-aos="fade-up" className="h-100">
              <div className="service-item">
                <div className="service-icon">
                  <img
                    src={service.icon}
                    alt={service.title}
                    style={{ width: "64px", height: "64px", objectFit: "contain" }}
                  />
                </div>
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
