import { useLocale, useTranslations } from "next-intl";
import React from "react";

import { MemberDataItemType } from "@/src/mockedData/membersData";
import { portfolioData } from "@/src/mockedData/portfolioData";
import { LocaleType } from "@/types/LocaleType";

// import { IconLike } from "../../shared/Icons/IconLike";
// import { IconScales } from "../../shared/Icons/IconScales";
import { Avatar } from "./parts/Avatar";
import { Domains } from "./parts/Domains";
import { MemberCardLink } from "./parts/MemberCardLink";
// import { IconButton } from "./parts/IconButton";
import { Statistics } from "./parts/Statistics";
import { Technologies } from "./parts/Technologies";
import { ViewProfileButton } from "./parts/ViewProfileButton";

interface MemberCardProps {
    member: MemberDataItemType;
}

type StatusType = "free" | "part" | "busy";

const generateRandomStatus = (): StatusType => {
    const random = Math.floor(Math.random() * 3 + 1);
    return random === 1 ? "free" : random === 2 ? "part" : "busy";
};

export const TeamCard = ({ member }: MemberCardProps) => {
    const locale = useLocale();
    const t = useTranslations("MemberPage");

    const langData = member[locale as LocaleType];
    const {
        imageURL,
        position,
        pricePerHour,
        projectsExperience,
        tools,
        id,
        isEndInAboutMT,

        careerStart,
        projectId,
    } = member.data;

    const memberDomainList = new Set(
        portfolioData
            .filter(project => {
                return projectId.includes(project.data.slug);
            })
            .map(project => project.data.domains)
            .flat()
    );

    const status = generateRandomStatus();

    return (
        <MemberCardLink id={id} isActive={!isEndInAboutMT}>
            <div className="flex flex-col items-start gap-4 max-w-[288px] mx-auto h-full">
                {/* Block with like and compare buttons */}
                {/* <div className="absolute top-0 right-0 flex  tab:flex-col-reverse">
                    <IconButton label={t("compareBtnDesc")}>
                        <IconScales className="w-[24px] h-auto" />
                    </IconButton>
                    <IconButton label={t("wishBtnDesc")}>
                        <IconLike isLiked={false} className="w-[24px] h-auto" />
                    </IconButton>
                </div> */}
                <div className="pt-4 tab:pt-0 flex gap-5 tab:gap-4 items-center tab:flex-col tab:justify-center w-full">
                    <Avatar
                        name={langData.name}
                        imageURL={imageURL}
                        status={status}
                    />
                    <div className="flex flex-col gap-2 tab:items-center ">
                        <p className="font-caviar text-purple-200 dark:text-white-200 font-bold tab:text-xl">
                            {langData.name}
                        </p>
                        <p className="uppercase text-purple-130 dark:text-purple-50 text-xs tab:text-sm">
                            {position}
                        </p>
                    </div>
                </div>
                <div className="h-[40px] tab:h-[44px] w-full">
                    <p className="text-center text-sm tab:text-base grow w-full line-clamp-2">
                        {langData.about}
                    </p>
                </div>

                <Statistics
                    projectsCount={projectsExperience.length}
                    pricePerHour={pricePerHour}
                    careerStart={careerStart}
                />
                <Technologies tools={tools} />
                <Domains domains={memberDomainList} />
                <div className="grow w-full flex items-center justify-center">
                    {isEndInAboutMT ? (
                        <p className="font-caviar font-bold text-lg lowercase">
                            {t("leftProject")}
                        </p>
                    ) : (
                        <ViewProfileButton />
                    )}
                </div>
            </div>
        </MemberCardLink>
    );
};
