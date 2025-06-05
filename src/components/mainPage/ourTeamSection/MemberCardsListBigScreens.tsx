"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useRef } from "react";

import { MemberDataItemType } from "@/src/mockedData/membersData";
import { usePreviousURL } from "@/src/utils/PreviousURLContext";

import { OneSliderCardBigScreen } from "./OneSliderCardBigScreen";
import { SliderButtons } from "./SliderButtons";

const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: "start",
    slidesToScroll: 1,
};

export const MemberCardsListBigScreens = ({
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

    return (
        <div
            className="hidden tab:block relative embla min-w-full tab:min-w-[auto] tab:min-h-[540px] pc:min-h-[584px] tab:aspect-[500/540] tab:w-teamTab 
            pc:w-teamPC border-1 border-purple-strokeLight dark:border-purple-stroke pc:aspect-[810/584] deskxl:aspect-[1080/584]
            desk:w-teamDesk deskxl:w-teamDeskxl"
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
