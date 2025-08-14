import { useLocale, useTranslations } from "next-intl";
import React from "react";

import { MemberDataItemType } from "@/src/mockedData/membersData";
import { LocaleType } from "@/types/LocaleType";

import { Button } from "../../shared/Button";
import { IconLike } from "../../shared/Icons/IconLike";
import { IconScales } from "../../shared/Icons/IconScales";
import { Avatar } from "./parts/Avatar";
import { Domains } from "./parts/Domains";
import { IconButton } from "./parts/IconButton";
import { Statistics } from "./parts/Statistics";
import { Technologies } from "./parts/Technologies";

interface MemberCardProps {
    member: MemberDataItemType;
}

type StatusType = "free" | "part" | "busy";
type DomainsType =
    | "ecommerce"
    | "sales"
    | "edtech"
    | "fintech"
    | "mentoring"
    | "healthtech"
    | "traveltech"
    | "legaltech"
    | "dronetech"
    | "gaming"
    | "marktech";

const domainExample: DomainsType[] = [
    "sales",
    "ecommerce",
    "dronetech",
    "healthtech",
    "legaltech",
];

const generateRandomStatus = (): StatusType => {
    const random = Math.floor(Math.random() * 3 + 1);
    return random === 1 ? "free" : random === 2 ? "part" : "busy";
};

export const TeamCard = ({ member }: MemberCardProps) => {
    const locale = useLocale();
    const t = useTranslations("MemberPage");
    const langData = member[locale as LocaleType];
    const { imageURL, position, pricePerHour, projectsExperience, tools } =
        member.data;

    const status = generateRandomStatus();

    return (
        <div
            className="mx-auto w-full relative z-5 max-w-[408px] tab:max-w-[350px] pc:min-w-[320px] h-full px-4 tab:px-5 pc:px-4 py-5 isolate 
        border-purple-strokeLight bg-white-200 dark:bg-purple-200 dark:bg-teamCardGradientDark border-[1px] dark:border-purple-stroke
       hover:before:opacity-100 focus:before:opacity-100 active:before:opacity-100
        cursor-pointer before:transition-opacity before:duration-500
        before:absolute before:z-[-1] before:opacity-0 before:inset-0 before:bg-hoverTeamCardGradientLight before:dark:bg-hoverTeamCardGradientDark"
        >
            <div className="flex flex-col items-start gap-4 max-w-[288px] mx-auto">
                <div className="absolute top-0 right-0 flex  tab:flex-col-reverse">
                    <IconButton label={t("compareBtnDesc")}>
                        <IconScales className="w-[24px] h-auto" />
                    </IconButton>
                    <IconButton label={t("wishBtnDesc")}>
                        <IconLike isLiked={false} className="w-[24px] h-auto" />
                    </IconButton>
                </div>
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
                <p className="text-start tab:text-center text-sm grow w-full">
                    {langData.about}
                </p>

                <Statistics
                    projectsCount={projectsExperience.length}
                    pricePerHour={pricePerHour}
                />
                <Technologies tools={tools} />
                <Domains domains={domainExample} />
                <Button color="grey" className="w-full max-w-[270px] mx-auto">
                    Дивитись профіль
                </Button>
            </div>
        </div>
    );
};
