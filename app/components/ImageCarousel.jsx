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
    <div className="container mx-auto text-center my-4">
      <div className="mx-auto max-w-4xl flex gap-6">
        <button
          className=" bg-gray-200 px-4 py-2 rounded-l-lg"
          onClick={handlePrev}
        >
          Prev
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform ease-in-out duration-300"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {placeholderImages.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Placeholder Image ${index}`}
                className="w-full"
              />
            ))}
          </div>
        </div>
        <button
          className=" bg-gray-200 px-4 py-2 rounded-r-lg"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
