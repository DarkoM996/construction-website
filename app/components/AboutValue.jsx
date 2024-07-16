import Image from "next/image";
import React from "react";
import gridimg from "../../public/images/picture13.jpg";

const AboutValue = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-full relative px-6 py-4 md:py-10 lg:py-24">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16">
        {/* Paragraph */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl">Area Of Expertise</h2>
        {/* Image */}
        <div className="relative h-full">
          <Image
            src={gridimg}
            alt="grid image"
            className="object-cover w-full h-[500px] rounded-3xl"
          />
          {/* Paragraph */}
          <div className="py-4 col-span-1 place-content-end">
            <p>
              In the area of construction and design, we are focusing our energy
              towards taking on challenging projects. Our company ethos is
              driven by thinking outside the box. Pairing together
              unconventional and thought provoking design ideas and bringing
              them to life in order to build better projects, enhance client
              value and drive new opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutValue;

//

// We provide construction management for residential, commercial and hospitality applications. We may also act as development managers for individuals looking to build a unique project.

{
  /* <p>
  We provide construction management for residential, commercial and hospitality
  applications. We may also act as development managers for individuals looking
  to build a unique project.
</p>; */
}
