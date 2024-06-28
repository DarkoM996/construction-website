import React from "react";
import hero from "../images/hero.jpg";
import Image from "next/image";

// This will have a component structure similar to the React Traversy Crash Course 2024.. empty fragments filled with bunch of components
const Hero = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-[90%] relative px-6 py-4 ">
      {/* Image Container */}
      <div className="relative w-full h-[70%] object-cover">
        <Image
          priority
          alt=""
          src={hero}
          height={800}
          width={800}
          className=" object-cover w-full h-full bg-center rounded-2xl"
        />
      </div>
      {/* Text Container */}
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-6 w-full h-1/3">
        {/* Heading */}
        <div className="w-full">
          <h1 className="text-5xl lg:text-7xl font-bold">
            Hotel Construction <br /> Amplified
          </h1>
        </div>
        {/* Text + Buttons */}
        <div className="flex flex-col justify-end items-center gap-4 lg:gap-6 w-full md:w-1/2">
          <p className="text-balance w-full ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            aliquid rerum beatae, non ea officia repellat architecto? Alias
            tenetur natus aspernatur earum quibusdam perspiciatis, est error
            minus eveniet beatae sunt.
          </p>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-start items-start w-full gap-4">
            <button className="px-8 py-4 bg-white text-black rounded-full border border-black">
              Button 1
            </button>
            <button className="px-8 py-4 bg-primary_backgroundColor-900 text-white rounded-full border border-white">
              Button 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
