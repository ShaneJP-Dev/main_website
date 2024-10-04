import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ServiceGrid = () => {
    <p>
        <a href="https://storyset.com/work"> Work illustrations by Storyset</a>
        <a href="https://storyset.com/business">Business illustrations by Storyset</a>
        <a href="https://storyset.com/online">Online illustrations by Storyset</a>
        <a href="https://storyset.com/work">Work illustrations by Storyset</a>
        <a href="https://storyset.com/data">Data illustrations by Storyset</a>
        <a href="https://storyset.com/technology">Technology illustrations by Storyset</a>
    </p>
    // Define an array of services, each containing an icon, title, and description.
    const services = [
        {
        icon: "/images/Developer activity-bro.png",
        title: "Web Development",
        description:
            "Take your business to the next level with our web design and development services",
        },
        {
        icon: "/images/Site Stats-amico.png",
        title: "Search Engine Optimization",
        description:
            "Get your website to the top of search engine results with our SEO services",
        },
        {
        icon: "/images/Ecommerce campaign-amico.png",
        title: "Ecommerce",
        description:
            "Boost your brand's online presence with our social media marketing services",
        },
        {
        icon: "/images/Prototyping process-cuate.png",
        title: "Mobile Development",
        description:
            "Interact with your customers and increase sales with our email marketing services",
        },
        {
        icon: "/images/Cloud hosting-amico.png",
        title: "Hosting",
        description:
            "With our content creation services, we help businesses drive results",
        },
        {
        icon: "/images/Code typing-cuate.png",
        title: "SaaS Development",
        description:
            "Don't waste money on ineffective advertising. Our PPC services help you reach your target audience",
        },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service) => (
                <Link
                key={service.title}
                href={`/services/${service.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`} // Dynamic route generation based on service title
                passHref
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md shadow-md"
                >
                {/* Anchor tag inside the Link to use href correctly */}
                <Image
                    src={service.icon}
                    width={200}
                    height={200}
                    className="object-contain bg-gray-100 p-4 w-full h-48 rounded-md"
                    alt={service.title}
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
                </Link>
            ))}
        </div>
    );
}

export default ServiceGrid