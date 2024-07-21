import React from "react";
import ContactForm from "../components/ContactForm";
import ContactHero from "../components/ContactHero";
import ContactSection from "../components/ContactSection";

const page = () => {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <ContactForm />
    </>
  );
};

export default page;
