import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import "../styles/HeaderStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/images/sadatech-logo.png";

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const location = useLocation(); // For active links & scroll to top

  // Resize
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 992);
  };

  // Offcanvas handlers
  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
    setActiveDropdown(null);
  };

  const handleShowOffcanvas = () => setShowOffcanvas(true);

  // Resize listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll sticky menu
  useEffect(() => {
    const handleScroll = () => {
      const stickyClass = "is-sticky-menu";
      const scrollTop = window.scrollY;
      const stickyElement = document.querySelector(".is-sticky-on");

      if (scrollTop >= 250) {
        stickyElement?.classList.add(stickyClass);
      } else {
        stickyElement?.classList.remove(stickyClass);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu + scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    handleCloseOffcanvas();
  }, [location]);

  // Toggle dropdown in mobile
  const toggleDropdown = (key) => {
    setActiveDropdown((prevKey) => (prevKey === key ? null : key));
  };

  // Dropdown component
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
      <div className={`dropdown-content ${activeDropdown === key ? "open" : ""}`}>
        {links.map(({ to, label }) => (
          <Nav.Link
            as={Link}
            to={`/${to}`}
            className={`dropdown-item ${location.pathname === `/${to}` ? "active" : ""}`}
            key={to}
            onClick={handleCloseOffcanvas}
          >
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
                    <Nav.Link
                      as={Link}
                      to="/"
                      onClick={handleCloseOffcanvas}
                      className={location.pathname === "/" ? "active" : ""}
                    >
                      Home
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      as={Link}
                      to="/about"
                      onClick={handleCloseOffcanvas}
                      className={location.pathname === "/about" ? "active" : ""}
                    >
                      About
                    </Nav.Link>
                  </Nav.Item>

                  {/* Dropdown Menu */}
                  {renderDropdown("services", "Services", [
                    { to: "it-infrastructure", label: "IT Infrastructure Services" },
                    { to: "website-design-development", label: "Website Design & Development" },
                    { to: "email-solution", label: "Email Solution" },
                    { to: "cloud-computing", label: "Cloud Computing" },
                  ])}

                  <Nav.Item>
                    <Nav.Link
                      as={Link}
                      to="/contactus"
                      onClick={handleCloseOffcanvas}
                      className={location.pathname === "/contactus" ? "active" : ""}
                    >
                      Contact
                    </Nav.Link>
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
