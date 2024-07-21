import React from "react";
import ContactForm from "../components/ContactForm";
import ContactHero from "../components/ContactHero";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <ContactForm />
      <Footer />
    </>
  );
};

export default page;
