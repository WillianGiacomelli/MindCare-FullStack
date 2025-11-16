import React from "react";
import CustomerSection from "./sections/customer/CustomerSection";
import ProfessionalSection from "./sections/professional/ProfessionalSection";
import Testimonial from "./sections/testimonial/Testimonial";
import Reason from "./sections/reason/Reason";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <>
      <CustomerSection />
      <ProfessionalSection />
      {/* <Testimonial /> */}
      <Reason />
      <Footer />
    </>
  );
};

export default Main;
