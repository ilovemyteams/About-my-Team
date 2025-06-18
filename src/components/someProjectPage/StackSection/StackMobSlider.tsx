"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { Technology } from "@/src/mockedData/portfolioData";

import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "../../shared/SliderComponents/CarouselButtons";
import { useDotButton } from "../../shared/SliderComponents/SliderDots";
import { SliderDotsBox } from "../../shared/SliderComponents/SliderDotsBox";
import { OneSlideStack, STACKS_PER_SLIDE } from "./OneSlideStack";

const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: "start",
    slidesToScroll: 1,
};

export const StackMobSlider = ({
    technologies,
}: {
    technologies: Technology[];
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
    const technologiesAmount = technologies.length;

    return (
        <div className="relative embla min-w-full ">
            <div className=" overflow-hidden" ref={emblaRef}>
                <ul className="flex gap-0">
                    <OneSlideStack technologies={technologies} />
                </ul>
            </div>
            {technologiesAmount > STACKS_PER_SLIDE && (
                <div className="embla__controls  tab:absolute tab:-top-[80px] pc:-top-[112px] right-0 mt-[16px] tab:mt-0">
                    <div className="embla__buttons flex justify-center gap-4">
                        <PrevButton
                            onClick={onPrevButtonClick}
                            disabled={prevBtnDisabled}
                        />
                        <SliderDotsBox
                            scrollSnaps={scrollSnaps}
                            selectedIndex={selectedIndex}
                            sliders={technologies}
                            onDotButtonClick={onDotButtonClick}
                        />
                        <NextButton
                            onClick={onNextButtonClick}
                            disabled={nextBtnDisabled}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
