import React, { useState } from "react";

const ImageCarousel = () => {
  const placeholderImages = [
    "https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Image+1",
    "https://via.placeholder.com/800x400/3498DB/FFFFFF?text=Image+2",
    "https://via.placeholder.com/800x400/2ECC71/FFFFFF?text=Image+3",
    "https://via.placeholder.com/800x400/9B59B6/FFFFFF?text=Image+4",
    "https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Image+5",
    "https://via.placeholder.com/800x400/3498DB/FFFFFF?text=Image+6",
    "https://via.placeholder.com/800x400/2ECC71/FFFFFF?text=Image+7",
    "https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Image+8",
    "https://via.placeholder.com/800x400/3498DB/FFFFFF?text=Image+9",
    "https://via.placeholder.com/800x400/2ECC71/FFFFFF?text=Image+10",
  ];

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
      <div className="mx-auto max-w-4xl flex flex-col md:flex-row justify-center gap-6">
        <button
          className="hidden md:block bg-gray-200 px-4 py-2 rounded-l-lg mb-4 md:mb-0"
          onClick={handlePrev}
        >
          Zurück
        </button>

        <div className="overflow-hidden w-full md:w-3/5">
          <div
            className="flex transition-transform ease-in-out duration-300"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {placeholderImages.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Placeholder Image ${index}`}
                className="w-full h-auto"
              />
            ))}
          </div>
        </div>
        <div className="flex gap-10 justify-center">
          <button
            className="md:hidden bg-gray-200 px-4 py-2 rounded-l-lg mb-4 md:mb-0"
            onClick={handlePrev}
          >
            Zurück
          </button>
          <button
            className="bg-gray-200 px-4 py-2 rounded-r-lg mb-4 md:mb-0"
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
