import React from "react";
import "../../styles/HomeStyle.css";
import Breadcrumb from "./Breadcrumb-section";
import Team from "../../pages/Team/Teampage.js";
import Whoweare from "../Home/Whoweare-section";
import Cta from "../Home/Cta-section";

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
