import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Card from "../card";
import { useRouter } from "next/navigation";
type SlideType = {
  minheight?: string;
  shadow?: string;
  icon?: string;
  iconHeight?: number;
  iconWidth?: number;
  title?: string;
  subtitle?: string;
  textColor?: string;
  button?: string;
  onClick?: () => void;
  description?: string;
  src?: string;
  index?: number;
  link?: string;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const router = useRouter();
  const navigateToPath = (Path: string) => {
    router.push(Path);
  };

  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla ">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((cardProps, index) => {
            return (
              <div className="embla__slide" key={index}>
                <Card
                  {...cardProps}
                  onClick={() => {
                    if (cardProps?.onClick) {
                      cardProps?.onClick();
                    } else if (cardProps?.link) {
                      navigateToPath(cardProps?.link);
                    }
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
