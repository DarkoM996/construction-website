import Image from "next/image";
import React from "react";
import backgroundimg from "../../public/images/picture6.jpg";

const AboutHero = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full min-h-screen relative px-6 py-4">
      {/* Container Setup with flex */}
      <h1>Studio</h1>
      {/* Image Container */}
      <div className="relative h-[500px]">
        <Image
          priority={true}
          src={backgroundimg}
          alt="/"
          className="object-cover w-full h-full"
        />
      </div>
      {/* Paragraph talking about who the company is */}
      <h2>
        We are an experienced team of construction professionals, and designers
        operating within Canada, with a combined 24 years of industry
        experience.
      </h2>
    </div>
  );
};

export default AboutHero;
