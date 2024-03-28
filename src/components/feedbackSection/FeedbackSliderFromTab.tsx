"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { useLocale } from "next-intl";

import { FeedbackDataItemType } from "./feedbackData";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "../shared/SliderComponents/CarouselButtons";
import { LocaleType } from "@/types/LocaleType";
import { SliderDotsBox } from "../shared/SliderComponents/SliderDotsBox";
import { useDotButton } from "../shared/SliderComponents/SliderDots";
import { FeedbackCardFromTab } from "./FeedbackCardFromTablet";

type FeedbackSliderProps = {
    feedbacks: FeedbackDataItemType[];
    options?: EmblaOptionsType;
};
type Locale = LocaleType;

export const FeedbackSliderFromTab: React.FC<FeedbackSliderProps> = props => {
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
        <div className=" embla relative hidden tab:block tab:min-w-[320px] max-w-[50%] ml-auto">
            <div className=" overflow-hidden" ref={emblaRef}>
                <div className=" flex">
                    {feedbacks.map((feedback, index) => (
                        <div
                            key={feedback.data.id}
                            className="embla__slide flex-[0_0_100%] "
                        >
                            <FeedbackCardFromTab
                                data={feedback.data}
                                localizationData={feedback[locale as Locale]}
                                index={index}
                                selectedIndex={selectedIndex}
                            />
                        </div>
                    ))}
                </div>
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
            </div>
        </div>
    );
};
