import React, { useEffect, useState } from 'react';
import image1 from '../assets/images/Banners/image104.jpg';
import image2 from '../assets/images/Banners/image105.jpg';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [image1, image2];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Automatically change the slide every 3 seconds
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentSlide]); // Re-run the effect when currentSlide changes

  return (
    <div className="relative">
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="w-full" />
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white bg-gray-800 p-3 rounded-full transition transform hover:scale-110 focus:outline-none"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-10 transform -translate-y-1/2 text-white bg-gray-800 p-3 rounded-full transition transform hover:scale-110 focus:outline-none"
      >
        &gt;
      </button>
    </div>
  );
};

export default Banner;
