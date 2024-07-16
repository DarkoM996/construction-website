import Image from "next/image";
import React from "react";
import gridimg from "../../public/images/picture13.jpg";
import gridimg2 from "../../public/images/picture14.jpg";

const AboutValue = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full min-h-screen relative px-6 py-4 md:py-10 lg:py-24">
      {/* Grid #1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-16">
        {/* Paragraph */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl">Area Of Expertise</h2>
        {/* Image */}
        <div className="relative grid grid-cols-1 gap-6 h-full">
          {/* Paragraph */}
          <div className="py-4 place-content-end">
            <p>
              In the area of construction and design, we are focusing our energy
              towards taking on challenging projects. Our company ethos is
              driven by thinking outside the box. Pairing together
              unconventional and thought provoking design ideas and bringing
              them to life in order to build better projects, enhance client
              value and drive new opportunities.
            </p>
          </div>
          <Image
            src={gridimg}
            alt="grid image"
            className="object-cover w-full h-[500px] rounded-3xl"
          />
        </div>
      </div>
      {/* Grid #2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 py-8 md:py-12 lg:py-16">
        {/* Paragraph */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl">Area Of Expertise</h2>
        {/* Image */}
        <div className="relative h-full">
          {/* Paragraph */}
          <div className="py-4 col-span-1 place-content-end">
            <p>
              We provide construction management for residential, commercial and
              hospitality applications. We may also act as development managers
              for individuals looking to build a unique project.
            </p>
          </div>
          <Image
            src={gridimg2}
            alt="grid image"
            className="object-cover w-full h-[500px] rounded-3xl"
          />
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
