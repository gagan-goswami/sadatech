import React from "react";
import "../../styles/HomeStyle.css";
import Hero from "./Hero-section.js";
import Service from "./Service-section.js";
import About from "./About-section.js";
import Funfact from "./Funfact-section.js";
import WhyChoose from "./Why-choose-section.js";
import Project from "./project-section.js";
import Whoweare from "./Whoweare-section.js";
import Team from "./Team-section.js";
import Testimonial from "./Testimonial-section.js";
import Cta from "./Cta-section.js";

function Home() {
  return (
    <>
      {/* hero-section */}
      <Hero />

      {/* service-section */}
      <Service />

      {/* About-section */}
      <About />

      {/* funfact-section */}
      <Funfact />

      {/* whyChoose-section */}
      <WhyChoose />

      {/* project-section */}
      <Project />

      {/* who-we-are-section */}
      <Whoweare />

      {/* team-section */}
      <Team />

      {/* testimonial-section */}
      <Testimonial />

      {/* Cta-section */}
      <Cta />
    </>
  );
}

export default Home;
