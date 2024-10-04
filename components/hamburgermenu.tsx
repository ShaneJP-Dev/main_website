"use client";

import { FC } from "react";

interface HamburgerMenuProps {
  onClick: () => void; // Define onClick as a function with no parameters that returns void
  isOpen: boolean; // Define isOpen as a boolean
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={2} 
        stroke="currentColor" 
        className="w-8 h-8"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
  );
};

export default HamburgerMenu;