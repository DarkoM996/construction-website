import React from "react";
import hero from "../images/hero.jpg";
import Image from "next/image";

// This will have a component structure similar to the React Traversy Crash Course 2024.. empty fragments filled with bunch of components
// In Next Js, there are 2 ways to get sections to get full screen without overlap: h-[1080px] aka custom value. And then in a div below, you can write h-full so it can take a full value of that number.
// Second way it works.. is by putting a min-h-screen class which is min-height: 100vh CSS property;
const Hero = () => {
  return (
    <main className="max-w-screen-3xl mx-auto w-full min-h-screen relative px-6 py-4">
      {/* Image Container */}
      <div className="relative h-fit ">
        <Image
          priority={true}
          src={hero}
          alt="hero image"
          // just experiment with different height of the image at different width sizes. The original h-[600px] can also work.
          className="w-full h-[400px] md:h-[600px] object-cover rounded-3xl bg-center"
        />
      </div>
      {/* Text */}
      <div className="h-full w-full flex flex-col justify-center items-center md:flex-row md:justify-between gap-4 py-5">
        <div className="w-full md:w-1/2 lg:w-full">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-wrap w-full lg:w-2/3 h-full">
            Hotel Construction Amplified
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 lg:gap-6 w-full md:w-1/2 lg:w-1/3 h-1/2  ">
          <p className="text-wrap w-full h-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            aliquid rerum beatae, non ea officia repellat architecto? Alias
            tenetur natus aspernatur earum quibusdam perspiciatis, est error
            minus eveniet beatae sunt.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row w-full gap-4">
            <button className="px-8 py-4 bg-white hover:bg-primary_lighterColor-200 text-black rounded-full border border-black w-full sm:w-[160px]">
              Get Started
            </button>
            <button className="px-8 py-4 bg-primary_backgroundColor-900 hover:bg-primary_backgroundColor-800 text-white rounded-full border border-white w-full  sm:w-[160px]">
              Projects
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
