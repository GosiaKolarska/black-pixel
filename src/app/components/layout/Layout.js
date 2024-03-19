import Header from "./header/Header";
import Footer from "./footer/Footer";
import TestimonialSection from "../common/testimonial/TestimonialSection";
import CTA from "../common/CTA/CTA";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <TestimonialSection />
      <CTA />
      <Footer />
    </>
  );
};

export default Layout;
