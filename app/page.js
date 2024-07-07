import Image from "next/image";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HoverImageLinks from "./components/HoverImageLinks";

export default function Home() {
  return (
    <>
      <Hero />
      <HoverImageLinks />
      <AboutSection />
      <Footer />
    </>
  );
}
