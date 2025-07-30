import Image from "next/image";
import React from "react";
import { MdOutlineSaveAlt } from "react-icons/md";

interface GalleryImage {
  src: string;
  name: string;
}

const galleryImages: GalleryImage[] = [
  { src: "https://api.iconify.design/logos/nextjs.svg", name: "Next.js" },
  { src: "https://api.iconify.design/logos/react.svg", name: "React" },
  {
    src: "https://api.iconify.design/logos/typescript-icon.svg",
    name: "TypeScript",
  },
  {
    src: "https://api.iconify.design/logos/tailwindcss-icon.svg",
    name: "Tailwind CSS",
  },
  { src: "https://api.iconify.design/logos/nodejs-icon.svg", name: "Node.js" },
  {
    src: "https://api.iconify.design/logos/javascript.svg",
    name: "JavaScript",
  },
  { src: "https://api.iconify.design/logos/html-5.svg", name: "HTML5" },
  { src: "https://api.iconify.design/logos/css-3.svg", name: "CSS3" },
  { src: "https://api.iconify.design/logos/git-icon.svg", name: "Git" },
  { src: "https://api.iconify.design/logos/github-icon.svg", name: "GitHub" },
  {
    src: "https://api.iconify.design/logos/visual-studio-code.svg",
    name: "VS Code",
  },
  { src: "https://api.iconify.design/logos/figma.svg", name: "Figma" },
  {
    src: "https://api.iconify.design/logos/storybook-icon.svg",
    name: "Storybook",
  },
  { src: "https://api.iconify.design/logos/jest.svg", name: "Jest" },
  { src: "https://api.iconify.design/logos/cypress-icon.svg", name: "Cypress" },
  { src: "https://api.iconify.design/logos/mongodb.svg", name: "MongoDB" },
  { src: "https://api.iconify.design/logos/mysql.svg", name: "MySQL" },
  {
    src: "https://api.iconify.design/logos/postgresql.svg",
    name: "PostgreSQL",
  },
  { src: "https://api.iconify.design/logos/redis.svg", name: "Redis" },
  { src: "https://api.iconify.design/logos/docker-icon.svg", name: "Docker" },
  {
    src: "https://api.iconify.design/logos/kubernetes.svg",
    name: "Kubernetes",
  },
  { src: "https://api.iconify.design/logos/aws.svg", name: "AWS" },
  {
    src: "https://api.iconify.design/logos/google-cloud.svg",
    name: "Google Cloud",
  },
  { src: "https://api.iconify.design/logos/azure.svg", name: "Azure" },
];

const Gallery: React.FC = () => {
  return (
    <figure className="gallery-container p-6 bg-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="bg-white hover:scale-103 transition-all duration-300 ease-in-out hover:shadow-lg pt-4 rounded-lg shadow-md"
          >
            <Image
              src={image.src}
              alt={image.name}
              width={192}
              height={192}
              className="w-full h-48 object-contain rounded-md mb-2"
            />
            <div className="flex flex-row justify-center bg-amber-200 items-center ">
              <h3 className="text-lg p-8 font-semibold text-center">
                {image.name}
              </h3>
              <p>
                <span className="text-3xl text-black p-2 rounded-full">
                  <MdOutlineSaveAlt />
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
};

export default Gallery;
