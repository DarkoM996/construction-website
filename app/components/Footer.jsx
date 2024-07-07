import React from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="max-w-screen-3xl mx-auto w-full h-[80%] relative">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <h2 className="text-5xl md:text-6xl lg:text-8xl items-center">
          Contact Us
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-6 py-4 w-full h-fit">
        <p className="text-transform: uppercase">Privacy Policy</p>
        <p>@2024 CamYork</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <FiInstagram className="text-2xl" />
          <FiFacebook className="text-2xl" />
          <FiYoutube className="text-2xl" />
          <FiTwitter className="text-2xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
