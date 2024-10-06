"use client";

import React, { useState, useEffect } from "react";
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
import Footer from "@/components/footer";
import NavBar from "@/components/ui/navbar";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div className="min-h-screen bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      {/* Improved Navigation */}
      <div
        className={`fixed w-full transition-all duration-300 ease-in-out ${
          visible ? "top-0" : "-top-full"
        } z-50`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <NavBar />
          <div className="md:hidden mt-4">
            <HamburgerMenu onClick={toggleMenu} isOpen={isMenuOpen} />
          </div>
        </div>
      </div>

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
              <ShimmerButton className="shadow-md">
                <span className="px-4 py-2 text-sm font-medium text-white">
                  Contact Us
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-20">
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <BoxReveal boxColor={"#5046e6"} duration={0.9}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
                Your Dream<span className="text-[#5046e6]">.</span>
              </h1>
            </BoxReveal>
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <h1 className="mt-2 text-xl md:text-2xl">
                Is About to Come <span className="text-[#5046e6]">TRUE</span>
              </h1>
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
            <Link href={"/contact"}>
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <ShimmerButton className="shadow-2xl mt-8">
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Contact Us
                  </span>
                </ShimmerButton>
              </BoxReveal>
            </Link>
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
        <div className="flex flex-wrap justify-evenly gap-6 mb-20">
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
          <h1 className="text-3xl md:text-4xl font-medium text-center mb-4">
            <WordPullUp words="Building dreams from the ground up" />
          </h1>
          <p className="text-center text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            All of our services are designed to help your business stand out
          </p>
          <ServiceGrid />
        </Element>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <h1 className="text-3xl md:text-4xl font-medium text-center mb-4">
            <WordPullUp words="Why Choose Us?" />
          </h1>
          <p className="text-center text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            We are a team of professionals dedicated to bringing your ideas to
            life.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
              className=""
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Gippity AI powers the entire universe
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  With over 100,000 mothly active bot users, Gippity AI is the
                  most popular AI platform for developers.
                </p>
              </div>
              <Image
                src="/linear.webp"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
              <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                No shirt, no shoes, no weapons.
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                If someone yells “stop!”, goes limp, or taps out, the fight is
                over.
              </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
              <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Signup for blazing-fast cutting-edge state of the art Gippity
                  AI wrapper today!
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                  With over 100,000 mothly active bot users, Gippity AI is the
                  most popular AI platform for developers.
                </p>
              </div>
              <Image
                src="/linear.webp"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
              />
            </WobbleCard>
          </div>
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
    </div>
  );
}
