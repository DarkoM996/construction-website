import React from "react";
import Image from "next/image";
import gridimg2 from "../../public/images/picture3.jpg";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full min-h-screen relative px-8 py-4 md:py-12">
      {/* Grid */}
      <div className="max-w-screen-3xl mx-auto w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
        {/* Grid element #1 */}
        {/* Project #1 */}
        <div className="flex flex-col justify-center items-center gap-4 md:mb-72">
          <Link href="/projects/furnico" className="relative w-full h-full">
            <Image
              priority={true}
              src={gridimg2}
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
        {/* Grid element #2 */}
        <div className="flex flex-col justify-center items-center gap-4">
          <Link
            href="/projects/furnico"
            className="relative w-full h-[520px] md:h-[720px]"
          >
            <Image
              priority={true}
              src={gridimg2}
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
        {/* Grid element #3 */}
        <div className="flex flex-col justify-center items-center gap-4 md:mb-10">
          <Link
            href="/projects/furnico"
            className="relative w-full h-[520px] md:h-[1200px]"
          >
            <Image
              priority={true}
              src={gridimg2}
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
        {/* Grid element #4 */}
        <div className="flex flex-col justify-center items-center gap-4 md:mb-40">
          <Link href="/projects/furnico" className="relative w-full h-fit">
            <Image
              priority={true}
              src={gridimg2}
              alt="picture1"
              className="w-full h-[520px] md:h-[720px] object-cover rounded-3xl hover:scale-90  duration-500 transition-transform"
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
