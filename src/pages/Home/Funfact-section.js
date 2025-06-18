import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images (if using images instead of icons)
import Funfact1 from "../../assets/images/funfact-1.png";
import Funfact2 from "../../assets/images/funfact-2.png";
import Funfact3 from "../../assets/images/funfact-3.png";
import Funfact4 from "../../assets/images/funfact-4.png";

function Funfact() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const facts = [
    {
      iconType: "image",
      icon: Funfact1,
      count: 400,
      label: "Satisfied Clients",
      description: "Trusted by businesses worldwide",
    },
    {
      iconType: "image",
      icon: Funfact2,
      count: 500,
      label: "Completed Projects",
      description: "Delivering quality every time",
    },
    {
      iconType: "image",
      icon: Funfact3,
      count: 20,
      label: "Expert Professionals",
      description: "Experienced team driving success",
    },
    {
      iconType: "image",
      icon: Funfact4,
      count: 201,
      label: "Media Publications",
      description: "Showcasing our achievements",
    },
  ];

  return (
    <section className="funfact-section py-5">
      <Container>
        <Row>
          {facts.map((fact, idx) => (
            <Col
              key={idx}
              lg={3} md={6} xs={6}
              data-aos="zoom-in" className="mb-4">
              <Card className="funfact-card shadow-sm text-center">
                <div className="funfact-icon orbit-icon mb-3">
                  {fact.iconType === "image" ? (
                    <img
                      src={fact.icon}
                      alt={fact.label}
                      style={{ width: "50%", height: "50%" }}
                    />
                  ) : (
                    fact.icon
                  )}
                </div>

                <h2>
                  <CountUp end={fact.count} duration={3} />+
                </h2>
                <h3>{fact.label}</h3>
                <p className="text-muted">{fact.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Funfact;
