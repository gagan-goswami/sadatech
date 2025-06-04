import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CountUp from "react-countup";
import { IoIosPeople } from "react-icons/io";
import { FaProjectDiagram } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

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
      icon: <IoIosPeople size={40} />,
      count: 50,
      label: "Satisfied Clients",
      description: "Trusted by businesses worldwide",
    },
    {
      icon: <GiSkills size={40} />,
      count: 36,
      label: "Completed Projects",
      description: "Delivering quality every time",
    },
    {
      icon: <FaProjectDiagram size={40} />,
      count: 21,
      label: "Expert Professionals",
      description: "Experienced team driving success",
    },
    {
      icon: <MdOutlinePhotoLibrary size={40}  />,
      count: 201,
      label: "Media Publications",
      description: "Showcasing our achievements",
    },
  ];

  return (
    <section className="funfact-section">
      <Container>
        <Row className="g-4">
          {facts.map(({ icon, count, label, description }, idx) => (
            <Col
              key={idx}
              lg={3}
              md={6}
              sm={12}
              data-aos="zoom-in"
              className="d-flex justify-content-center"
            >
              <Card
                className="funfact-card shadow-sm text-center p-4">
                <div className="mb-3">{icon}</div>
                <h2>
                  <CountUp end={count} duration={3} />+
                </h2>
                <h3>{label}</h3>
                <p className="text-muted">
                  {description}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Funfact;
