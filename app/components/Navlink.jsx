"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ link }) => {
  const pathName = usePathname();

  console.log(pathName);
  return (
    <Link
      className={`rounded-xl p-2 ${
        pathName === link.url && "bg-white text-black"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default Navlink;
