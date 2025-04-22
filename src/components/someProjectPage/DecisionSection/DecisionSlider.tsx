"use client";
import { EmblaOptionsType } from "embla-carousel";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import React, { useState } from "react";

import { SliderType } from "@/src/mockedData/portfolioData";

import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "../../shared/SliderComponents/CarouselButtons";
import { useDotButton } from "../../shared/SliderComponents/SliderDots";
import { SliderNumbersBox } from "../../shared/SliderComponents/SliderNumbersBox";
import { DecisionCard } from "./DecisionCard";

type DecisionSliderProps = {
    decisions: SliderType[];
    options?: EmblaOptionsType;
};

export const DecisionSlider: React.FC<DecisionSliderProps> = props => {
    const { decisions, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);
    const [direction, setDirection] = useState<{
        dir: "up" | "down" | "hideUp" | "hideDown";
        key: number;
    } | null>(null);

    const handlePrev = () => {
        setDirection({ dir: "hideUp", key: Date.now() });
        setTimeout(() => {
            onPrevButtonClick();
            setDirection({ dir: "up", key: Date.now() });
        }, 700);
    };

    const handleNext = () => {
        setDirection({ dir: "hideUp", key: Date.now() });
        setTimeout(() => {
            onNextButtonClick();
            setDirection({ dir: "up", key: Date.now() });
        }, 700);
    };

    const handleDotClick = (i: number) => {
        setDirection({ dir: "hideUp", key: Date.now() });
        setTimeout(() => {
            onDotButtonClick(i);
            setDirection({ dir: "up", key: Date.now() });
        }, 700);
    };

    return (
        <div className=" embla relative">
            <div className=" overflow-hidden" ref={emblaRef}>
                <div className=" flex">
                    {decisions.map((decision, index) => (
                        <div
                            key={index}
                            className="embla__slide flex-[0_0_100%] overflow-hidden"
                        >
                            <DecisionCard
                                data={decision}
                                direction={direction?.dir}
                                key={direction?.key}
                            />
                        </div>
                    ))}
                </div>
                {decisions.length > 1 && (
                    <div className="embla__controls mt-6 pc:mt-8">
                        <div className="embla__buttons flex justify-between items-center w-[280px] mx-auto">
                            <PrevButton
                                onClick={handlePrev}
                                disabled={prevBtnDisabled}
                            />
                            <SliderNumbersBox
                                scrollSnaps={scrollSnaps}
                                selectedIndex={selectedIndex}
                                sliders={decisions}
                                onDotButtonClick={handleDotClick}
                            />
                            <NextButton
                                onClick={handleNext}
                                disabled={nextBtnDisabled}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
