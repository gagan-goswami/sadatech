import React from "react";
import "../../styles/HomeStyle.css";
import Breadcrumb from "./Breadcrumb-section";
import About from "../Home/About-section";
import Team from "../Home/Team-section";
import Whoweare from "../Home/Whoweare-section";
import Cta from "../Home/Cta-section";
import Testimonial from "../Home/Testimonial-section";
import WhyChooseUs from "../Home/Why-choose-section";

function AboutPage() {
  return (
    <>
      <Breadcrumb />
      <About />
      <WhyChooseUs style={{ background: "white", padding: "20px" }}  />
      <Whoweare />
      <Team />
      <Testimonial />
      <Cta />
    </>
  );
}

export default AboutPage;
