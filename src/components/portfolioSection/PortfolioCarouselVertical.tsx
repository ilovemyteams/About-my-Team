"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";

import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./ArrowVertical";

type PropType = {
    slides: number[];
    options?: EmblaOptionsType;
};

const PortfolioCarouselVertical: React.FC<PropType> = props => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <section className="min-w-full">
            <div className="overflow-hidden -mx-4" ref={emblaRef}>
                <div className="embla__container h-96 backface-hidden flex flex-col gap-4  bg-white">
                    {slides.map(index => (
                        <div
                            className="embla__slide flex-[0_0_100%] "
                            key={index}
                        >
                            <div className="embla__slide__number">
                                {index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>
            </div>
        </section>
    );
};

export default PortfolioCarouselVertical;
