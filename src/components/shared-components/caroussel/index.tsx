"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import DynamicButton from "../Buttons/dynamicButton";
import Card from "../card";

interface CustomCarouselProps {
  slides: {
    id?: number;
    src?: string;
    title?: string;
    description?: string;
  }[];
}

const CustomCarousel = ({ slides }: CustomCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [translateX, settranslateX] = useState(100);

  const slidesToShow = 3;
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length, isDragging]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startX === null) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      } else {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
      }
      setStartX(null);
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (startX === null || !isDragging) return;
    const currentX = e.clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      } else {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
      }
      setStartX(null);
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setStartX(null);
    setIsDragging(false);
  };

  return (
    <div
      className="relative w-full overflow-hidden  select-none"
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Reset on mouse leave
    >
      <div
        className="flex gap-4 transition-transform duration-500 ease-out py-20"
        style={{
          transform: `translateX(-${
            (currentIndex * translateX) / slidesToShow
          }%)`,
        }}
      >
        {slides.concat(slides.slice(0, slidesToShow)).map((slide, index) => (
          <div
            key={index}
            // min-w-[calc(100%/3)]
            className="min-w-[300] bg-white p-2 rounded-2xl shadow-lg"
          >
            <Card
              description={slide?.description}
              image={slide?.src}
              textColor="text-[#f26822]"
              padding="px-1 py-1"
              button="Learn more"
            />
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
              currentIndex === index
                ? "bg-orange-100 scale-125"
                : "bg-black-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
