"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { images } from "./imageData";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative mx-auto w-full max-w-3xl overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={image.url}
              alt={image.alt}
              width={800}
              height={450}
              className="h-auto w-full cursor-pointer"
              onClick={() => handleClick(index)}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
