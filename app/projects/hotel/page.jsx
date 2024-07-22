import Image from "next/image";
import React from "react";
import backgroundimage from "../../../public/images/picture2.jpg";
import hotelimage from "../../../public/images/hotel image 1.jpg";
import hotelimage2 from "../../../public/images/hotel image 2.jpg";
import hotelimage3 from "../../../public/images/hotel image 3.jpg";
import hotelimage4 from "../../../public/images/hotel image 4.jpg";
import hotelimage5 from "../../../public/images/hotel image 6.jpg";
import BackToProjects from "@/app/components/BackToProjects";

// NOTE: Because of the retarded way that Next.Js imports components, I keep getting a non existant error for this image that won't allow me to keep the established model by having an empty fragment filled with components. So now I will do the entire page here in one page unfortunately.

const page = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-full relative px-6 py-4 md:px-12 md:py-10 lg:px-28">
      {/* Grid for the entire section */}
      <div className="grid grid-cols-1 gap-6 md:gap-10 lg:gap-16 text-wrap">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-8xl py-6 md:py-12">
          Premium Building
        </h1>
        {/* Pictures grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-10">
          {/* Grid within a grid */}
          <div className="relative w-full h-[300px] md:h-[400px] md:col-span-4 ">
            <Image
              src={backgroundimage}
              alt="background image"
              priority
              width={600}
              height={600}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="relative w-full h-[300px] md:h-[400px] md:col-span-6">
            <Image
              src={backgroundimage}
              alt="background image"
              priority
              width={600}
              height={600}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
      {/* Section #2 */}
      <div className="flex flex-col lg:flex-row justify-between items-start py-8 gap-6 lg:gap-24 lg:py-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl w-full lg:w-2/3">
          We recently led the development of Building X, a premium building that
          we made for a client in Vancouver, Canada. This was made by the latest
          standards, with emphaphis on ultra high quality and well within the
          appropriate time.
        </h2>
        <div className="w-full sm:w-1/2 lg:w-1/2">
          {/* First item */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-xl border-b border-primary_customGrey-800 py-4 w-full">
            <div>Directors</div>
            <div>Ma Yansong, Yosuke Hayano, Dang Qun</div>
          </div>
          {/* Second item */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-xl border-b border-primary_customGrey-800 py-4 w-full">
            <div>Client</div>
            <div>Harbin Songbei Investment </div>
          </div>
          {/* Third item */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-xl border-b border-primary_customGrey-800 py-4 w-full">
            <div>Address</div>
            <div>Vancouver Beach 125 Str. </div>
          </div>
          {/* Fourth item */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-xl border-b border-primary_customGrey-800 py-4 w-full">
            <div>Bim</div>
            <div>Genry Technologies Co.Ltd</div>
          </div>
          {/* Fifth item */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-xl border-b border-primary_customGrey-800 py-4 w-full">
            <div>Landscape Architect</div>
            <div>Vancouver Institute </div>
          </div>
          {/* Sixth item */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-xl border-b border-primary_customGrey-800 py-4 w-full">
            <div>Interior Design</div>
            <div>Vancouver Architects </div>
          </div>
          {/* Seventh item */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-xl border-b border-primary_customGrey-800 py-4 w-full">
            <div>Mechanical Engineers </div>
            <div>Vancouver Era Architectural Design, Ltd </div>
          </div>
        </div>
      </div>
      {/* Section 3.. a grid of images */}
      <div className="grid grid-cols-1 gap-10 py-12 md:py-16 lg:py-32">
        <div className="relative w-full h-[600px]">
          <Image
            priority
            src={hotelimage}
            alt="hotel image"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="relative w-full h-[600px]">
          <Image
            priority
            src={hotelimage2}
            alt="hotel image"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="relative w-full h-[600px]">
          <Image
            priority
            src={hotelimage3}
            alt="hotel image"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="relative w-full h-[600px]">
          <Image
            priority
            src={hotelimage4}
            alt="hotel image"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="relative w-full h-[600px]">
          <Image
            priority
            src={hotelimage5}
            alt="hotel image"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      {/* Section */}
      <div className="w-full h-screen">
        <BackToProjects />
      </div>
    </section>
  );
};

export default page;
