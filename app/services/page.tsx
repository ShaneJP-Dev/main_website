"use client";

import React, { useState } from "react";
import { ArrowRightCircle, PhoneCall } from "lucide-react";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import Footer from "@/components/footer";
import HamburgerMenu from "@/components/hamburgermenu";
import GradualSpacing from "@/components/ui/gradual-spacing";

interface Service {
  title: string;
  description: string;
  image: string;
  learnMoreLink: string;
}

const services: Service[] = [
  {
    title: "E-commerce",
    description:
      "Build and scale your online store with our cutting-edge e-commerce solutions.",
    image: "/images/Ecommerce campaign-amico.png",
    learnMoreLink: "/services/ecommerce",
  },
  {
    title: "Hosting",
    description:
      "Reliable and secure hosting services to keep your website running smoothly 24/7.",
    image: "/images/Cloud hosting-amico.png",
    learnMoreLink: "/services/hosting",
  },
  {
    title: "Mobile Development",
    description:
      "Create powerful, user-friendly mobile apps for iOS and Android platforms.",
    image: "/images/Prototyping process-cuate.png",
    learnMoreLink: "/services/mobile-development",
  },
  {
    title: "SaaS Development",
    description:
      "Develop scalable and efficient Software as a Service solutions for your business.",
    image: "/images/Code typing-cuate.png",
    learnMoreLink: "/services/saas-development",
  },
  {
    title: "SEO",
    description:
      "Boost your online presence and drive organic traffic with our SEO expertise.",
    image: "/images/Site Stats-amico.png",
    learnMoreLink: "/services/search-engine-optimization",
  },
  {
    title: "Web Development",
    description:
      "Custom web development services to bring your digital vision to life.",
    image: "/images/Developer activity-bro.png",
    learnMoreLink: "/services/web-development",
  },
];

interface ServiceCardProps extends Service {
  isEven: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  learnMoreLink,
  isEven,
}) => (
  <div className={`py-16 ${isEven ? "bg-gray-50" : "bg-white"}`}>
    <div
      className={`container mx-auto px-4 flex flex-col md:flex-row items-center justify-between ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/2 p-6">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="mb-6 text-gray-600">{description}</p>
        <div className="flex space-x-4">
          <a
            href={learnMoreLink}
            className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
          >
            Learn More <ArrowRightCircle className="ml-2" size={20} />
          </a>
          <a
            href="/contact"
            className="flex items-center text-green-600 hover:text-green-800 font-semibold"
          >
            Contact Now <PhoneCall className="ml-2" size={20} />
          </a>
        </div>
      </div>
      <div className="md:w-1/2 p-6">
        <Image
          src={image}
          alt={title}
          width={800}
          height={200}
          
        />
      </div>
    </div>
  </div>
);

const ServicesPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Navbar />
          <div className="md:hidden mt-4">
            <HamburgerMenu onClick={toggleMenu} isOpen={isMenuOpen} />
          </div>
        </div>
      </header>

      <main className="flex-grow">
          <div className="container mx-auto px-4 m-5">
          <GradualSpacing
            className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
            text="Our Services"
          />
          <GradualSpacing
              className="font-display text-center text-base font-medium text-gray-400 md:text-xl md:leading-relaxed max-w-3xl "
              text="All of our services are designed to help your business stand out"
          />
        </div>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            {...service}
            isEven={index % 2 === 0}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
