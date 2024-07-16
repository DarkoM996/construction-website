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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A temporibus
          ad nemo labore sed delectus fugiat laudantium culpa nulla rem mollitia
          nihil id aut cumque, corrupti, obcaecati doloremque soluta dolor?
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
