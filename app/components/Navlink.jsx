"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UseActivePath from "./UseActivePath";
import { Router } from "next/router";

const Navlink = ({ link }) => {
  const pathName = usePathname();

  console.log(pathName);
  return (
    <Link
      href={link.url}
      className={
        pathName === link.url ? "bg-white text-black rounded-full p-2" : ""
      }
    >
      {link.title}
    </Link>
  );
};

export default Navlink;

// <Link
// className={`rounded-xl p-2 ${
//   pathName === link.url && "bg-white text-black"
// }`}
// href={link.url}
// >
// {link.title}
// </Link>
