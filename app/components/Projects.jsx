import React from "react";
import Image from "next/image";
import gridimg2 from "../../public/images/picture3.jpg";

const Projects = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full min-h-screen px-6 py-4 md:py-12 lg:py-28">
      <h2 className="text-4xl md:text-5xl lg:text-6xl py-6">
        Selected Projects
      </h2>
      {/* Grid */}
      <div className="max-w-screen-2xl mx-auto w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Grid element */}
        <div>
          <div className="py-4 col-span-1 place-content-end">
            <p>
              We provide construction management for residential, commercial and
              hospitality applications. Utilizing our expertise, knowledge and
              experience in the appropriate ways so we can achieve true
              excellence. We may also act as development managers for
              individuals looking to build a unique project.
            </p>
          </div>
          <Image
            src={gridimg2}
            alt="grid image"
            className="object-cover w-full h-[500px] rounded-3xl"
          />
        </div>
        <div>
          <div className="py-4 col-span-1 place-content-end">
            <p>
              We provide construction management for residential, commercial and
              hospitality applications. Utilizing our expertise, knowledge and
              experience in the appropriate ways so we can achieve true
              excellence. We may also act as development managers for
              individuals looking to build a unique project.
            </p>
          </div>
          <Image
            src={gridimg2}
            alt="grid image"
            className="object-cover w-full h-[500px] rounded-3xl"
          />
        </div>
        <div>
          <div className="py-4 col-span-1 place-content-end">
            <p>
              We provide construction management for residential, commercial and
              hospitality applications. Utilizing our expertise, knowledge and
              experience in the appropriate ways so we can achieve true
              excellence. We may also act as development managers for
              individuals looking to build a unique project.
            </p>
          </div>
          <Image
            src={gridimg2}
            alt="grid image"
            className="object-cover w-full h-[500px] rounded-3xl"
          />
        </div>
        <div>
          <div className="py-4 col-span-1 place-content-end">
            <p>
              We provide construction management for residential, commercial and
              hospitality applications. Utilizing our expertise, knowledge and
              experience in the appropriate ways so we can achieve true
              excellence. We may also act as development managers for
              individuals looking to build a unique project.
            </p>
          </div>
          <Image
            src={gridimg2}
            alt="grid image"
            className="object-cover w-full h-[500px] rounded-3xl"
          />
        </div>
        <div>
          <div className="py-4 col-span-1 place-content-end">
            <p>
              We provide construction management for residential, commercial and
              hospitality applications. Utilizing our expertise, knowledge and
              experience in the appropriate ways so we can achieve true
              excellence. We may also act as development managers for
              individuals looking to build a unique project.
            </p>
          </div>
          <Image
            src={gridimg2}
            alt="grid image"
            className="object-cover w-full h-[500px] rounded-3xl"
          />
        </div>
        <div>
          <div className="py-4 col-span-1 place-content-end">
            <p>
              We provide construction management for residential, commercial and
              hospitality applications. Utilizing our expertise, knowledge and
              experience in the appropriate ways so we can achieve true
              excellence. We may also act as development managers for
              individuals looking to build a unique project.
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

export default Projects;
