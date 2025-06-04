import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBars, FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import "../styles/HeaderStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/images/sadatech-logo.png";

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 992);
  };

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const stickyClass = "is-sticky-menu";
      const scrollTop = window.scrollY;
      const stickyElement = document.querySelector(".is-sticky-on");

      if (scrollTop >= 250) {
        stickyElement.classList.add(stickyClass);
      } else {
        stickyElement.classList.remove(stickyClass);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (key) => {
    setActiveDropdown((prevKey) => (prevKey === key ? null : key));
  };

  const renderDropdown = (key, label, links) => (
    <Nav.Item
      className={`dropdown ${activeDropdown === key ? "active" : ""}`}
      onMouseEnter={() => !isMobile && setActiveDropdown(key)}
      onMouseLeave={() => !isMobile && setActiveDropdown(null)}
    >
      <Nav.Link
        href="#"
        onClick={(e) => {
          if (isMobile) {
            e.preventDefault();
            toggleDropdown(key);
          }
        }}
      >
        {label} <FaChevronDown className={`chevron ${activeDropdown === key ? "rotate" : ""}`} />
      </Nav.Link>
      <div
        className={`dropdown-content ${
          activeDropdown === key ? "open" : ""
        }`}
      >
        {links.map(({ to, label }) => (
          <Nav.Link as={Link} to={to} className="dropdown-item" key={to}>
            {label}
          </Nav.Link>
        ))}
      </div>
    </Nav.Item>
  );

  return (
    <header className="header-section">
      <div className="menu-bar is-sticky-on">
        <Container>
          <Navbar expand="lg" className="p-0">
            <Navbar.Brand>
              <Link to="/">
                <img src={Logo} alt="Logo" className="img-fluid" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              onClick={handleShowOffcanvas}
              className="ms-auto"
            >
              <FaBars />
            </Navbar.Toggle>
            <Link to="/" className="call-btn">
              <FaPhoneAlt />
            </Link>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
              show={showOffcanvas}
              onHide={handleCloseOffcanvas}
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body className="offcanvas-menu">
                <Nav className="m-auto p-0">
                  <Nav.Item>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/About">About</Nav.Link>
                  </Nav.Item>

                  {/* Dropdowns */}
                  {renderDropdown("services", "Services", [
                    { to: "/Services/ITManagedServices", label: "IT Managed Services (AMC)" },
                    { to: "/Services/HardwareRental", label: "Hardware Rental Services" },
                    { to: "/Services/ITInfrastructure", label: "IT Infrastructure Services" },
                    { to: "/Services/HardwareSupport", label: "Hardware Support & Maintenance" },
                    { to: "/Services/ITConsultants", label: "IT Consultants" },
                  ])}

                  {renderDropdown("itsales", "IT Sales", [
                    { to: "/ITSales/Hardware", label: "IT Hardware Sales" },
                    { to: "/ITSales/SoftwareReselling", label: "Software Reselling" },
                    { to: "/ITSales/Refurbished", label: "Refurbished Hardware’s" },
                  ])}

                  {renderDropdown("websolutions", "Web Solutions", [
                    { to: "/WebSolutions/Hosting", label: "Domain, Hosting & Email" },
                    { to: "/WebSolutions/DesignDevelopment", label: "Website Design & Development" },
                    { to: "/WebSolutions/SEO", label: "Search Engine Optimisation (SEO)" },
                    { to: "/WebSolutions/SMM", label: "Social Media Marketing" },
                    { to: "/WebSolutions/SMO", label: "Social Media Optimisation" },
                    { to: "/WebSolutions/WebsiteAudit", label: "Website Audit" },
                  ])}

                  <Nav.Item>
                    <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <button className="contact-btn">Contact Us</button>
          </Navbar>
        </Container>
      </div>
    </header>
  );
};

export default Header;
