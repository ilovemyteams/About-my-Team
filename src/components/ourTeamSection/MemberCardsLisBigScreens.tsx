"use client";
import React, { useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { MemberDataItemType } from "../shared/mockedData/membersData";
import { SliderButtons } from "./SliderButtons";
import { OneSliderCardBigScreen } from "./OneSliderCardBigScreen";

const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: "start",
    slidesToScroll: 1,
};

export const MemberCardsLisBigScreens = ({
    membersData,
    optionType,
}: {
    membersData: MemberDataItemType[];
    optionType: string;
}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

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
        <div
            className="hidden tab:block relative embla min-w-full tab:min-w-[auto] tab:w-teamTab tab:min-h-[540px] tab:aspect-[500/540] border-1 border-purple-stroke
                       pc:aspect-[810/584]"
        >
            <SliderButtons membersData={membersData} emblaApi={emblaApi} />
            <div className=" overflow-hidden" ref={emblaRef}>
                <ul className="flex gap-0 ">
                    <OneSliderCardBigScreen
                        optionType={optionType}
                        membersData={membersData}
                    />
                </ul>
            </div>
        </div>
    );
};
