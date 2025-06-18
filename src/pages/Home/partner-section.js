import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Client1 from "../../assets/images/client-1.png";
import Client2 from "../../assets/images/client-2.png";
import Client3 from "../../assets/images/client-3.png";
import Client4 from "../../assets/images/client-4.png";
import Client5 from "../../assets/images/client-5.png";
import Client6 from "../../assets/images/client-6.png";
import Client7 from "../../assets/images/client-7.png";
import Client8 from "../../assets/images/client-8.png";

const Clients = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const clientLogos = [
    Client1,
    Client2,
    Client3,
    Client4,
    Client5,
    Client6,
    Client7,
    Client8,
  ];

  return (
    <section className="clients-section">
      <Container>
        <div className="section-title text-center mb-5">
          <span>Our Clients</span>
          <h2>Trusted by Companies Across Industries</h2>
        </div>
        <Row>
          <Col lg={12}>
            <OwlCarousel
              className="owl-theme"
              items={5}
              autoplay={true}
              loop={true}
              margin={20}
              autoplayHoverPause={true}
              autoplayTimeout={2000}
              smartSpeed={1000}
              dots={false}
              nav={false}
              responsive={{
                0: { items: 2 },
                576: { items: 3 },
                768: { items: 4 },
                992: { items: 5 },
              }}
            >
              {clientLogos.map((logo, index) => (
                <div className="client-logo" key={index} data-aos="zoom-in">
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="img-fluid"
                  />
                </div>
              ))}
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Clients;
