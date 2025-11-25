import React from "react";
import Header from "./header/Header";
import CustomerSection from "./main/sections/customer/CustomerSection";
import ProfessionalSection from "./main/sections/professional/ProfessionalSection";
import Reason from "./main/sections/reason/Reason";
import Footer from "./footer/Footer";


const Component = () => {
  return (
    <>
      <Header />
      <CustomerSection />
      <ProfessionalSection />
      {/* <Testimonial /> */}
      <Reason />
      <Footer />
    </>
  );
};

export default Component;
