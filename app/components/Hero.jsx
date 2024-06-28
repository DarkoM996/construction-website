import React from "react";
import hero from "../images/hero.jpg";
import Image from "next/image";

// This will have a component structure similar to the React Traversy Crash Course 2024.. empty fragments filled with bunch of components
const Hero = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-[90%] relative px-6 py-4 ">
      {/* Image Container */}
      <div className=" w-full">
        <Image
          priority
          alt=""
          src={hero}
          height={400}
          width={400}
          className=" object-cover w-1/2 h-full bg-center"
        />
      </div>
      {/* Text Container */}
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-6 w-full h-1/3">
        {/* Heading */}
        <div className="w-full">
          <h1 className="text-5xl lg:text-7xl font-bold">
            Hotel Construction Amplified
          </h1>
        </div>
        {/* Text + Buttons */}
        <div className="flex flex-col justify-center items-center gap-4 lg:gap-6 w-full md:w-3/4">
          <p className="text-balance w-full md:w-3/4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            aliquid rerum beatae, non ea officia repellat architecto? Alias
            tenetur natus aspernatur earum quibusdam perspiciatis, est error
            minus eveniet beatae sunt.
          </p>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-start w-full gap-4">
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
