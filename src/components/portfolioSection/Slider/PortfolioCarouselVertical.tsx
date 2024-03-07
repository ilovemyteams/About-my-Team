"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";

import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./CarouselButtons";
import { PortfolioCard } from "../PortfolioCard";
import { PortfolioDataItemType } from "../portfolioData";

type PortfolioCarouselVerticalProps = {
    projects: PortfolioDataItemType[];
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
        <section className="min-w-full ">
            <div className="overflow-hidden h-[784px] bg-white" ref={emblaRef}>
                <div className="embla__container flex flex-col h-96 -mt-4">
                    {projects.map(project => (
                        <div
                            className="embla__slide flex-[0_0_50%] pt-4 w-full"
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
