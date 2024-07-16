import Image from "next/image";
import React from "react";
import gridimg from "../../public/images/picture13.jpg";

const AboutValue = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-full relative px-6 py-4">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Paragraph */}
        <p>
          In the area of construction and design, we are focusing our energy
          towards taking on challenging projects. Our company ethos is driven by
          thinking outside the box. Pairing together unconventional and thought
          provoking design ideas and bringing them to life in order to build
          better projects, enhance client value and drive new opportunities.
        </p>
        {/* Image */}
        <div className="relative h-[500px]">
          <Image
            src={gridimg}
            alt="grid image"
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutValue;

//

// We provide construction management for residential, commercial and hospitality applications. We may also act as development managers for individuals looking to build a unique project.
