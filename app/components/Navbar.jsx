"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navlink from "./Navlink";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 35,
      backgroundColor: "rgb(0,0,0)",
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },

    opened: {
      rotate: -41,
      backgroundColor: "rgb(0,0,0)",
    },
  };

  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/projects", title: "Projects" },
    { url: "/contact", title: "Contact" },
  ];

  return (
    // Regular navbar is wrapped basically in two divs with a classname for border
    <div className="border-b border-primary_backgroundColor-700">
      <div className="max-w-screen-3xl mx-auto w-full h-20 flex justify-between items-center px-6 py-4 ">
        {/* Left Side Logo */}
        <Link
          href="/"
          // Written so to remove warning in console
          as={false}
          className="text-2xl text-transform: uppercase"
        >
          CamYork
        </Link>
        {/* Responsive Menu on Desktop */}
        <div className="hidden md:flex justify-center items-center gap-4 text-xl">
          {links.map((link) => (
            <Navlink link={link} key={link.title} />
          ))}
        </div>
        {/* Menu Button */}
        {/* another div with class md:hidden that automatically makes mobile menu disappear on bigger screens */}
        <div className="md:hidden">
          <div
            className="md:hidden w-10 h-4 flex flex-col justify-between items-center z-50 relative"
            onClick={() => setOpen((prev) => !prev)}
          >
            {/* the animate part works with conditionals. if it's open, use the opened variants.. else use the other variable. */}
            <motion.div
              variants={topVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-white rounded origin-left"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-white rounded origin-center"
            ></motion.div>
          </div>
          {/* Mobile Menu List */}
          {/* Z index added so the menu can stay above the hero image */}
          {open && (
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-8 text-6xl bg-primary_lighterColor-200 text-black z-40">
              {links.map((link) => (
                <Link href={link.url} key={link.title}>
                  {link.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
