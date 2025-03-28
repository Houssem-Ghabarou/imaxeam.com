import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import DynamicButton from "../Buttons/dynamicButton";

interface CustomCarouselProps {
  slides: {
    id?: number;
    src?: string;
    title?: string;
    description?: string;
    button?: string;
    textColor?: string;
  }[];
  perview?: number;
}
const animation = { duration: 20000, easing: (t: number) => t };

export default function CustomCarousel({
  slides,
  perview,
}: CustomCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [loaded, setLoaded] = useState(false);

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: false, // Ensure looping is disabled
    mode: "free",
    slides: {
      perView: perview || 4,
      spacing: 15,
    },
    created(s) {
      setLoaded(true);
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  return (
    <div className="w-full">
      <div ref={ref} className="keen-slider relative">
        {slides.map((slide) => (
          <div key={slide.id} className="keen-slider__slide rounded-lg ">
            <img
              src={slide.src}
              alt={slide.description}
              className="w-full h-60 object-cover" // Adjusted size for the image
            />
            <a className="absolute  right-1 bottom-5  flex justify-center items-center">
              <DynamicButton
                text="Learn more"
                bgColor="transparant "
                borderColor="white"
                fontSize="text-sm"
              />
            </a>
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <div className="flex justify-center mt-4 space-x-2">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx); // Navigate to the clicked dot's slide
                }}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === idx
                    ? "bg-black-200"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}
