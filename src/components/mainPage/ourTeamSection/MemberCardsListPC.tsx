"use client";
import { useLocale } from "next-intl";
import { useState } from "react";

import { SCREEN_NAMES } from "@/src/constants/screenNames";
import { useScreenSize } from "@/src/hooks/useScreenSize";
import { MemberDataItemType } from "@/src/mockedData/membersData";
import { getPaddedMembers } from "@/src/utils/renderedMembers";
import { LocaleType } from "@/types/LocaleType";

import { IconProfile } from "../../shared/Icons/IconProfile";
import { ImageFromCloud } from "../../shared/ImageFromCloud";
import { MemberCardMain } from "./MemberCardMain";
import { Skeleton } from "./Skeleton";

export const MemberCardsListPC = ({
    membersData,
}: {
    membersData: MemberDataItemType[] | undefined;
}) => {
    const locale = useLocale();
    const screenSizeName = useScreenSize();
    const { pcName } = SCREEN_NAMES;

    const isLoading = !membersData || membersData.length === 0;
    const visibleMembers =
        !isLoading && screenSizeName === pcName
            ? membersData.slice(0, 11)
            : membersData;
    const paddedMembers = getPaddedMembers(visibleMembers);

    const [activeId, setActiveId] = useState<string | null>(
        paddedMembers.find(m => m)?.data.id ?? null
    );
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const activeMember = paddedMembers.find(m => m?.data.id === activeId);

    return (
        <div className="pc:flex justify-between">
            <ul className="pc:grid pc:grid-cols-5 pc:gap-4 w-full pc:w-[63.3%] desk:w-[61%] hidden tab:border-0">
                {isLoading || !visibleMembers ? (
                    <ul className="hidden pc:grid flex-[0_0_100%] w-full border-0 pc:grid-cols-5 ">
                        <Skeleton number={11} />
                    </ul>
                ) : (
                    paddedMembers.map((member, idx) => {
                        if (!member) {
                            return (
                                <div
                                    key={`empty-${idx}`}
                                    className="min-w-[124px] aspect-[124/187]"
                                />
                            );
                        }

                        const isHovered = hoveredId === member.data.id;
                        const isActive =
                            activeId === member.data.id && !hoveredId;
                        const shouldHideGradient = isHovered || isActive;

                        return (
                            <div
                                key={member.data.id}
                                className="relative min-w-[124px] aspect-[124/187] overflow-hidden"
                                onClick={() => setActiveId(member.data.id)}
                                onMouseEnter={() =>
                                    setHoveredId(member.data.id)
                                }
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                {member.data.imageURL ? (
                                    <div className="group w-full h-full relative min-w-[124px] aspect-[124/187] overflow-hidden">
                                        <ImageFromCloud
                                            storage="members"
                                            src={member.data.imageURL}
                                            width={246}
                                            height={196}
                                            className="group-hover:scale-110 duration-300 ease-out transition-transform cursor-pointer object-cover w-full h-full"
                                            alt={
                                                member[locale as LocaleType]
                                                    ?.name
                                            }
                                            loading="lazy"
                                        />
                                        <div
                                            className={`absolute inset-0 z-10 
                                            dark:bg-CTAGradient bg-CTAGradientLight 
                                            transition-opacity duration-300 ease-out pointer-events-none 
                                            ${shouldHideGradient ? "opacity-0" : "opacity-70"}`}
                                        />
                                    </div>
                                ) : (
                                    <div className="flex items-end justify-center h-full w-full bg-memberMenuGradientLight dark:bg-memberMenuGradientDark">
                                        <IconProfile className="w-[80%] tab:w-[59%] h-auto text-purple-strokeLight dark:text-purple-stroke" />
                                    </div>
                                )}
                            </div>
                        );
                    })
                )}
            </ul>
            <div className="pc:w-[31.11%] desk:w-[30.5%]">
                <div className="">
                    {activeMember ? (
                        <MemberCardMain data={activeMember} />
                    ) : (
                        <div className="flex items-end justify-center h-full w-full bg-memberMenuGradientLight dark:bg-memberMenuGradientDark">
                            <IconProfile className="w-[80%] tab:w-[59%] h-auto text-purple-strokeLight dark:text-purple-stroke" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
