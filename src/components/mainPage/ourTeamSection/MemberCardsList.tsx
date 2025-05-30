"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { MemberDataItemType } from "@/src/mockedData/membersData";

import { MemberCard } from "../../shared/MemberCard";
import { SliderButtons } from "./SliderButtons";

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

    const numberOfMembers = membersData.length;
    const lastBorder =
        numberOfMembers === 1 || numberOfMembers === 2
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
                </ul>
                <SliderButtons membersData={membersData} emblaApi={emblaApi} />
            </div>
        </div>
    );
};
