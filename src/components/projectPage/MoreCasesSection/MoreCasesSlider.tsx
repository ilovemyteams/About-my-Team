"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { PortfolioDataItemType } from "@/src/mockedData/portfolioData";

import { ProjectCard } from "../../shared/ProjectCard";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "../../shared/SliderComponents/CarouselButtons";
import { useDotButton } from "../../shared/SliderComponents/SliderDots";
import { SliderDotsBox } from "../../shared/SliderComponents/SliderDotsBox";

const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: "start",
    slidesToScroll: 1,
};

export const MoreCasesSlider = ({
    projects,
}: {
    projects: PortfolioDataItemType[];
}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <div className="relative embla min-w-full ">
            <div className=" overflow-hidden" ref={emblaRef}>
                <div className=" flex">
                    {projects.map(project => (
                        <div
                            key={project.data.id}
                            className="embla__slide flex-[0_0_100%] tab:flex-[0_0_50%] w-full"
                        >
                            <ProjectCard data={project} />
                        </div>
                    ))}
                </div>
                <div className="embla__controls  tab:absolute tab:-top-[80px] pc:-top-[112px] right-0 mt-[16px] tab:mt-0">
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
