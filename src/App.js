import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import AboutPage from "./pages/About/Aboutpage";
import ItInfrastructure from "./pages/Service/It-Infrastructure";
import ItManagedServices from "./pages/Service-1/It-Managed-Services";
import EmailSolution from "./pages/Service-2/Email-Solution"; 
import ContactPage from "./pages/Contact/ContactPage";
import Portfolio from "./pages/Portfolio/Portfoliopage";
import Teampage from "./pages/Team/Teampage";
import Faqs from "./pages/Faqs/Faqpage";
import TestimonialPage from "./pages/Testimonial/Testimonialpage";
import Errorpage from "./pages/404-page/Error";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/it-infrastructure" element={<ItInfrastructure />} /> 
          <Route path="/it-managed-services" element={<ItManagedServices />} />
          <Route path="/email-solution" element={<EmailSolution />} />
          <Route path="/contactus" element={<ContactPage />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/team" element={<Teampage />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
