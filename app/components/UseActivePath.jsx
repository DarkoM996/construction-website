import React from "react";
import { usePathname } from "next/navigation";

const UseActivePath = () => {
  const pathname = usePathname();

  if (path === "/" && pathname !== path) {
    return false;
  }
  return pathname.startsWith(path);
};

export default UseActivePath;
