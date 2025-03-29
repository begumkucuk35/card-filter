import React from "react";
import ReactLogo from "../assets/images/react.svg";

const Navbar = () => {
  return (
    <header className="w-full px-5 sm:px-10 md:px-20 py-5 bg-[#2E82D01A]">
      <nav className="flex w-full justify-between items-center">
        <img src={ReactLogo} alt="Logo" width={48} height={48} />
        <button className="h-fit bg-[#2E82D0] px-12 md:py-2 py-1  font-bold text-sm text-white rounded-md hover:shadow-lg hover:shadow-[#2E82D0]/25">
          Login
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
