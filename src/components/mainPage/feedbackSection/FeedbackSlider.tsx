"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useLocale } from "next-intl";
import React from "react";

import { FeedbackDataItemType } from "@/src/mockedData/feedbackData";
import { LocaleType } from "@/types/LocaleType";

import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "../../shared/SliderComponents/CarouselButtons";
import { useDotButton } from "../../shared/SliderComponents/SliderDots";
import { SliderDotsBox } from "../../shared/SliderComponents/SliderDotsBox";
import { FeedbackCard } from "./FeedbackCard";

type FeedbackSliderProps = {
    feedbacks: FeedbackDataItemType[];
    options?: EmblaOptionsType;
};
type Locale = LocaleType;

export const FeedbackSlider: React.FC<FeedbackSliderProps> = props => {
    const { feedbacks, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const locale = useLocale();
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
                    {feedbacks.map(feedback => (
                        <div
                            key={feedback.data.id}
                            className="embla__slide flex-[0_0_100%] "
                        >
                            <FeedbackCard
                                data={feedback.data}
                                localizationData={feedback[locale as Locale]}
                            />
                        </div>
                    ))}
                </div>
                {feedbacks.length > 1 && (
                    <div className="embla__controls mt-4 tab:mt-0 tab:absolute tab:-top-[80px] pc:-top-[112px] right-0 ">
                        <div className="embla__buttons flex gap-4 tab:gap-6 justify-center">
                            <PrevButton
                                onClick={onPrevButtonClick}
                                disabled={prevBtnDisabled}
                            />
                            <SliderDotsBox
                                scrollSnaps={scrollSnaps}
                                selectedIndex={selectedIndex}
                                sliders={feedbacks}
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
