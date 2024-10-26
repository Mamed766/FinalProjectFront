"use client";
import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

type SlideType = { src: string; id: number };

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scrollProgress, setScrollProgress] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll(emblaApi);
    emblaApi
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map(({ src, id }) => (
            <div className="embla__slide" key={id}>
              <img
                src={src}
                alt={`Slide ${id}`}
                className="embla__slide__img"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__progress">
          <div
            className="embla__progress__bar"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
