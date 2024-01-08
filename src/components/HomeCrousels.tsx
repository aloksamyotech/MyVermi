"use client"
import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    <div key={0} className="carousel-item bg-blue-500 p-8">
      <h1 className="text-white">Slide 1</h1>
    </div>,
    <div key={1} className="carousel-item bg-green-500 p-8">
      <h1 className="text-white">Slide 2</h1>
    </div>,
    <div key={2} className="carousel-item bg-yellow-500 p-8">
      <h1 className="text-white">Slide 3</h1>
    </div>,
  ];

  const updateCarousel = () => {
    const translateValue = -currentIndex * 100 + '%';
    setTransformStyle({ transform: `translateX(${translateValue})` });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const [transformStyle, setTransformStyle] = useState({});

  useEffect(() => {
    updateCarousel();
  }, [currentIndex]);

  return (
    <div className="relative">
      <div className="carousel" style={transformStyle}>
        {items}
      </div>

      <button className="carousel-button left-0" onClick={prevSlide}>
        Previous
      </button>
      <button className="carousel-button right-0" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
