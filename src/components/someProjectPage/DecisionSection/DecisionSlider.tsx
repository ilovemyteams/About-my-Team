"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

import { LocaleType } from "@/types/LocaleType";
import { SliderType } from "@/src/mockedData/portfolioData";
import { useDotButton } from "../../shared/SliderComponents/SliderDots";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "../../shared/SliderComponents/CarouselButtons";
import { DecisionCard } from "./DecisionCard";
import { SliderNumbersBox } from "../../shared/SliderComponents/SliderNumbersBox";

type DecisionSliderProps = {
    decisions: SliderType[];
    options?: EmblaOptionsType;
};

export const DecisionSlider: React.FC<DecisionSliderProps> = props => {
    const { decisions, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <div className=" embla relative">
            <div className=" overflow-hidden" ref={emblaRef}>
                <div className=" flex">
                    {decisions.map((decision, index) => (
                        <div
                            key={index}
                            className="embla__slide flex-[0_0_100%] overflow-hidden"
                        >
                            <DecisionCard data={decision} />
                        </div>
                    ))}
                </div>
                {decisions.length > 1 && (
                    <div className="embla__controls mt-6 pc:mt-8">
                        <div className="embla__buttons flex justify-between items-center w-[280px] mx-auto">
                            <PrevButton
                                onClick={onPrevButtonClick}
                                disabled={prevBtnDisabled}
                            />
                            <SliderNumbersBox
                                scrollSnaps={scrollSnaps}
                                selectedIndex={selectedIndex}
                                sliders={decisions}
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
        </div>
    );
};
