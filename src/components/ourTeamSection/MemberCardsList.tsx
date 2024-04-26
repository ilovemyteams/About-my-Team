"use client";
import React, { useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { JoinUsCard } from "./JoinUsCard";
import { MemberCard } from "./MemberCard";
import { MemberDataItemType } from "../../mockedData/membersData";
import { SliderButtons } from "./SliderButtons";

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
                <ul className="flex gap-0">
                    {membersData.map(data => (
                        <li
                            key={data.data.id}
                            className="embla__slide flex-[0_0_50%] w-full border-[1px] border-purple-stroke border-r-[0px] even:ml-[-1px]"
                        >
                            <MemberCard data={data} />
                        </li>
                    ))}
                    {optionType === "person" && (
                        <li className="embla__slide flex-[0_0_50%] w-full border-[1px] border-purple-stroke border-r-[0px] ">
                            <JoinUsCard />
                        </li>
                    )}
                </ul>
                <SliderButtons membersData={membersData} emblaApi={emblaApi} />
            </div>
        </div>
    );
};
