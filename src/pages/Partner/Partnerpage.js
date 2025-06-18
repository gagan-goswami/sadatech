import React from "react";
import "../../styles/HomeStyle.css";
import Breadcrumb from "./Breadcrumb-section.js";
import Team from "./Partnerpage.js";
import Whoweare from "../Home/Whoweare-section.js";
import Cta from "../Home/Cta-section.js";

function Teampage() {
  return (
    <>
      <Breadcrumb />
      <Team />
      <Whoweare />
      <Cta />
    </>
  );
}

export default Teampage;
