"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "next-intl";
import { useState } from "react";

import { SCREEN_NAMES } from "@/src/constants/screenNames";
import { useScreenSize } from "@/src/hooks/useScreenSize";
import { useRouter } from "@/src/i18n/routing";
import { MemberDataItemType } from "@/src/mockedData/membersData";
import { usePreviousURL } from "@/src/utils/PreviousURLContext";
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
    const { setPreviousURL } = usePreviousURL();
    const router = useRouter();

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
    const hoveredMember = paddedMembers.find(m => m?.data.id === hoveredId);

    const displayedMember = hoveredMember || activeMember;

    const onClickCard = (id: string) => {
        setHoveredId(null);
        setActiveId(id);

        requestAnimationFrame(() => {
            setPreviousURL("back");
            router.push(`/member/${id}`);
        });
    };
    return (
        <div className="hidden pc:flex justify-between">
            <ul className="pc:grid pc:grid-cols-5 w-full pc:w-[63.3%] desk:w-[61%] hidden tab:border-0">
                {isLoading || !visibleMembers ? (
                    <ul className="hidden pc:grid flex-[0_0_100%] w-full border-0 pc:grid-cols-5 ">
                        <Skeleton number={11} />
                    </ul>
                ) : (
                    paddedMembers.map((member, idx) => {
                        if (!member) {
                            return (
                                <li
                                    key={`empty-${idx}`}
                                    className="pc:p-2 min-w-[124px] aspect-[124/148]"
                                />
                            );
                        }

                        const isHovered = hoveredId === member.data.id;
                        const isActive =
                            activeId === member.data.id && !hoveredId;
                        const shouldHideGradient = isHovered || isActive;

                        return (
                            <li
                                key={member.data.id}
                                className="relative pc:p-2 min-w-[124px] aspect-[124/148] desk:aspect-[150/180] overflow-hidden"
                                onClick={() => onClickCard(member.data.id)}
                                onMouseEnter={() =>
                                    setHoveredId(member.data.id)
                                }
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                {member.data.imageURL ? (
                                    <div className="group w-full h-full relative min-w-[124px] aspect-[124/148] desk:aspect-[150/180] overflow-hidden">
                                        <ImageFromCloud
                                            storage="members"
                                            src={member.data.imageURL}
                                            width={600}
                                            height={400}
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
                            </li>
                        );
                    })
                )}
            </ul>
            <div className="pc:w-[31.11%] desk:w-[30.5%]">
                <div className="relative h-full">
                    <AnimatePresence mode="popLayout">
                        {displayedMember && (
                            <motion.div
                                key={displayedMember.data.id}
                                layoutId={`member-${displayedMember.data.id}`}
                                layout
                                className="absolute inset-0"
                                initial={{ opacity: 0, scale: 0.96, x: 32 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.98, x: 32 }}
                                transition={{
                                    layout: {
                                        type: "spring",
                                        stiffness: 240,
                                        damping: 30,
                                    },
                                    opacity: { duration: 0.2 },
                                }}
                            >
                                <MemberCardMain data={displayedMember} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
