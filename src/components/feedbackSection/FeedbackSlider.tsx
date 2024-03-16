"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { useLocale } from "next-intl";

import { FeedbackDataItemType } from "./feedbackData";
import { FeedbackCard } from "./FeedbackCard";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "../shared/SliderComponents/CarouselButtons";

type FeedbackSliderProps = {
    feedbacks: FeedbackDataItemType[];
    options?: EmblaOptionsType;
};
type Locale = "uk" | "en" | "pl";

export const FeedbackSlider: React.FC<FeedbackSliderProps> = props => {
    const { feedbacks, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const locale = useLocale();

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <div className=" embla ">
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
                <div className="embla__controls  tab:absolute -top-[118px] right-0 ">
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
