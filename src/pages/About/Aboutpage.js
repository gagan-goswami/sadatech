import React from "react";
import "../../styles/HomeStyle.css";
import Breadcrumb from "./Breadcrumb-section";
import About from "../Home/About-section";
import Team from "../Home/Team-section";
import Whoweare from "../Home/Whoweare-section";
import Cta from "../Home/Cta-section";

function AboutPage() {
  return (
    <>
      <Breadcrumb />
      <About />
      <Whoweare />
      <Team />
      <Cta />
    </>
  );
}

export default AboutPage;
