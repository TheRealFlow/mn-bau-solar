import React, { useState } from "react";
import Image from "next/image";
import { IMAGES } from "./utils";

const ImageCarousel = () => {
  const placeholderImages = IMAGES;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? placeholderImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === placeholderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto text-center my-6 mb-20">
      <div className="mx-auto max-w-4xl flex flex-col justify-center gap-6">
        <div className="overflow-x-auto scrollbar-hide">
          <div
            className="flex transition-transform ease-in-out duration-300"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {placeholderImages.map((imageUrl, index) => (
              <Image
                key={index}
                src={imageUrl}
                alt={`Image ${index}`}
                width={900}
                height={450}
                className="border rounded-lg"
              />
            ))}
          </div>
          <div>
            <span className="text-gray-700 text-sm">
              {currentImageIndex + 1} / {placeholderImages.length}
            </span>
          </div>
        </div>
        <div className="flex gap-10 justify-center">
          <button
            className="bg-orange-600 hover:bg-orange-700 opacity-90 text-white font-semibold px-4 py-2 rounded-l-lg mb-4 md:mb-0"
            onClick={handlePrev}
          >
            Zurück
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 opacity-90 text-white font-semibold px-4 py-2 rounded-r-lg mb-4 md:mb-0"
            onClick={handleNext}
          >
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
