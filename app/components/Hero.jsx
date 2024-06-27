import React from "react";

// This will have a component structure similar to the React Traversy Crash Course 2024.. empty fragments filled with bunch of components
const Hero = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-[90%] relative px-6 py-4 ">
      {/* This div below is how this grid background is created */}
      <div className="absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#1f1e1e_1px,transparent_1px),linear-gradient(to_bottom,#1f1e1e_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-6xl lg:text-8xl font-bold text-balance text-center">
          Hotel Construction Amplified
        </h1>
        <p className="text-balance text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum hic
          eligendi dignissimos sit obcaecati eius ipsam.
        </p>
        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center w-full gap-4">
          <button className="px-8 py-4 bg-white text-black rounded-full border border-black">
            Button 1
          </button>
          <button className="px-8 py-4 bg-black text-white rounded-full border border-white">
            Button 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
