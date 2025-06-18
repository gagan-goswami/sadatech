import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Breadcrumb from "./Breadcrumb-section";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function ErrorPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Breadcrumb />
      <section className="error-page">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="error-item" data-aos="fade-down">
                <span>404</span>
                <h2>Page Not Found</h2>
                <p>
                  Oops! The page you were asking for does not exist. Try
                  searching our site for what you are looking for.
                </p>
              </div>
              <div className="home-btn" data-aos="fade-down">
                <Link to="/">Back To Home</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ErrorPage;
