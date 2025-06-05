"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "../../shared/SliderComponents/CarouselButtons";
import { useDotButton } from "../../shared/SliderComponents/SliderDots";
import { SliderDotsBox } from "../../shared/SliderComponents/SliderDotsBox";
import { FeedbackCardTextFromTab } from "./FeedbackCardTextFromTab";

type FeedbackSliderProps = {
    feedbacks: Array<{
        _id: string;
        reviewText: string | null;
        feedbackLink: string | null;
        newWindow: boolean | null;
        altImage: string | null;
        asset: string | null;
        reviewerName: string | null;
        reviewerPosition: string | null;
        projectName: string | null;
        projectURL: string | null;
        projectCategory: string | null;
    }>;
    options?: EmblaOptionsType;
};

export const FeedbackSliderFromTab: React.FC<FeedbackSliderProps> = props => {
    const { feedbacks, options } = props;
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
            <div
                className=" overflow-hidden tab:min-w-[320px] tab:max-w-[44.44%] ml-auto pc:min-w-[540px] pc:max-w-[50%]"
                ref={emblaRef}
            >
                <div className=" flex">
                    {feedbacks.map(feedback => (
                        <div
                            key={feedback._id}
                            className="embla__slide flex-[0_0_100%] "
                        >
                            {feedback.asset && (
                                <Image
                                    src={feedback.asset}
                                    alt={feedback.altImage || ""}
                                    width={540}
                                    height={346}
                                    className="object-cover tab:h-[302px] w-full pc:h-[346px]"
                                />
                            )}
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
            {feedbacks.map((feedback, index) => (
                <div
                    key={feedback._id}
                    className={`${index === selectedIndex ? "block absolute top-0 left-0 overflow-hidden tab:min-w-[360px] tab:max-w-[50%] pc:min-w-[450px] pc:max-w-[41.7%]" : "hidden"}`}
                >
                    <motion.div
                        initial={{
                            opacity: 1,
                            y: 500,
                        }}
                        animate={{
                            opacity: index === selectedIndex ? 1 : 0,
                            y: index === selectedIndex ? 0 : 500,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 50,
                        }}
                        className="w-full"
                    >
                        <FeedbackCardTextFromTab feedback={feedback} />
                    </motion.div>
                </div>
            ))}
        </div>
    );
};
