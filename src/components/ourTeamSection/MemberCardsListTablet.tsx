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

const CARDS_PER_PAGE_TABLET = 4;

const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: "start",
    slidesToScroll: 1,
};

export const MemberCardsListTablet = ({
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

    const renderCards = () => {
        const cards = [];
        const isShowJoinUs = membersData.length % CARDS_PER_PAGE_TABLET;
        const totalPages = Math.ceil(
            membersData.length / CARDS_PER_PAGE_TABLET
        );

        for (let i = 0; i < totalPages; i++) {
            const start = i * CARDS_PER_PAGE_TABLET;
            const end = start + CARDS_PER_PAGE_TABLET;
            const chunk = membersData.slice(start, end);

            const isLastPage = i === totalPages - 1;

            const cardGroup = (
                <li
                    key={`group-${i}`}
                    className="embla__slide flex-[0_0_100%] w-full grid grid-cols-2  tab:border-0"
                >
                    {chunk.map(data => (
                        <MemberCard key={data.data.id} data={data} />
                    ))}
                    {isLastPage &&
                        isShowJoinUs > 0 &&
                        optionType === "person" && <JoinUsCard />}
                </li>
            );

            cards.push(cardGroup);
        }

        return cards;
    };

    return (
        <div className="hidden tab:block relative embla min-w-full tab:min-w-[auto] tab:w-teamTab tab:min-h-[540px] aspect-[500/540] border-1 border-purple-stroke">
            <div className="embla__controls absolute top-[-80px] right-0">
                <div className="embla__buttons flex justify-between gap-4 w-[176px] mx-[auto] tab:w-[120px]">
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
            <div className=" overflow-hidden" ref={emblaRef}>
                <ul className="flex gap-0 ">{renderCards()}</ul>
            </div>
        </div>
    );
};
