import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
    id: number;
    name: string;
    image: string;
    link: string;
    description: string;
  }

const projects = [
  { id: 1, name: "Heymans Kole", image: "/images/heymans-kole.jpg", link: "/projects/heymans-kole", description: "Reliability & Service Excellence" },
  { id: 2, name: "Your Style Bathrooms", image: "/images/your-style-bathrooms.jpg", link: "/projects/your-style-bathrooms", description: "Your style matters" },
  { id: 3, name: "Inkserv", image: "/images/inkserv.jpg", link: "/projects/inkserv", description: "Welcome to Inkserv" },
  { id: 1, name: "Heymans Kole", image: "/images/heymans-kole.jpg", link: "/projects/heymans-kole", description: "Reliability & Service Excellence" },
  { id: 2, name: "Your Style Bathrooms", image: "/images/your-style-bathrooms.jpg", link: "/projects/your-style-bathrooms", description: "Your style matters" },
  { id: 3, name: "Inkserv", image: "/images/inkserv.jpg", link: "/projects/inkserv", description: "Welcome to Inkserv" },
  { id: 1, name: "Heymans Kole", image: "/images/heymans-kole.jpg", link: "/projects/heymans-kole", description: "Reliability & Service Excellence" },
  { id: 2, name: "Your Style Bathrooms", image: "/images/your-style-bathrooms.jpg", link: "/projects/your-style-bathrooms", description: "Your style matters" },
  { id: 3, name: "Inkserv", image: "/images/inkserv.jpg", link: "/projects/inkserv", description: "Welcome to Inkserv" },
  // Add more projects here...
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <Link href={project.link} className="block overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
    <div className="relative h-48">
      <Image
        src={project.image}
        alt={project.name}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="bg-white p-4">
      <h3 className="text-lg font-semibold">{project.name}</h3>
      <p className="text-sm text-gray-600">{project.description}</p>
    </div>
  </Link>
);

const ProjectShowcase = () => {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <h2 className="mb-6 text-5xl font-bold text-center">
        <span className="text-gray-800">Web Design Projects</span>
        <span className="text-blue-500">.</span>
      </h2>
      <p className="mb-8 text-xl text-center text-gray-600">
        A few of our featured and latest
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
          Complete Portfolio
        </button>
        <button className="bg-orange-100 text-black px-6 py-2 rounded-full hover:bg-orange-200 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ProjectShowcase;