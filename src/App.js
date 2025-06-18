import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import AboutPage from "./pages/About/Aboutpage";
import ItInfrastructure from "./pages/Service/It-Infrastructure";
import WebsiteDesignDevelopment from "./pages/Service-1/Website-design-development";
import EmailSolution from "./pages/Service-2/Email-Solution";
import CloudComputing from "./pages/Service-3/Cloud-computing";
import ContactPage from "./pages/Contact/ContactPage";
import Portfolio from "./pages/Portfolio/Portfoliopage";
import Partnerpage from "./pages/Partner/Partnerpage";
import TestimonialPage from "./pages/Testimonial/Testimonialpage";
import Errorpage from "./pages/404-page/Error";

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/it-infrastructure" element={<ItInfrastructure />} />
          <Route
            path="/Website-design-development"
            element={<WebsiteDesignDevelopment />}
          />
          <Route path="/email-solution" element={<EmailSolution />} />
          <Route path="/Cloud-Computing" element={<CloudComputing />} />
          <Route path="/contactus" element={<ContactPage />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/Partnerpage" element={<Partnerpage />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
