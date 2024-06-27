"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navlink from "./Navlink";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/projects", title: "Projects" },
    { url: "/contact", title: "Contact" },
  ];

  return (
    <div className="max-w-screen-3xl mx-auto w-full h-20 flex justify-between items-center px-6 py-4 border border-b border-primary_backgroundColor-700 ">
      {/* Left Side Logo */}
      <Link href="/" className="text-2xl text-transform: uppercase">
        CamYork
      </Link>
      {/* Responsive Menu on Desktop */}
      <div className="md:flex justify-center items-center gap-4 text-xl">
        {links.map((link) => (
          <Navlink link={link} key={link.title} />
        ))}
      </div>
      {/* Menu Button */}
      <div
        className="md:hidden w-10 h-5 flex flex-col justify-between items-center z-50 relative"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="w-10 h-1 bg-white rounded"></div>
        <div className="w-10 h-1 bg-white rounded"></div>
      </div>
      {/* Mobile Menu List */}
      {open && (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-8 text-6xl bg-primary_lighterColor-200 text-black ">
          {links.map((link) => (
            <Link href={link.url} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
