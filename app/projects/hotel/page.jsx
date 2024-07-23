import React from "react";
import BackToProjects from "@/app/components/BackToProjects";
import HeroContact from "@/app/components/HeroContact";
import AboutHotel from "@/app/components/AboutHotel";
import GridHotel from "@/app/components/GridHotel";

const page = () => {
  return (
    <>
      <HeroContact />
      <AboutHotel />
      <GridHotel />
      <BackToProjects />
    </>
  );
};

export default page;
