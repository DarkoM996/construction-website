"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navlink from "./Navlink";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  // Animating the menu icon that I made with Tailwind.. here is how to do it with Framer Motion

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(0,0,0)",
    },
  };

  const middleVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },

    opened: {
      rotate: -45,
      backgroundColor: "rgb(0,0,0)",
    },
  };

  const listVariants = {
    closed: {
      // Original was set to 100vh.. I switched to 50 for now
      x: "50vw",
    },

    opened: {
      x: 0,
      transition: {
        // This before Children is the original animation but after viewing it now.. without this, it seems way more smooth like
        // when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
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
            className="md:hidden w-10 h-8 flex flex-col justify-between items-center z-50 relative"
            onClick={() => setOpen((prev) => !prev)}
          >
            {/* the animate part works with conditionals. if it's open, use the opened variants.. else use the other variable. */}
            <motion.div
              variants={topVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-white rounded origin-left"
            ></motion.div>
            <motion.div
              variants={middleVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-white rounded"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-white rounded origin-left"
            ></motion.div>
          </div>
          {/* Mobile Menu List */}
          {/* Z index added so the menu can stay above the hero image */}
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-8 text-6xl bg-primary_lighterColor-200 text-black z-40"
            >
              {/* Adding a div with motion tag so this can be animated here. List item variants will be defined futher above */}
              {links.map((link) => (
                <motion.div
                  variants={listItemVariants}
                  className=""
                  key={link.title}
                >
                  <Link href={link.url}>{link.title}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
