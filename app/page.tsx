// This is a client-side component, meaning it will be rendered on the client's browser.
"use client";

// Import necessary dependencies from React and Next.js.
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";
import HamburgerMenu from "@/components/hamburgermenu";
import BoxReveal from "@/components/ui/box-reveal";
import ShimmerButton from "@/components/ui/shimmer-button";

// Define the Home component, which is the main entry point for the application.
export default function Home() {
  // Initialize a state variable to track whether the menu is open or not.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define a function to toggle the menu open or closed.
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Define a function to close the menu.
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Return the JSX for the Home component.
  return (
    // Create a container element with a gradient background.
    <div className="overflow-clip inset-0 -z-10 h-full w-screen bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      {/* Create a sticky element that will remain at the top of the page. */}
      <Element
        name="top"
        className="overflow-visible rounded-[6px] top-5 sticky md:mx-auto z-50 
        xl:w-4/5 2xl:w-[68%] bg-white flex items-center 
        py-6 px-4 md:px-8 mx-6"
      >
        {/* Create a link to the homepage with the logo. */}
        <Link href={"/"}>
          <Image src={"/logo/logo.png"} alt="Logo" width={280} height={280} />
        </Link>

        {/* Create a container for the navigation links. */}
        <div className="flex items-center justify-end w-full">
          {/* Create a container for the desktop navigation links. */}
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            {/* Create a link to the showcase page. */}
            <Link href={"/showcase"} className="hover:text-blue-500">
              Showcase
            </Link>
            {/* Create a link to the services section. */}
            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-blue-500"
            >
              Services
            </ScrollLink>
            {/* Create a link to the process section. */}
            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-blue-500"
            >
              Process
            </ScrollLink>
            {/* Create a link to the pricing page. */}
            <Link href={"/pricing"} className="hover:text-blue-500">
              Pricing
            </Link>
          </div>

          {/* Create a container for the contact button. */}
          <div className="hidden md:flex ml-10">
            {/* Create a link to the contact page with a button. */}
            <Link href={"/contact"}>
              <button className="p-1 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-orange-500 rounded-lg" />
                <div className="w-32 px-4 py-1 bg-black rounded-lg relative group transition duration-200 text-white hover:bg-transparent text-center">
                  Contact
                </div>
              </button>
            </Link>
          </div>

          {/* Create a container for the mobile navigation menu. */}
          <div className="md:hidden">
            {/* Create a hamburger menu that toggles the mobile menu open or closed. */}
            <HamburgerMenu onClick={toggleMenu} isOpen={isMenuOpen} />
          </div>
        </div>
      </Element>

      <main className="md:pd-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xlw-[68%] md:mx-auto mt-14">
        <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
        <BoxReveal boxColor={"#5046e6"} duration={0.9}>
          <p className="text-[3.5rem] font-semibold">
            Your Dream<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>
   
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="mt-[.5rem] text-[1rem]">
            Is About to Come{" "}
            <span className="text-[#5046e6]">TRUE</span>
          </h2>
        </BoxReveal>
   
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-6">
            <p>
              -&gt; 20+ free and open-source animated components built with
              <span className="font-semibold text-[#5046e6]"> React</span>,
              <span className="font-semibold text-[#5046e6]"> Typescript</span>,
              <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
              and
              <span className="font-semibold text-[#5046e6]"> Framer Motion</span>
              . <br />
              -&gt; 100% open-source, and customizable. <br />
            </p>
          </div>
        </BoxReveal>
   
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          {/* Add Link components */}
          <ShimmerButton className="shadow-2xl mt-10">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Shimmer Button
            </span>
          </ShimmerButton>
        </BoxReveal>
      </div>
        </div>

      </main>

      {/* Create the mobile menu that appears when the hamburger menu is clicked. */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full pt-20">
            {/* Create a link to the showcase page. */}
            <Link
              href={"/showcase"}
              className="py-4 text-xl text-gray-700 hover:text-blue-500"
              onClick={closeMenu}
            >
              Showcase
            </Link>
            {/* Create a link to the services section. */}
            <ScrollLink
              to="services"
              smooth={true}
              className="py-4 text-xl text-gray-700 hover:text-blue-500"
              onClick={closeMenu}
            >
              Services
            </ScrollLink>
            {/* Create a link to the process section. */}
            <ScrollLink
              to="process"
              smooth={true}
              className="py-4 text-xl text-gray-700 hover:text-blue-500"
              onClick={closeMenu}
            >
              Process
            </ScrollLink>
            {/* Create a link to the pricing page. */}
            <Link
              href={"/pricing"}
              className="py-4 text-xl text-gray-700 hover:text-blue-500"
              onClick={closeMenu}
            >
              Pricing
            </Link>
            {/* Create a link to the contact page with a button. */}
            <Link href={"/contact"}>
              <button className="p-1 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-orange-500 rounded-lg" />
                <div className="w-32 px-4 py-1 bg-black rounded-lg relative group transition duration-200 text-white hover:bg-transparent text-center">
                  Contact
                </div>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
