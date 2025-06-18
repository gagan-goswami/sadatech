import React from "react";
import Breadcrumb from "./Breadcrumb-section";
import Project from "../Home/project-section";
import Whoweare from "../Home/Whoweare-section";
import Cta from "../Home/Cta-section";
import Partner from "../Home/partner-section";

function Portfoliopage() {
  return (
    <>
      <Breadcrumb />
      <Project />
      <Whoweare />
      <Partner />
      <Cta />
    </>
  );
}

export default Portfoliopage;
