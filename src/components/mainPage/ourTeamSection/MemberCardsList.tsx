"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useRef } from "react";

import { usePreviousURL } from "@/src/utils/PreviousURLContext";

import { MemberDataItemType } from "../../mockedData/membersData";
import { JoinUsCard } from "./JoinUsCard";
import { MemberCard } from "./MemberCard";
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
    const { slideId, setSlideId } = usePreviousURL();

    const updateSlideIdInURL = useCallback(
        (index: number) => {
            const url = new URL(window.location.href);
            url.searchParams.set("slideId", index.toString());
            window.history.pushState({}, "", url);
            setSlideId(index);
        },
        [setSlideId]
    );

    const isFirstRender = useRef(true);
    useEffect(() => {
        if (!isFirstRender.current && emblaApi) {
            // Reset the slider to the first slide whenever optionType changes
            emblaApi.scrollTo(slideId);
        } else {
            isFirstRender.current = false;
        }
        if (emblaApi) {
            const onSelect = () => {
                const index = emblaApi.selectedScrollSnap();
                updateSlideIdInURL(index);
            };
            emblaApi.on("select", onSelect);
            return () => {
                emblaApi.off("select", onSelect);
            };
        }
    }, [optionType, emblaApi, membersData, updateSlideIdInURL, slideId]);

    const numberOfMembers = membersData.length;
    const lastBorder =
        (numberOfMembers === 1 || numberOfMembers === 2) &&
        optionType !== "person"
            ? "border-r"
            : "border-r-0";
    return (
        <div className="relative embla min-w-full tab:hidden">
            <div className=" overflow-hidden" ref={emblaRef}>
                <ul className="flex gap-0 ">
                    {membersData.map(data => (
                        <li
                            key={data.data.id}
                            className={`embla__slide  flex-[0_0_50%] w-teamMob border border-purple-strokeLight dark:border-purple-stroke ${lastBorder} even:ml-[-1px]`}
                        >
                            <MemberCard data={data} />
                        </li>
                    ))}
                    {optionType === "person" && (
                        <li className="embla__slide  flex-[0_0_50%] w-full border border-purple-strokeLight dark:border-purple-stroke border-r-0 even:ml-[-1px]">
                            <JoinUsCard />
                        </li>
                    )}
                </ul>
                <SliderButtons membersData={membersData} emblaApi={emblaApi} />
            </div>
        </div>
    );
};
