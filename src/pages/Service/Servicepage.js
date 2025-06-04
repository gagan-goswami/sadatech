import React from "react";
import "../../styles/HomeStyle.css";
import Breadcrumb from "./Breadcrumb-section";
import Service from "../Home/Service-section";
import Team from "../Home/Team-section";
import Cta from "../Home/Cta-section";
import Whoweare from "../Home/Whoweare-section";

function AboutPage() {
  return (
    <>
      <Breadcrumb />
      <Service />
      <Whoweare />
      <Team />
      <Cta />
    </>
  );
}

export default AboutPage;
