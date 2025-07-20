import { useLocale, useTranslations } from "next-intl";
import React from "react";

import { MemberDataItemType } from "@/src/mockedData/membersData";
import { LocaleType } from "@/types/LocaleType";

import { Button } from "../../shared/Button";
import { IconLike } from "../../shared/Icons/IconLike";
import { IconScales } from "../../shared/Icons/IconScales";
import { Avatar } from "./parts/Avatar";
import { Domains } from "./parts/Domains";
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
        <div className="relative h-full  px-4 tab:px-5 pc:px-4 py-5 flex flex-col items-start gap-4 isolate dark:bg-purple-200 dark:bg-teamCardGradientDark border-[1px] dark:border-purple-stroke ">
            <div className="absolute top-0 right-0 flex  tab:flex-col-reverse">
                <button
                    className="p-[10px] cursor-pointer hover:text-purple-100 active:text-purple-100 focus:text-purple-100"
                    aria-label={t("compareBtnDesc")}
                >
                    <IconScales className="w-[24px] h-auto" />
                </button>
                <button
                    className="p-[10px] cursor-pointer hover:text-purple-100 active:text-purple-100 focus:text-purple-100"
                    aria-label={t("wishBtnDesc")}
                >
                    <IconLike isLiked={false} className="w-[24px] h-auto" />
                </button>
            </div>
            <div className="pt-4 tab:pt-0 flex gap-5 tab:gap-4 items-center tab:flex-col tab:justify-center w-full">
                <Avatar
                    name={langData.name}
                    imageURL={imageURL}
                    status={status}
                />
                <div className="flex flex-col gap-2 tab:items-center ">
                    <p className="font-caviar text-white-200 font-bold tab:text-xl">
                        {langData.name}
                    </p>
                    <p className="uppercase text-purple-50 text-xs tab:text-sm">
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
    );
};
