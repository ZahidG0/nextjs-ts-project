"use client";
import Image from "next/image";
import React from "react";
import { MdOutlineSaveAlt } from "react-icons/md";
import { galleryImages } from "./gallery-data";
import { useSearch } from "../SearchProvider";

const Gallery: React.FC = () => {
  const { searchQuery } = useSearch();

  const filteredImages = galleryImages.filter((image) =>
    image.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <figure className="gallery-container p-6 bg-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredImages.map((image, index) => (
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
