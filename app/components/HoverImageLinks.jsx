import React from "react";
import { FiArrowRight } from "react-icons/fi";

const HoverImageLinks = () => {
  return (
    <section className="max-w-screen-3xl h-[calc(100vh-24px)] mx-auto px-4 py-4 sm:px-8 sm:py-8">
      <div className="max-w-screen-3xl mx-auto h-full relative">
        <Link
          heading="Hotel Construction"
          subheading="Building an elite hotel in Ontario"
          imgSrc="../images/picture1.jpg"
          href="/hotelconstruction"
        />
        <Link
          heading="Roof Replacement"
          subheading="Building a roof in Ontario"
          imgSrc="../images/picture2.jpg"
          href="/hotelconstruction"
        />
        <Link
          heading="Carlton Hotel"
          subheading="Building an elite hotel in Vancouver"
          imgSrc="../images/picture3.jpg"
          href="/hotelconstruction"
        />
        <Link
          heading="Modern Building"
          subheading="Building a modern building in Ottawa"
          imgSrc="../images/picture4.jpg"
          href="/hotelconstruction"
        />
        <Link
          heading="Resident Building"
          subheading="Building a residence in Vancouver"
          imgSrc="../images/picture5.jpg"
          href="/hotelconstruction"
        />
        <Link
          heading="Hotel Elite"
          subheading="Building an elite hotel in Toronto"
          imgSrc="../images/picture6.jpg"
          href="/hotelconstruction"
        />
      </div>
    </section>
  );
};

export default HoverImageLinks;

const Link = ({ heading, subheading, imgSrc, href }) => {
  return (
    <a
      href={href}
      className="group relative flex justify-between items-center border-b border-primary_backgroundColor-700 py-4 transition-colors duration-500 hover:border-neutral-400 md:py-6"
    >
      {/* Link name and subheading */}
      <div className="flex flex-col">
        <span className="relative z-10 py-4 block text-4xl font-bold text-neutral-500 transition-colors duration-500 md:text-5xl group-hover:text-white">
          {heading}
        </span>
        <span className="relative z-0 block text-primary_lighterColor-500 transition-colors duration-500 group-hover:text-white">
          {subheading}
        </span>
      </div>
      {/* TODO: Add image here */}

      {/* Adding the arrow */}
      <div className="relative z-10 p-4">
        <FiArrowRight className="text-4xl text-primary_lighterColor-200" />
      </div>
    </a>
  );
};
