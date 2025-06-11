import React from "react";
import Breadcrumb from "./Breadcrumb-section";

function AdditionalServices() {
  const services = [
    {
      title: "IT Managed Services (AMC)",
      description: "Ensure the smooth operation of your IT ecosystem with our Annual Maintenance Contracts. We provide continuous monitoring, preventive maintenance, and swift resolution of technical issues to help businesses maintain seamless performance and reduce downtime.",
      details: [
        "Proactive Monitoring & Alerts",
        "Scheduled Maintenance & Patch Updates",
        "Hardware Diagnostics & Repairs",
        "24/7 Technical Support",
        "SLA-based Issue Resolution",
        "Periodic Performance Reports"
      ],
      img: "it-managed-service.jpg",
    },
    {
      title: "Hardware Rental Services",
      description: "Cut down capital expenses with our flexible hardware rental plans. We offer high-quality, business-ready devices on a rental basis—ideal for training, events, or temporary infrastructure needs.",
      details: [
        "Laptops & Desktops",
        "Projectors & Printers",
        "Network Devices",
        "Short-Term & Long-Term Leasing",
        "On-Site Support"
      ],
      img: "hardware-rental.jpg",
    },
    {
      title: "IT Infrastructure Services",
      description: "Build and manage reliable IT infrastructure with us. We deliver design, implementation, and management of enterprise-class infrastructure customized to your business scale and workflow.",
      details: [
        "Network Setup (LAN/WAN)",
        "Data Center Planning",
        "Structured Cabling",
        "Cloud Infrastructure Setup",
        "UPS & Power Backup"
      ],
      img: "it-infrastructure.jpg",
    },
    {
      title: "Hardware Support & Maintenance",
      description: "Enhance the lifespan and performance of your IT hardware. We offer proactive and reactive maintenance services for all your IT equipment to ensure they function optimally without interruptions.",
      details: [
        "Preventive Maintenance",
        "On-Site Diagnostics",
        "Hardware Repair & Replacement",
        "Support for All Brands",
        "Annual Maintenance Plans"
      ],
      img: "hardware-support.jpg",
    },
    {
      title: "IT Consultants",
      description: "Align your IT operations with business goals. Our certified consultants provide strategic advice, digital transformation plans, and implementation support for your IT roadmap.",
      details: [
        "Cloud Transformation",
        "IT Budget Planning",
        "Cybersecurity Strategy",
        "Infrastructure Assessment",
        "Vendor Evaluation"
      ],
      img: "it-consultants.jpg",
    },
    {
      title: "IT Hardware Sales",
      description: "Procure top-quality hardware from authorized resellers. We deal in leading brands and provide expert advice to help you choose the right components for your business.",
      details: [
        "Desktops, Laptops & Servers",
        "Network Devices (Routers, Switches)",
        "Printers, Scanners, and MFDs",
        "Monitors, Accessories, and Storage"
      ],
      img: "it-sales.jpg",
    },
    {
      title: "Software Reselling",
      description: "Get genuine software licenses with full compliance. We are an authorized reseller for various essential business applications and software platforms.",
      details: [
        "Microsoft Office, Windows, Azure",
        "Adobe Creative Cloud",
        "Antivirus & Security Suites",
        "ERP and CRM Solutions"
      ],
      img: "software-reselling.jpg",
    },
    {
      title: "Refurbished Hardware",
      description: "Economical, tested, and warranty-backed refurbished IT equipment for startups, SMBs, and budget-conscious businesses.",
      details: [
        "Refurbished Laptops & PCs",
        "Certified Pre-Owned Servers",
        "Replacement Parts",
        "Warranty & Support Included"
      ],
      img: "refurbished-hardware.jpg",
    },
    {
      title: "Web Solutions",
      description: "Empower your digital presence with custom web development. We deliver end-to-end solutions—from UI design to backend architecture.",
      details: [
        "Corporate Websites",
        "E-commerce Platforms",
        "Web Portals & Dashboards",
        "API & Database Integration",
        "Responsive Mobile Design"
      ],
      img: "web-solutions.jpg",
    },
    {
      title: "Domain, Hosting & Email",
      description: "Simplify your digital foundation with our bundled hosting and domain solutions. Secure infrastructure paired with professional business email setup.",
      details: [
        "Domain Registration",
        "Shared/VPS/Dedicated Hosting",
        "Business Email (MS365, GSuite)",
        "DNS & SSL Setup"
      ],
      img: "domain-hosting.jpg",
    },
    {
      title: "Website Design & Development",
      description: "From concepts to code, we create websites that represent your brand and drive business results with engaging design and seamless functionality.",
      details: [
        "Custom UI/UX Design",
        "Responsive Development",
        "CMS Integration (WordPress, etc.)",
        "SEO-Friendly Code",
        "Maintenance & Support"
      ],
      img: "web-development.jpg",
    },
    {
      title: "Search Engine Optimisation (SEO)",
      description: "Boost visibility and traffic with advanced SEO strategies. We optimize every aspect of your website to rank higher on Google and other search engines.",
      details: [
        "Keyword Research",
        "On-Page SEO Optimization",
        "Technical SEO Audits",
        "Link Building",
        "Performance Tracking"
      ],
      img: "seo.jpg",
    },
    {
      title: "Social Media Marketing (SMM)",
      description: "Reach and engage your audience on popular platforms. Our campaigns are crafted to increase brand awareness, traffic, and conversions.",
      details: [
        "Facebook, LinkedIn, Instagram",
        "Content Calendar & Creatives",
        "Targeted Ad Campaigns",
        "Analytics & Reporting"
      ],
      img: "social-media-marketing.jpg",
    },
    {
      title: "Social Media Optimisation (SMO)",
      description: "Make your brand discoverable with optimized social media profiles. Enhance engagement with consistent visuals, keywords, and content.",
      details: [
        "Profile Optimization",
        "Bio & Link Setup",
        "Creative Posting Strategy",
        "Hashtag & Keyword Research",
        "Engagement Boosting Techniques"
      ],
      img: "smo.jpg",
    },
    {
      title: "Website Audit",
      description: "Get a complete health check of your website with our comprehensive audits. We assess every aspect of your site—from design to security—and provide actionable recommendations to improve performance and compliance.",
      details: [
        "Performance & Speed Analysis",
        "UX/UI Evaluation",
        "SEO Audit (Technical + On-Page)",
        "Mobile Responsiveness Check",
        "Security Audit (SSL, Firewall, Malware)",
        "Recommendations & Fix Strategy"
      ],
      img: "website-audit.jpg",
    }
  ];

  return (
    <>
      <Breadcrumb />
      <section className="additional-services-section">
        <div className="container">
          <h2 className="section-title">Our Additional Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <img
                  src={`/assets/images/services/${service.img}`}
                  alt={service.title}
                  className="service-image"
                />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-details">
                  <ul>
                    {service.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AdditionalServices;