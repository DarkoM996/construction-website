import Image from "next/image";
import Hero from "./components/Hero";
import HoverImageLinks from "./components/HoverImageLinks";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <HoverImageLinks />
      <Projects />
    </>
  );
}
