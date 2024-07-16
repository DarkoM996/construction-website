import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-screen-3xl mx-auto w-full h-3/4 relative px-6 py-4">
      {/* CTA centered in the middle */}
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <Link
          href="/contact"
          className="text-5xl md:text-6xl lg:text-8xl items-center text-primary_lighterColor-200 hover:text-primary_customGrey-300"
        >
          Contact Us
        </Link>
      </div>
      {/* Bottom part section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-8 w-full h-fit">
        <p className="text-transform: uppercase">Privacy Policy</p>
        <p>@2024 CamYork</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <FaFacebook className="text-2xl" />
          <FaInstagram className="text-2xl" />
          <FaYoutube className="text-2xl" />
          <FaTwitter className="text-2xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
