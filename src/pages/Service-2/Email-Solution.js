import React from "react";
import { Container, Row, Col, Card, Image, ListGroup } from "react-bootstrap";
import Breadcrumb from "./Breadcrumb-section";
import { FaPhoneAlt } from "react-icons/fa";
import Service1 from "../../assets/images/mail-service-1.webp";
import Service2 from "../../assets/images/mail-service-2.jpg";
import Service3 from "../../assets/images/mail-service-3.jpg";
import Service4 from "../../assets/images/mail-service-4.jpg";
import Service5 from "../../assets/images/mail-service-5.jpg";
import Service6 from "../../assets/images/mail-service-6.jpg";
import Service7 from "../../assets/images/mail-service-7.png";
import Service8 from "../../assets/images/mail-service-8.jpg";

function AdditionalServices() {
  const services = [
    {
      title: "Google Workspace Solutions",
      description:
        "Empower your team with modern productivity tools through Google Workspace, formerly G Suite. SadaTech Solutions helps businesses of all sizes seamlessly adopt, configure, and manage Google’s cloud-based suite of communication and collaboration tools. From professional Gmail to shared drives and calendar sync, we provide end-to-end support including deployment, training, and license management. Whether you're starting fresh or migrating from legacy systems, we ensure a smooth, secure, and efficient transition to Google Workspace.",
      details: [
        "Gmail for Business with custom domain integration",
        "Google Drive, Docs, Sheets, and Slides for real-time collaboration",
        "Google Meet and Chat for seamless team communication",
        "Admin console setup, user provisioning, and access control",
        "Migration from Microsoft, Zoho, or legacy email platforms",
        "Ongoing license management, billing support, and user training"
      ],
      img: Service1,
    },
    {
      title: "Microsoft 365 Solutions",
      description:
        "Unlock seamless productivity and enterprise-grade communication with Microsoft 365. At SadaTech Solutions, we help businesses deploy, manage, and optimize Microsoft 365 tools like Outlook, Word, Excel, Teams, and SharePoint. Whether you're adopting it for the first time or migrating from another platform, we provide complete setup, license management, and user training. Our goal is to ensure your team stays connected, collaborative, and secure with trusted Microsoft cloud services.",
      details: [
        "Business email setup with Outlook and Exchange Online",
        "Access to Microsoft Word, Excel, PowerPoint & Teams",
        "Secure cloud storage and sharing via OneDrive & SharePoint",
        "User provisioning, admin dashboard setup, and access controls",
        "Migration from legacy systems or other platforms (e.g., G Suite, Zoho)",
        "Ongoing license renewals, support, and usage optimization"
      ],
      img: Service2,
    },
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
      img: Service3,
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
      img: Service4,
    },
    {
      title: "Hybrid Email Solutions",
      description:
        "Get the best of both worlds with SadaTech Solutions’ Hybrid Email Solutions — combining the flexibility of cloud-based email platforms like Microsoft 365 or Google Workspace with the control of on-premise servers. Ideal for organizations with complex security policies, legacy systems, or regulatory needs, our hybrid email setups offer seamless integration, secure communication, and scalable infrastructure. We ensure reliable email delivery, centralized management, and smooth coexistence between platforms to support your long-term IT strategy.",
      details: [
        "Integration of on-premise servers with cloud-based email platforms",
        "Centralized mailbox management and user provisioning",
        "Support for Microsoft Exchange Hybrid & Gmail hybrid environments",
        "Custom routing policies, archiving, and backup setup",
        "Email encryption, compliance, and data protection protocols",
        "Seamless migration and coexistence strategy for smooth transitions"
      ],
      img: Service5,
    },
    {
      title: "Webmail Solutions",
      description:
        "Empower your workforce with anytime, anywhere access to business email through SadaTech Solutions’ Webmail Services. Our browser-based email platform offers a user-friendly interface, strong spam filtering, and seamless integration with calendars and contacts. Whether for startups, SMBs, or enterprises, we deliver secure, reliable, and fully managed webmail environments tailored to your communication needs. Accessible across devices, our webmail solutions keep your team connected and productive — with no complex setup required.",
      details: [
        "Web-based email access from any device or browser",
        "Custom domain email setup (e.g., yourname@yourcompany.com)",
        "Robust spam filtering and virus protection",
        "Integrated calendar, contacts, and task management",
        "Admin panel for mailbox creation and control",
        "Scalable plans with storage, backup, and support"
      ],
      img: Service6,
    },
    {
      title: "Zoho Mail Solutions",
      description:
        "Modernize your business communication with Zoho Mail — a secure, ad-free email platform built for professionals. SadaTech Solutions provides end-to-end setup, migration, and support for Zoho Mail, helping your team stay connected with a clean, intuitive interface and robust admin controls. Whether you’re a small business or a growing enterprise, we tailor Zoho Mail to your organization's workflow, ensuring enhanced productivity, data privacy, and brand presence through custom domain email.",
      details: [
        "Professional email with your company’s custom domain",
        "Ad-free, clean user interface with mobile & desktop access",
        "Advanced admin controls for mailbox & user management",
        "Integrated calendar, contacts, notes, and tasks",
        "Seamless migration from Gmail, Outlook, or other providers",
        "24/7 email access with high uptime, encryption, and backup"
      ],
      img: Service7,
    },
    {
      title: "Business Email Solutions",
      description:
        "Power your team's communication with secure, professional-grade Business Email Solutions from SadaTech Solutions. We offer tailored email hosting on your custom domain, with reliable uptime, spam protection, and full admin control. Whether you prefer cPanel email, Zoho, Google Workspace, or Microsoft 365, our team ensures seamless setup, migration, and integration. We focus on delivering email systems that are scalable, secure, and built for productivity across devices.",
      details: [
        "Custom domain email hosting with branding",
        "IMAP/POP & Webmail access with full control panel",
        "Spam filtering, virus protection, and data encryption",
        "Migration from old mail systems without data loss",
        "Integration with mobile, Outlook, and desktop clients",
        "Ongoing support, mailbox management & renewal tracking"
      ],
      img: Service8,
    }
  ];

  return (
    <>
      <Breadcrumb />
      <section className="additional-services-section">
        <Container fluid>
          <div className="section-title">
            <span>COMPLETE EMAIL INFRASTRUCTURE</span>
            <h2>Deploy Powerful Email Platforms with Expert Setup Migration & Support</h2>
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
