"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";

import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./ArrowVertical";
import { PortfolioDataItem } from "../portfolioData";
import { PortfolioCard } from "../PortfolioCard";

type PortfolioCarouselVerticalProps = {
    projects: PortfolioDataItem[];
    options?: EmblaOptionsType;
};

export const PortfolioCarouselVertical: React.FC<
    PortfolioCarouselVerticalProps
> = props => {
    const { projects, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <section className="min-w-full">
            <div className="overflow-hidden -mx-4  h-296" ref={emblaRef}>
                <div className="embla__container flex flex-col gap-4  bg-white">
                    {projects.map(project => (
                        <div
                            className="embla__slide flex-[0_0_100%] "
                            key={project.id}
                        >
                            <PortfolioCard item={project} />
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
