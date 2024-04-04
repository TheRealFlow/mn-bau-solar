import React, { useState } from "react";
import { IMAGES } from "./utils";
import { FiZoomIn } from "react-icons/fi";

export default function ImageCarousel() {
  const placeholderImages = IMAGES;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  const handleImageClick = (index) => {
    setFullScreenImage(index);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <div className="container mx-auto text-center my-6 mb-20">
      <div className="mx-auto max-w-4xl flex flex-col justify-center gap-6 relative">
        <div className="overflow-x-scroll md:overflow-x-hidden snap-x snap-mandatory">
          <div
            className="flex transition-transform ease-in-out duration-300"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {placeholderImages.map((imageUrl, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 cursor-pointer hover:brightness-90 transition-brightness duration-300 snap-start"
                onClick={() => handleImageClick(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={imageUrl}
                  alt={`Image ${index}`}
                  className="block w-full md:w-[80%] h-full max-h-96 object-fit ratio-16-9 rounded-md mx-auto "
                />
                {hoveredIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FiZoomIn className="text-white text-3xl" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <span className="text-gray-700 text-sm">
            {currentImageIndex + 1} / {placeholderImages.length}
          </span>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between pointer-events-none">
          <button
            className="bg-orange-600 bg-opacity-80 text-white font-semibold px-2 py-4 rounded-md pointer-events-auto hidden md:block"
            onClick={handlePrev}
          >
            Zurück
          </button>
          <button
            className="bg-green-600 bg-opacity-80 text-white font-semibold px-2 py-4 rounded-md pointer-events-auto hidden md:block"
            onClick={handleNext}
          >
            Weiter
          </button>
        </div>
        {fullScreenImage !== null && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50">
            <img
              src={placeholderImages[fullScreenImage]}
              alt={`Image ${fullScreenImage}`}
              className="max-w-[90%] max-h-[90%] object-contain rounded-md cursor-pointer"
              onClick={handleCloseFullScreen}
            />
            <button
              className="absolute top-4 right-4 bg-orange-600 bg-opacity-80 text-white font-semibold px-4 py-2 rounded-full"
              onClick={handleCloseFullScreen}
            >
              Schließen
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
