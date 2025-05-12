"use client";
import { YouTubeEmbed } from "@next/third-parties/google";
import { EmblaOptionsType } from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "../../shared/SliderComponents/CarouselButtons";
import { useDotButton } from "../../shared/SliderComponents/SliderDots";
import { SliderDotsBox } from "../../shared/SliderComponents/SliderDotsBox";

export const ReleaseSlider = ({ videos }: { videos: string[] }) => {
    const options: EmblaOptionsType = {
        loop: true,
    };
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: true, speed: 1 }),
    ]);
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <div className="relative embla min-w-full mt-8 pc:mt-[64px] ">
            <div className=" overflow-hidden" ref={emblaRef}>
                <div className=" flex ">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="embla__slide cursor-grabbing flex-[0_0_90%] tab:flex-[0_0_50%] pc:flex-[0_0_45%] w-full px-2"
                        >
                            <YouTubeEmbed videoid={video} />
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
                            sliders={videos}
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
