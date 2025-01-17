import BackToProjects from "@/app/components/BackToProjects";
import CorporateBuildingAbout from "@/app/components/CorporateBuildingAbout";
import CorporateBuildingGrid from "@/app/components/CorporateBuildingGrid";
import CorporateHero from "@/app/components/CorporateHero";
import React from "react";

const page = () => {
  return (
    <>
      <CorporateHero />
      <CorporateBuildingAbout />
      <CorporateBuildingGrid />
      <BackToProjects />
    </>
  );
};

export default page;
