import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Author1 from "../../assets/images/testi-1.jpg";
import Author2 from "../../assets/images/testi-2.jpg";
import Author3 from "../../assets/images/testi-3.jpg";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonial() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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
              responsive={{
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 },
              }}
            >
              {[ // List of testimonials to avoid repetition
                {
                  text: `Green Hira’s team provided exceptional service and quality products. Their attention to detail made our project a success.`,
                  name: "Luna John",
                  role: "UX Designer",
                  image: Author1,
                },
                {
                  text: `Working with Prabha Enterprise has been a game changer. Their expertise in textiles has greatly improved our production quality.`,
                  name: "Michael Wilson",
                  role: "SEO Expert",
                  image: Author2,
                },
                {
                  text: `The design solutions from SUYA DESIGNS exceeded our expectations. Their creativity transformed our vision into reality.`,
                  name: "Nia Nalson",
                  role: "Business Developer",
                  image: Author3,
                },
              ].map((testimonial, index) => (
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
