import React from "react";
import { Container, Row, Col, Card, Image, ListGroup } from "react-bootstrap";
import Breadcrumb from "./Breadcrumb-section";

function AdditionalServices() {
  const services = [
    {
      title: "Web Solutions",
      description:
        "Establish and grow your online presence with SadaTech Solutions’ comprehensive Web Solutions. From domain registration and secure hosting to modern website design and development, we offer end-to-end services that help businesses stand out in the digital landscape. Our expert team ensures your website is fast, mobile-responsive, SEO-optimized, and built to convert. Whether you're starting fresh or revamping an existing site, we deliver scalable, secure, and user-friendly web platforms tailored to your brand and business goals.",
      details: [
        "Custom domain registration and DNS management",
        "Reliable and scalable hosting solutions",
        "Responsive website design with modern UI/UX",
        "SEO-friendly development and performance optimization",
        "Secure SSL setup and regular maintenance support",
        "CMS and custom-coded solutions tailored to your business"
      ],
      img: "web-solutions.jpg",
    },
    {
      title: "Domain, Hosting & Email",
      description:
        "Kickstart your online journey with SadaTech Solutions’ all-in-one Domain, Hosting & Email services. We provide everything you need to launch and manage a professional web presence — from securing your domain name to hosting your website and configuring reliable email on your business domain. Our solutions are secure, scalable, and backed by expert support, ensuring your business stays connected, visible, and protected online.",
      details: [
        "Domain name registration & DNS management",
        "Fast & secure web hosting with high uptime",
        "Business email setup on custom domain (e.g., yourname@company.com)",
        "SSL certificate integration for secure connections",
        "24/7 technical support and migration assistance",
        "Bundled plans for startups, SMBs & enterprises"
      ],
      img: "domain-hosting-email.jpg",
    },
    {
      title: "Website Design & Development",
      description:
        "Make a lasting digital impression with SadaTech Solutions’ Website Design & Development services. We build responsive, fast, and visually stunning websites tailored to your business goals. Whether you need a corporate site, e-commerce platform, or custom web application, our team combines modern UI/UX design with clean, scalable code to deliver a site that performs as great as it looks. Every website we create is optimized for SEO, mobile-friendly, and built with future scalability in mind.",
      details: [
        "Custom website design with modern UI/UX principles",
        "Responsive layouts optimized for mobile, tablet, and desktop",
        "E-commerce, business, and CMS-driven site development",
        "Search engine–friendly structure & metadata optimization",
        "Performance-tuned coding for speed and scalability",
        "Integration with analytics, chat, forms, and third-party tools"
      ],
      img: "website-development.jpg",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Drive organic traffic and boost online visibility with SadaTech Solutions’ expert SEO services. Our strategic SEO approach is designed to improve your website’s rankings across major search engines like Google and Bing. From technical audits and on-page optimization to keyword research and backlink building, we help your business reach the right audience at the right time. Whether you’re a local service provider or an e-commerce brand, our SEO strategies are tailored to deliver measurable results and long-term growth.",
      details: [
        "In-depth website SEO audits and competitor analysis",
        "On-page optimization (meta tags, headers, content, URLs)",
        "Technical SEO (speed, mobile-friendliness, schema)",
        "Keyword research and content strategy planning",
        "High-quality link building and authority boosting",
        "Monthly performance reports and rank tracking"
      ],
      img: "seo-service.jpg",
    },
    {
      title: "Social Media Marketing (SMM)",
      description:
        "Expand your brand presence and engage your audience with SadaTech Solutions’ Social Media Marketing services. We craft data-driven strategies and creative content tailored for platforms like Facebook, Instagram, LinkedIn, and more. From content creation and post scheduling to ad campaigns and analytics, we manage everything to help you grow your following, build trust, and drive conversions. Whether you're looking to increase brand awareness or generate leads, our team ensures your social presence supports your business goals.",
      details: [
        "Custom content creation tailored to your audience",
        "Platform-specific strategies (Facebook, Instagram, LinkedIn, etc.)",
        "Targeted ad campaigns to boost reach and engagement",
        "Account setup, branding, and optimization",
        "Monthly reports with performance insights and recommendations",
        "Consistent post scheduling and community engagement"
      ],
      img: "social-media-marketing.jpg",
    },
    {
      title: "Social Media Optimization (SMO)",
      description:
        "Enhance your brand’s social presence with SadaTech Solutions’ Social Media Optimization services. We optimize your social profiles and content strategy to ensure consistent branding, increased visibility, and better engagement. From bio setup and graphics to content alignment and hashtag strategy, our team ensures your business profiles reflect professionalism and attract the right audience. SMO lays the foundation for better interaction, improved follower retention, and organic growth across platforms.",
      details: [
        "Profile optimization across all major platforms",
        "Branded graphics for covers, logos, and highlights",
        "Keyword-rich bio and description writing",
        "Hashtag strategy and content alignment",
        "Post timing and engagement best practices",
        "Audit reports to track growth and interaction"
      ],
      img: "social-media-optimization.jpg",
    }
    ,
    {
      title: "Website Audit",
      description:
        "Uncover hidden issues and performance gaps with SadaTech Solutions’ comprehensive Website Audit service. We conduct a detailed analysis of your website's technical setup, SEO structure, user experience, and security to identify areas for improvement. Whether you're planning a redesign or simply want to enhance performance, our audit provides actionable insights that help your site run faster, rank better, and convert more visitors. Every audit includes a full report with recommendations tailored to your goals.",
      details: [
        "Technical audit covering speed, mobile-friendliness & code quality",
        "SEO analysis including keyword structure, metadata & content gaps",
        "UX/UI evaluation to identify design and navigation improvements",
        "Security check for SSL, vulnerabilities & outdated components",
        "Performance benchmarking against competitors",
        "Detailed audit report with prioritized action plan"
      ],
      img: "website-audit.jpg",
    },
    {
      title: "Local SEO Services",
      description:
        "Get found by nearby customers with SadaTech Solutions’ Local SEO Services. We help your business appear in local search results, map listings, and ‘near me’ queries by optimizing your online presence for your target region. Our team ensures your Google Business Profile, local directories, and website are fully aligned with local SEO best practices. Ideal for retailers, service providers, and location-based businesses looking to increase walk-in traffic and leads.",
      details: [
        "Google Business Profile setup & optimization",
        "Local keyword research & geo-targeted content",
        "NAP (Name, Address, Phone) consistency across directories",
        "Local backlinks and citations from trusted sources",
        "Customer review strategy and reputation management",
        "Map pack visibility and regional search optimization"
      ],
      img: "local-seo.jpg",
    }
  ];

  return (
    <>
      <Breadcrumb />
      <section className="additional-services-section">
        <Container fluid>
          <div className="section-title">
            <span>OUR ADDITIONAL SERVICES</span>
            <h2>Advanced IT & Web Services We Offer</h2>
          </div>
          <Row className="services-grid">
            {services.map((service, index) => (
              <Col key={index} xs={12} sm={6} md={6} lg={6} className="mb-4">
                <Card className="service-card h-100">
                  <Image
                    src={`/assets/images/services/${service.img}`}
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
        </Container>
      </section>
    </>
  );
}

export default AdditionalServices;
