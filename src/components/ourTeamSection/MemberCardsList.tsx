"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "../shared/SliderComponents/CarouselButtons";
import { EmblaOptionsType } from "embla-carousel";
import { JoinUsCard } from "./JoinUsCard";
import { MemberCard } from "./MemberCard";
import { useDotButton } from "../shared/SliderComponents/SliderDots";
import { SliderDotsBox } from "../shared/SliderComponents/SliderDotsBox";
import { MemberDataItemType } from "./data/membersData";

const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: "start",
    slidesToScroll: 2,
};

export const MemberCardsList = ({
    membersData,
}: {
    membersData: MemberDataItemType[];
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

    return (
        <div className="relative embla min-w-full tab:hidden">
            <div className=" overflow-hidden" ref={emblaRef}>
                <ul className="flex gap-0">
                    <>
                        {membersData.map(data => (
                            <li
                                key={data.data.id}
                                className="embla__slide flex-[0_0_50%] w-full border-[1px] border-purple-stroke [&:not(:last-child)]:border-r-[0px] even:ml-[-1px]"
                            >
                                <MemberCard data={data} />
                            </li>
                        ))}
                        <li className="embla__slide flex-[0_0_50%] w-full border-[1px] border-purple-stroke [&:not(:last-child)]:border-r-[0px] even:ml-[-1px]">
                            <JoinUsCard />
                        </li>
                    </>
                </ul>
                <div className="embla__controls  mt-[16px] ">
                    <div className="embla__buttons flex justify-center gap-4">
                        <PrevButton
                            onClick={onPrevButtonClick}
                            disabled={prevBtnDisabled}
                        />
                        <SliderDotsBox
                            scrollSnaps={scrollSnaps}
                            selectedIndex={selectedIndex}
                            sliders={membersData}
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
