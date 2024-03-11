"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { useLocale } from "next-intl";
import { PortfolioCard } from "../PortfolioCard";
import { NextButton, PrevButton, usePrevNextButtons } from "./CarouselButtons";
import { PortfolioDataItemType } from "../portfolioData";

type PortfolioCarouselProps = {
    projects: PortfolioDataItemType[];
    options?: EmblaOptionsType;
};
type Locale = "uk" | "en" | "pl";

export const PortfolioCarousel: React.FC<PortfolioCarouselProps> = props => {
    const { projects, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const locale = useLocale();

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
                            key={project.data.id}
                            className="embla__slide flex-[0_0_50%] w-full"
                        >
                            <PortfolioCard
                                data={project.data}
                                localizationData={project[locale as Locale]}
                            />
                        </div>
                    ))}
                </div>
                <div className="embla__controls absolute -top-24 right-0 ">
                    <div className="embla__buttons flex gap-6">
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
