"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Router } from "next/router";

const Navlink = ({ link }) => {
  const pathName = usePathname();

  console.log(pathName);
  return (
    <Link
      className={
        Router.pathname === link.url || Router.pathname === `${link.url}/[slug]`
          ? "{`bg-white p-2 text-black rounded-full`}"
          : ""
      }
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default Navlink;
