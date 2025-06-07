import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Author1 from "../../assets/images/client-2.png";
import Author2 from "../../assets/images/client-3.png";
import Author3 from "../../assets/images/client-9.png";
import Author4 from "../../assets/images/client-4.png";
import Author5 from "../../assets/images/client-5.png";
import Author6 from "../../assets/images/client-6.png";
import Author7 from "../../assets/images/client-7.png";
import Author8 from "../../assets/images/client-8.png";

function Testimonial() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const testimonials = [
    {
      text: `Partnering with SadaTech Solutions was a turning point for our operations. Their agile IT support and infrastructure planning helped us optimize performance across the board.`,
      name: "Adam Cohen",
      role: "Operations Director",
      image: Author1,
    },
    {
      text: `SadaTech’s team went above and beyond to digitize our internal systems. Their communication, technical expertise, and dedication impressed us throughout the project.`,
      name: "Neha Verma",
      role: "Chief Technology Officer",
      image: Author2,
    },
    {
      text: `The automation solutions delivered by SadaTech streamlined our production workflow. Their ability to integrate custom software was exactly what we needed.`,
      name: "Rajan Kapoor",
      role: "Automation Engineer",
      image: Author3,
    },
    {
      text: `We trusted SadaTech for core banking enhancements and cybersecurity upgrades. Their approach was strategic, secure, and tailored for financial institutions like ours.`,
      name: "Ritesh Nair",
      role: "Head of IT",
      image: Author4,
    },
    {
      text: `From idea to execution, SadaTech handled our SaaS platform build with exceptional skill. Their development cycle was clear, and the outcome exceeded our expectations.`,
      name: "Divya Malhotra",
      role: "Product Manager",
      image: Author5,
    },
    {
      text: `Thanks to SadaTech, our hospital management system is now fully digital and HIPAA-compliant. Their health tech experience made all the difference.`,
      name: "Dr. K. Shiva Prasad",
      role: "Medical Director",
      image: Author6,
    },
    {
      text: `SadaTech helped us migrate our legacy systems to a cloud-first architecture. Their team was professional, fast, and flexible with every change request.`,
      name: "Mehul Sanghvi",
      role: "IT Lead",
      image: Author7,
    },
    {
      text: `We chose SadaTech for our real estate portal development, and they delivered a fast, SEO-friendly platform that works across all devices. Highly recommended.`,
      name: "Natasha Mehra",
      role: "Digital Marketing Head",
      image: Author8,
    },
  ];

  return (
    <section className="testimonial-section">
      <Container>
        <div className="section-title">
          <span>Success Stories</span>
          <h2>What Our Clients Say</h2>
        </div>
        <Row>
          <Col lg={12}>
            <OwlCarousel
              className="owl-theme"
              items={3}
              autoplay={true}
              loop={true}
              slideBy={1}
              animateIn="fadeIn"
              animateOut="fadeOut"
              autoplayHoverPause={true}
              autoplayTimeout={3000}
              smartSpeed={1000}
              dots={false}
              nav={false}
              margin={30}
              responsive={{
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div className="slide-item" key={index}>
                  <div className="testimonial-content" data-aos="fade-up">
                    <BiSolidQuoteLeft />
                    <p>"{testimonial.text}"</p>
                    <div className="author d-flex align-items-center mt-3">
                      <div className="flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.name} - ${testimonial.role}`}
                          className="img-fluid"
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h2>{testimonial.name}</h2>
                        <p>{testimonial.role}</p>
                        <ul className="star-rating d-flex p-0 m-0 list-unstyled">
                          {[...Array(5)].map((_, i) => (
                            <li key={i}>
                              <FaStar />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonial;
