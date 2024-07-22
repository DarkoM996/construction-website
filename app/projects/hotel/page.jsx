import Image from "next/image";
import React from "react";
import backgroundimage from "../../../public/images/picture2.jpg";
import hotelimage from "../../../public/images/hotel image 1.jpg";
import hotelimage2 from "../../../public/images/hotel image 2.jpg";
import hotelimage3 from "../../../public/images/hotel image 3.jpg";
import hotelimage4 from "../../../public/images/hotel image 4.jpg";
import hotelimage5 from "../../../public/images/hotel image 6.jpg";
import BackToProjects from "@/app/components/BackToProjects";
import HeroContact from "@/app/components/HeroContact";
import AboutHotel from "@/app/components/AboutHotel";
import GridHotel from "@/app/components/GridHotel";

// NOTE: Because of the retarded way that Next.Js imports components, I keep getting a non existant error for this image that won't allow me to keep the established model by having an empty fragment filled with components. So now I will do the entire page here in one page unfortunately.

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
