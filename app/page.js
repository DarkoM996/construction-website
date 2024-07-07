import Image from "next/image";
import Hero from "./components/Hero";
import HoverImageLinks from "./components/HoverImageLinks";
import Animation from "./components/Animation";

export default function Home() {
  return (
    <>
      <Hero />
      <HoverImageLinks />
      <Animation />
    </>
  );
}
