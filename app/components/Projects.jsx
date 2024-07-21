import React from "react";
import Image from "next/image";
import gridimg1 from "../../public/images/picture2.jpg";
import gridimg2 from "../../public/images/picture3.jpg";
import gridimg3 from "../../public/images/picture4.jpg";
import gridimg4 from "../../public/images/picture5.jpg";
import gridimg5 from "../../public/images/picture6.jpg";
import gridimg6 from "../../public/images/picture7.jpg";
import gridimg7 from "../../public/images/picture8.jpg";
import gridimg8 from "../../public/images/picture10.jpg";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full min-h-screen relative px-8 py-4 md:py-12 md:px-12 lg:px-28">
      {/* Grid */}
      {/* grid-cols-[40%_60%] --> a way of writing grid in Tailwind that gives unique results */}
      <div className="max-w-screen-3xl mx-auto h-full grid grid-flow-cols-dense grid-flow-row-dense lg:grid-cols-6 gap-6">
        {/* Grid element #1 */}
        {/* Project #1 */}
        <div className="flex flex-col justify-center items-center gap-4 md:col-span-2">
          <Link href="/projects/hotel" className="relative w-full h-[420px]">
            <Image
              priority={true}
              src={gridimg1}
              alt="picture1"
              className="w-full h-full object-cover rounded-3xl hover:scale-90  duration-500 transition-transform"
            />
          </Link>
          <div className="flex flex-col justify-center items-center p-4 gap-2">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
              Furnico
            </h4>
            <p className="text-xl font-light text-primary_customGray-700">
              Ecommerce Full Stack Web App
            </p>
          </div>
        </div>
        {/* Project #2 */}
        <div className="flex flex-col justify-center items-center gap-4 md:col-span-4">
          <Link
            href="/projects/luxurybuilding"
            className="relative w-full h-[420px]"
          >
            <Image
              priority={true}
              src={gridimg2}
              alt="picture1"
              className="w-full h-full object-cover rounded-3xl hover:scale-90  duration-500 transition-transform"
            />
          </Link>
          <div className="flex flex-col justify-center items-center p-4 gap-2 ">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
              Furnico
            </h4>
            <p className="text-xl font-light text-primary_customGray-700">
              Ecommerce Full Stack Web App
            </p>
          </div>
        </div>
        {/* Project #3 */}
        <div className="flex flex-col justify-center items-center gap-4 md:col-span-4">
          <Link
            href="/projects/luxuryhome"
            className="relative w-full h-[420px]"
          >
            <Image
              priority={true}
              src={gridimg3}
              alt="picture1"
              className="w-full h-full object-cover rounded-3xl hover:scale-90  duration-500 transition-transform"
            />
          </Link>
          <div className="flex flex-col justify-center items-center p-4 gap-2">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
              Furnico
            </h4>
            <p className="text-xl font-light text-primary_customGray-700">
              Ecommerce Full Stack Web App
            </p>
          </div>
        </div>
        {/* Project #4 */}
        <div className="flex flex-col justify-center items-center gap-4 md:col-span-2">
          <Link
            href="/projects/corporatebuilding"
            className="relative w-full h-[420px]"
          >
            <Image
              priority={true}
              src={gridimg4}
              alt="picture1"
              className="w-full h-full object-cover rounded-3xl hover:scale-90  duration-500 transition-transform"
            />
          </Link>
          <div className="flex flex-col justify-center items-center p-4 gap-2">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
              Furnico
            </h4>
            <p className="text-xl font-light text-primary_customGray-700">
              Ecommerce Full Stack Web App
            </p>
          </div>
        </div>
        {/* Project #5 */}
        <div className="flex flex-col justify-center items-center gap-4 md:col-span-2">
          <Link href="/projects/furnico" className="relative w-full h-[420px]">
            <Image
              priority={true}
              src={gridimg5}
              alt="picture1"
              className="w-full h-full object-cover rounded-3xl hover:scale-90  duration-500 transition-transform"
            />
          </Link>
          <div className="flex flex-col justify-center items-center p-4 gap-2">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
              Furnico
            </h4>
            <p className="text-xl font-light text-primary_customGray-700">
              Ecommerce Full Stack Web App
            </p>
          </div>
        </div>
        {/* Project #6 */}
        <div className="flex flex-col justify-center items-center gap-4 md:col-span-4 ">
          <Link href="/projects/furnico" className="relative w-full h-[420px]">
            <Image
              priority={true}
              src={gridimg6}
              alt="picture1"
              className="w-full h-full object-cover rounded-3xl hover:scale-90  duration-500 transition-transform"
            />
          </Link>
          <div className="flex flex-col justify-center items-center p-4 gap-2">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
              Furnico
            </h4>
            <p className="text-xl font-light text-primary_customGray-700">
              Ecommerce Full Stack Web App
            </p>
          </div>
        </div>
        {/* Project #7 */}
        <div className="flex flex-col justify-center items-center gap-4 md:col-span-4">
          <Link href="/projects/furnico" className="relative w-full h-[420px]">
            <Image
              priority={true}
              src={gridimg7}
              alt="picture1"
              className="w-full h-full object-cover rounded-3xl hover:scale-90  duration-500 transition-transform"
            />
          </Link>
          <div className="flex flex-col justify-center items-center p-4 gap-2">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
              Furnico
            </h4>
            <p className="text-xl font-light text-primary_customGray-700">
              Ecommerce Full Stack Web App
            </p>
          </div>
        </div>
        {/* Project #8 */}
        <div className="flex flex-col justify-center items-center gap-4 md:col-span-2">
          <Link href="/projects/furnico" className="relative w-full h-[420px]">
            <Image
              priority={true}
              src={gridimg8}
              alt="picture8"
              className="w-full h-full object-cover rounded-3xl hover:scale-90  duration-500 transition-transform"
            />
          </Link>
          <div className="flex flex-col justify-center items-center p-4 gap-2">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
              Furnico
            </h4>
            <p className="text-xl font-light text-primary_customGray-700">
              Ecommerce Full Stack Web App
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
