"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";
import HamburgerMenu from "@/components/hamburgermenu";
import BoxReveal from "@/components/ui/box-reveal";
import ShimmerButton from "@/components/ui/shimmer-button";
import FlipText from "@/components/ui/flip-text";
import WordPullUp from "@/components/ui/word-pull-up";
import ContactForm from "@/components/contactform";
import ProjectShowcase from "@/components/projectcard";
import ServiceGrid from "@/demos/servicegrid";
import WhoAreWe from "@/demos/whoarewe";
import Footer from "@/components/footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      {/* Sticky Header */}
      <Element name="top" className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo/logo.png" alt="Logo" width={140} height={140} />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/showcase"
              className="text-gray-700 hover:text-blue-500"
            >
              Showcase
            </Link>
            <ScrollLink
              to="services"
              smooth={true}
              className="text-gray-700 hover:text-blue-500 cursor-pointer"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="process"
              smooth={true}
              className="text-gray-700 hover:text-blue-500 cursor-pointer"
            >
              Process
            </ScrollLink>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-500">
              Pricing
            </Link>
            <Link href="/contact">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Contact
              </button>
            </Link>
          </nav>
          <div className="md:hidden">
            <HamburgerMenu onClick={toggleMenu} isOpen={isMenuOpen} />
          </div>
        </div>
      </Element>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-20">
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <BoxReveal boxColor={"#5046e6"} duration={0.9}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
                Your Dream<span className="text-[#5046e6]">.</span>
              </h1>
            </BoxReveal>
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <h2 className="mt-2 text-xl md:text-2xl">
                Is About to Come <span className="text-[#5046e6]">TRUE</span>
              </h2>
            </BoxReveal>
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <div className="mt-6 text-sm md:text-base">
                <p>
                  -&gt; 20+ free and open-source animated components built with
                  <span className="font-semibold text-[#5046e6]"> React</span>,
                  <span className="font-semibold text-[#5046e6]">
                    {" "}
                    Typescript
                  </span>
                  ,
                  <span className="font-semibold text-[#5046e6]">
                    {" "}
                    Tailwind CSS
                  </span>
                  , and{" "}
                  <span className="font-semibold text-[#5046e6]">
                    {" "}
                    Framer Motion
                  </span>
                  .
                  <br />
                  -&gt; 100% open-source, and customizable. <br />
                </p>
              </div>
            </BoxReveal>
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <ShimmerButton className="shadow-2xl mt-8">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Shimmer Button
                </span>
              </ShimmerButton>
            </BoxReveal>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/images/Innovation-amico.png"
              alt="Home image"
              width={500}
              height={500}
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>

        {/* FlipText Services */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {["Development", "Ecommerce", "Hosting", "SEO"].map((word) => (
            <FlipText
              key={word}
              word={word}
              className="text-xl md:text-2xl transition duration-200 ease-in-out transform hover:scale-105"
            />
          ))}
        </div>

        {/* Services Section */}
        <Element name="services" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-4">
            <WordPullUp words="Building dreams from the ground up" />
          </h2>
          <p className="text-center text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            All of our services are designed to help your business stand out
          </p>
          <ServiceGrid />
        </Element>

        {/* Why Choose Us Section */}
        <div className="mb-20 ">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-4">
            <WordPullUp words="Why Choose Us?" />
          </h2>
          <p className="text-center text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            We are a team of professionals dedicated to bringing your ideas to
            life.
          </p>
          <WhoAreWe />
        </div>

        {/* Project Showcase */}
        <div className="mb-20">
          <ProjectShowcase />
        </div>

        {/* Contact Form */}
        <div className="mb-20">
          <div className="bg-gray-100 p-8 rounded-md shadow-md flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <ContactForm />
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <Image
                src="/images/Site Stats-amico.png"
                width={400}
                height={400}
                alt="Illustration"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <Link
              href="/showcase"
              className="text-xl text-gray-700 hover:text-blue-500"
              onClick={closeMenu}
            >
              Showcase
            </Link>
            <ScrollLink
              to="services"
              smooth={true}
              className="text-xl text-gray-700 hover:text-blue-500 cursor-pointer"
              onClick={closeMenu}
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="process"
              smooth={true}
              className="text-xl text-gray-700 hover:text-blue-500 cursor-pointer"
              onClick={closeMenu}
            >
              Process
            </ScrollLink>
            <Link
              href="/pricing"
              className="text-xl text-gray-700 hover:text-blue-500"
              onClick={closeMenu}
            >
              Pricing
            </Link>
            <Link href="/contact" onClick={closeMenu}>
              <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300">
                Contact
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
