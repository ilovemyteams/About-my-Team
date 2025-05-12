"use client";
import { EmblaOptionsType } from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

import { PortfolioDataItemType } from "@/src/mockedData/portfolioData";

import { ProjectCard } from "../../shared/ProjectCard";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "../../shared/SliderComponents/CarouselButtons";
import { useDotButton } from "../../shared/SliderComponents/SliderDots";
import { SliderDotsBox } from "../../shared/SliderComponents/SliderDotsBox";

type PortfolioCarouselProps = {
    projects: PortfolioDataItemType[];
    options?: EmblaOptionsType;
};

export const PortfolioCarousel: React.FC<PortfolioCarouselProps> = props => {
    const { projects, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: true, speed: 1 }),
    ]);
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

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
                            className="embla__slide flex-[0_0_100%] tab:flex-[0_0_40%] w-full px-[5px] pc:px-2 desk:px-[10px]"
                        >
                            <ProjectCard
                                data={project}
                                seeCaseButton={false}
                                main
                            />
                        </div>
                    ))}
                </div>
                <div className="embla__controls  tab:hidden right-0 mt-[16px] ">
                    <div className="embla__buttons flex justify-center gap-4">
                        <PrevButton
                            onClick={onPrevButtonClick}
                            disabled={prevBtnDisabled}
                        />
                        <SliderDotsBox
                            scrollSnaps={scrollSnaps}
                            selectedIndex={selectedIndex}
                            sliders={projects}
                            onDotButtonClick={onDotButtonClick}
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
