import React from "react";
import Breadcrumb from "./Breadcrumb-section";
import Project from "../Home/project-section";
import Whoweare from "../Home/Whoweare-section";
import Cta from "../Home/Cta-section";
import Team from "../Home/Team-section";

function Portfoliopage() {
  return (
    <>
      <Breadcrumb />
      <Project />
      <Whoweare />
      <Team />
      <Cta />
    </>
  );
}

export default Portfoliopage;
