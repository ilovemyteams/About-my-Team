"use client";
import React, { useRef, useEffect } from "react";
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
import { MemberDataItemType } from "../shared/mockedData/membersData";
import Link from "next/link";
import { MemberCardText } from "./MemberCardText";

const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: "start",
    slidesToScroll: 2,
};

export const MemberCardsList = ({
    membersData,
    optionType,
}: {
    membersData: MemberDataItemType[];
    optionType: string;
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

    const isFirstRender = useRef(true);

    useEffect(() => {
        if (!isFirstRender.current && emblaApi) {
            // Reset the slider to the first slide whenever optionType changes
            emblaApi.scrollTo(0);
        } else {
            isFirstRender.current = false;
        }
    }, [optionType, emblaApi, membersData]);

    return (
        <div className="relative embla min-w-full tab:hidden">
            <div className=" overflow-hidden" ref={emblaRef}>
                <div className="flex gap-0">
                    {membersData.map(data => (
                        <div
                            key={data.data.id}
                            className="embla__slide flex-[0_0_50%] w-full border-[1px] border-purple-stroke [&:not(:last-child)]:border-r-[0px] even:ml-[-1px]"
                        >
                            <Link href={`/member/${data.data.id}`}>
                                <MemberCard data={data} />
                            </Link>
                            <MemberCardText
                                position={data.data.position}
                                socialLinks={data.data.socialLinks}
                            />
                        </div>
                    ))}
                    {optionType === "person" && (
                        <li className="embla__slide flex-[0_0_50%] w-full border-[1px] border-purple-stroke [&:not(:last-child)]:border-r-[0px] even:ml-[-1px]">
                            <JoinUsCard />
                        </li>
                    )}
                </div>
                <div className="embla__controls  mt-[16px] ">
                    <div className="embla__buttons flex justify-between gap-4 w-[176px] mx-[auto]">
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
