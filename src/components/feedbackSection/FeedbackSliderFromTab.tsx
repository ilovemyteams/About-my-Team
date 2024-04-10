"use client";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { FeedbackDataItemType } from "../shared/mockedData/feedbackData";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "../shared/SliderComponents/CarouselButtons";
import { LocaleType } from "@/types/LocaleType";
import { SliderDotsBox } from "../shared/SliderComponents/SliderDotsBox";
import { useDotButton } from "../shared/SliderComponents/SliderDots";
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
            <div
                className=" overflow-hidden tab:min-w-[320px] tab:max-w-[44.44%] ml-auto pc:min-w-[540px] pc:max-w-[50%]"
                ref={emblaRef}
            >
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
                                className="object-cover tab:h-[302px] w-full pc:h-[346px]"
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
            {feedbacks.map((feedback, index) => (
                <div
                    key={feedback.data.id}
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
                        <FeedbackCardTextFromTab
                            data={feedback.data}
                            localizationData={feedback[locale as Locale]}
                        />
                    </motion.div>
                </div>
            ))}
        </div>
    );
};
