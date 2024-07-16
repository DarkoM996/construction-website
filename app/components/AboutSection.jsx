import Image from "next/image";
import React from "react";
import picture2 from "../../public/images/picture11.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowDownRight,
  FiArrowRight,
  FiArrowRightCircle,
} from "react-icons/fi";

const AboutSection = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-fit relative px-6 py-4 md:py-16 lg:py-24">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  md:gap-12 py-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl col-span-1 md:col-span-2">
          About Us
        </h2>
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
          <h4 className="text-wrap text-2xl md:text-3xl text-primary_customGrey-100">
            We are an experienced team of construction professionals, and
            designers operating within Canada, with a combined 24 years of
            industry experience.
          </h4>
          <div className="gap-2 flex flex-row justify-start items-center">
            <Link
              href="/contact"
              className="text-2xl text-primary_customGrey-100 hover:underline"
            >
              See More
            </Link>
            <FiArrowRight className="text-3xl" />
          </div>
        </div>
        <div className="relative h-full col-span-2 md:col-span-3">
          <Image
            src={picture2}
            alt="/"
            className="w-full h-[600px] object-cover rounded-3xl bg-center"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
