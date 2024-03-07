"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";

import { PortfolioDataItem } from "../portfolioData";
import { PortfolioCard } from "../PortfolioCard";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "../../portfolioSection/Slider/ArrowVertical";

type PortfolioCarouselProps = {
    projects: PortfolioDataItem[];
    options?: EmblaOptionsType;
};

export const PortfolioCarousel: React.FC<PortfolioCarouselProps> = props => {
    const { projects, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <div className="relative embla min-w-full">
            <div className=" overflow-hidden" ref={emblaRef}>
                <div className=" flex">
                    {projects.map(project => (
                        <div
                            key={project.id}
                            className="embla__slide flex-[0_0_50%] w-full"
                        >
                            <PortfolioCard item={project} />
                        </div>
                    ))}
                </div>
                <div className="embla__controls absolute -top-24 right-0">
                    <div className="embla__buttons flex gap-3">
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
            </div>
        </div>
    );
};
