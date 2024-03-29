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
import Image from "next/image";
import { FeedbackCardTextFromTab } from "./FeedbackCardTextFromTab";

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
        <div className=" embla relative">
            <div className=" overflow-hidden" ref={emblaRef}>
                <div className=" flex">
                    {feedbacks.map(({ data, en }) => (
                        <div
                            key={data.id}
                            className="embla__slide flex-[0_0_100%] "
                        >
                            <Image
                                src={
                                    data.image
                                        ? data.image
                                        : "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146266/samples/dessert-on-a-plate.jpg"
                                }
                                alt={en.siteName}
                                width={540}
                                height={346}
                                className=" object-cover min-w-[220px] h-[220px] tab:min-w-[320px] tab:h-[302px] pc:w-[540px] pc:h-[346px]"
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
            {feedbacks.map(feedback => (
                <div key={feedback.data.id}>
                    <FeedbackCardTextFromTab
                        data={feedback.data}
                        localizationData={feedback[locale as Locale]}
                    />
                </div>
            ))}
        </div>
    );
};
