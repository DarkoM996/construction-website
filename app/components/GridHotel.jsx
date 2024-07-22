import React from "react";
import Image from "next/image";
import backgroundimage from "../../public/images/picture2.jpg";
import hotelimage from "../../public/images/hotel image 1.jpg";
import hotelimage2 from "../../public/images/hotel image 2.jpg";
import hotelimage3 from "../../public/images/hotel image 3.jpg";
import hotelimage4 from "../../public/images/hotel image 4.jpg";
import hotelimage5 from "../../public/images/hotel image 6.jpg";

const GridHotel = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-full relative px-6 py-4 md:px-12 md:py-10 lg:px-28">
      {/* Section 3.. a grid of images */}
      <div className="grid grid-cols-1 gap-10 py-12 md:py-16 lg:py-32">
        <div className="relative w-full h-[600px]">
          <Image
            priority
            src={hotelimage}
            alt="hotel image"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="relative w-full h-[600px]">
          <Image
            priority
            src={hotelimage2}
            alt="hotel image"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="relative w-full h-[600px]">
          <Image
            priority
            src={hotelimage3}
            alt="hotel image"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="relative w-full h-[600px]">
          <Image
            priority
            src={hotelimage4}
            alt="hotel image"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="relative w-full h-[600px]">
          <Image
            priority
            src={hotelimage5}
            alt="hotel image"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default GridHotel;
