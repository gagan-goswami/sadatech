import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function Breadcrumb() {
  return (
    // == breadcrumb-section-start ==
    <section className="breadcrumb-section">
      <Container>
        <div className="breadcrumb-box">
          <div className="breadcrumb-heading">
            <h2>Contact Us</h2>
          </div>
          <ul className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <IoIosArrowForward />
            </li>
            <li>Contact Us</li>
          </ul>
        </div>
      </Container>
    </section>
    // == breadcrumb-section ==
  );
}

export default Breadcrumb;
