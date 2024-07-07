import React from "react";
import Image from "next/image";
import picture1 from "../../public/images/picture1.jpg";
import picture2 from "../../public/images/picture2.jpg";
import picture3 from "../../public/images/picture3.jpg";
import picture4 from "../../public/images/picture4.jpg";
import picture5 from "../../public/images/picture5.jpg";
import picture6 from "../../public/images/picture6.jpg";
import picture7 from "../../public/images/picture7.jpg";

const logos = [
  { src: picture1, alt: "Facebook" },
  { src: picture2, alt: "Disney" },
  { src: picture3, alt: "Airbnb" },
  { src: picture4, alt: "Apple" },
  { src: picture5, alt: "Spark" },
  { src: picture6, alt: "Samsung" },
  { src: picture7, alt: "Quora" },
];

const Animation = () => {
  return (
    <div className="max-w-screen-3xl mx-auto h-screen relative px-6 py-4">
      <h2 className="text-4xl md:text-5xl lg:text-6xl py-12">
        Project Showcase
      </h2>
      <div className="w-full h-2/3 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-[600px]  [&_img]:rounded-3xl animate-infinite-scroll rounded-3xl ">
          {logos.map((logo, index) => (
            <li key={index}>
              <Image src={logo.src} alt={logo.alt} />
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-[600px] [&_img]:rounded-3xl  animate-infinite-scroll rounded-3xl"
          aria-hidden="true"
        >
          {logos.map((logo, index) => (
            <li key={index}>
              <Image src={logo.src} alt={logo.alt} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Animation;
