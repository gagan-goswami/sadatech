import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaLongArrowAltRight,
  FaLaptopCode,
  FaBullhorn,
  FaServer,
  FaTools,
  FaUserTie,
  FaDesktop,
  FaDatabase,
  FaGlobe,
  FaChartLine,
  FaSitemap,
  FaCheckCircle,
  FaSearch,
  FaEnvelope,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "IT Managed Services (AMC)",
    icon: <FaTools />,
    link: "/Services/ITManagedServices",
    desc: "Comprehensive Annual Maintenance Contracts for IT systems to ensure continuous uptime and hassle-free operations.",
  },
  {
    title: "Hardware Rental Services",
    icon: <FaDesktop />,
    link: "/Services/HardwareRental",
    desc: "Affordable rental solutions for desktops, laptops, servers, and networking equipment tailored for your project needs.",
  },
  {
    title: "IT Infrastructure Services",
    icon: <FaServer />,
    link: "/Services/ITInfrastructure",
    desc: "Designing, implementing, and managing robust IT infrastructures that scale with your business growth.",
  },
  {
    title: "Hardware Support & Maintenance",
    icon: <FaTools />,
    link: "/Services/HardwareSupport",
    desc: "Expert support and routine maintenance for your hardware assets, ensuring long-term performance and stability.",
  },
  {
    title: "IT Consultants",
    icon: <FaUserTie />,
    link: "/Services/ITConsultants",
    desc: "Professional consultancy to help you plan and optimize your IT strategy for maximum business impact.",
  },
  {
    title: "IT Hardware Sales",
    icon: <FaDesktop />,
    link: "/ITSales/Hardware",
    desc: "Genuine branded IT hardware products with expert guidance and post-sales support to match your business needs.",
  },
  {
    title: "Software Reselling",
    icon: <FaDatabase />,
    link: "/ITSales/SoftwareReselling",
    desc: "Licensed software from trusted vendors, offered at competitive prices with full implementation support.",
  },
  {
    title: "Refurbished Hardware",
    icon: <FaCheckCircle />,
    link: "/ITSales/Refurbished",
    desc: "Cost-effective refurbished laptops, desktops, and accessories that are fully tested and certified for use.",
  },
  {
    title: "Domain, Hosting & Email",
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
    title: "Search Engine Optimisation (SEO)",
    icon: <FaSearch />,
    link: "/WebSolutions/SEO",
    desc: "Boost your website visibility on Google and other search engines with ethical, result-driven SEO strategies.",
  },
  {
    title: "Social Media Marketing",
    icon: <FaBullhorn />,
    link: "/WebSolutions/SMM",
    desc: "Targeted social media campaigns to increase brand awareness, engagement, and lead generation across platforms.",
  },
  {
    title: "Social Media Optimisation",
    icon: <FaSitemap />,
    link: "/WebSolutions/SMO",
    desc: "Optimizing your social profiles and content strategy to improve reach and audience interaction organically.",
  },
  {
    title: "Website Audit",
    icon: <FaChartLine />,
    link: "/WebSolutions/WebsiteAudit",
    desc: "Thorough analysis of your website’s performance, speed, SEO, and security to uncover improvement areas.",
  },
  {
    title: "Email Solutions",
    icon: <FaEnvelope />,
    link: "/WebSolutions/WebsiteAudit",
    desc: "Secure, reliable, and professional business email solutions tailored for seamless communication and collaboration",
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
            <Col key={index} lg={4} md={6} sm={6} data-aos="fade-up">
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
