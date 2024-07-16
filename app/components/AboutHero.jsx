import Image from "next/image";
import React from "react";
import backgroundimg from "../../public/images/picture12.jpg";

const AboutHero = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full min-h-screen relative px-6 py-4">
      {/* Container Setup with flex */}
      <div className="flex flex-col justify-center items-start w-full h-full gap-6 md:gap-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl py-4">Studio</h1>
        {/* Image Container */}
        <div className="relative w-full h-[500px] lg:h-[700px]">
          <Image
            priority={true}
            height={500}
            width={1000}
            src={backgroundimg}
            alt="/"
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
        {/* Paragraph talking about who the company is */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl w-full lg:w-3/4">
          We are an experienced team of construction professionals, and
          designers operating within Canada, with a combined 24 years of
          industry experience.
        </h2>
      </div>
    </div>
  );
};

export default AboutHero;
