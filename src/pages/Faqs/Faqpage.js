import React, { useState } from "react";
import { Accordion, Card, Button, Container, Row } from "react-bootstrap";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb-section";
import Whoweare from "../Home/Whoweare-section";
import Cta from "../Home/Cta-section";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const DigitalMarketingAccordion = () => {
  AOS.init({
    duration: 1000, // Animation duration
    once: true, // Whether animation should happen only once
  });

  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const content = [
    {
      title: "Search Engine Optimization (SEO)",
      text: [
        "Definition: SEO is the process of optimizing a website to improve its visibility in search engine results.",
        "Keyword Research: Identify relevant keywords that potential customers are searching for to integrate into your content.",
        "Technical SEO: Ensure your website is structured correctly for search engines to crawl and index effectively.",
        "Backlinks: Acquire quality backlinks from reputable sources to boost your site's authority.",
        "Results: A well-optimized website increases organic traffic, enhances user experience, and leads to higher conversion rates.",
      ],
    },
    {
      title: "Content Marketing",
      text: [
        "Definition: Content marketing involves creating valuable content to attract and engage a target audience.",
        "Content Types: Utilize various formats, including blog posts, videos, infographics, and podcasts.",
        "Establish Authority: Provide helpful information to position your brand as an industry leader.",
        "Customer Engagement: Address audience needs and interests, fostering better relationships.",
        "Long-Term Benefits: Drives profitable customer actions and enhances brand loyalty over time.",
      ],
    },
    {
      title: "Social Media Marketing",
      text: [
        "Definition: Social media marketing uses platforms to connect with audiences and promote brands.",
        "Engaging Posts: Create engaging content, including posts, stories, and ads, to capture attention.",
        "Direct Interaction: Facilitate real-time interaction with customers for feedback and insights.",
        "Tailored Content: Analyze user behavior to tailor your messaging to their preferences.",
        "Visibility: Consistent presence increases brand visibility and drives traffic to your website.",
      ],
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      text: [
        "Definition: PPC is an online advertising model where advertisers pay for each click on their ad.",
        "Immediate Visibility: Gain immediate exposure on search engines and social media platforms.",
        "Targeting: Use demographic targeting to reach specific audiences based on criteria.",
        "Performance Monitoring: Optimize campaigns based on key performance indicators for better ROI.",
        "Remarketing: Re-engage users who have previously interacted with your content to drive conversions.",
      ],
    },
    {
      title: "Email Marketing",
      text: [
        "Definition: Email marketing is a direct strategy involving targeted email communications to prospects and customers.",
        "Personalization: Craft personalized campaigns that include promotions, newsletters, and updates.",
        "Segmentation: Segment your audience for tailored messaging, increasing open and click-through rates.",
        "Nurturing Leads: Provide value to nurture leads and encourage repeat business.",
        "Loyalty Building: One of the most effective strategies for building customer loyalty and driving conversions.",
      ],
    },
    {
      title: "Affiliate Marketing",
      text: [
        "Definition: Affiliate marketing partners with individuals to promote products or services for a commission.",
        "Platforms: Affiliates use their channels, like blogs or social media, to reach their audience.",
        "Expanded Reach: Tap into new customer segments leveraging the trust affiliates have with their followers.",
        "Support: Provide affiliates with marketing materials and support to maximize success.",
        "Performance Incentives: Creates a win-win situation by incentivizing affiliates based on their performance.",
      ],
    },
    {
      title: "Analytics and Data Analysis",
      text: [
        "Definition: Analytics involves using tools to track user behavior and measure marketing performance.",
        "Data Collection: Gather data to gain insights into customer preferences and traffic sources.",
        "Trend Identification: Analyze trends and areas for improvement to inform your strategies.",
        "A/B Testing: Implement testing to refine campaigns and ensure maximum effectiveness.",
        "Optimization: Leverage analytics to optimize marketing efforts and enhance overall ROI.",
      ],
    },
  ];

  return (
    <>
      <Breadcrumb />
      <section className="faq-section">
        <Container>
          <div className="section-title">
            <span>FAQ</span>
            <h2>Frequently Asked Questions ?</h2>
          </div>
          <Row>
            <Accordion activeKey={activeKey}>
              {content.map((item, index) => (
                <Card key={index}>
                  <Card.Header data-aos="fade-right">
                    <Button
                      variant="link"
                      onClick={() => toggleAccordion(index)}
                      aria-controls={`accordion-content-${index}`}
                      aria-expanded={activeKey === index}
                    >
                      {activeKey === index ? (
                        <FaMinusSquare />
                      ) : (
                        <FaPlusSquare />
                      )}{" "}
                      {item.title}
                    </Button>
                  </Card.Header>
                  <Accordion.Collapse eventKey={index}>
                    <Card.Body
                      id={`accordion-content-${index}`}
                      data-aos="fade-right"
                    >
                      {item.text}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </Row>
        </Container>
      </section>
      <Whoweare />
      <Cta />
    </>
  );
};

export default DigitalMarketingAccordion;
