import React from "react";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Service from "./sections/services/Service";
import Portfolio from "./sections/portfolioo/Portfolio";
import Testimonials from "./sections/testimonials/Testimonials";
import FAQs from "./sections/faqs/FAQs";
import Contact from "./sections/contacts/Contact";
import Footer from "./sections/footer/Footer";
import Floatingnav from "./sections/floating-nav/Floatingnav";

const PortfolioHome = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Service />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      {/* <Floatingnav /> */}
    </main>
  );
};

export default PortfolioHome;
