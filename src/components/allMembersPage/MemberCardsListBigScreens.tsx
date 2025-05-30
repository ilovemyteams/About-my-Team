"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { MemberDataItemType } from "@/src/mockedData/membersData";

import { SliderButtons } from "../mainPage/ourTeamSection/SliderButtons";
import { OneSliderCardBigScreen } from "./OneSliderCardBigScreen";

const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: "start",
    slidesToScroll: 1,
};

export const MemberCardsListBigScreens = ({
    membersData,
}: {
    membersData: MemberDataItemType[];
}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

    return (
        <div
            className="hidden pc:block relative embla min-w-full tab:min-w-[auto] tab:min-h-[540px] pc:min-h-[584px] tab:aspect-[500/540] tab:w-teamTab 
            pc:w-teamPC border-1 border-purple-strokeLight dark:border-purple-stroke pc:aspect-[810/584] deskxl:aspect-[1080/584]
            desk:w-teamDesk deskxl:w-teamDeskxl"
        >
            <SliderButtons membersData={membersData} emblaApi={emblaApi} />
            <div className=" overflow-hidden" ref={emblaRef}>
                <ul className="flex gap-0 ">
                    <OneSliderCardBigScreen membersData={membersData} />
                </ul>
            </div>
        </div>
    );
};
