"use client";

import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Button } from "@/src/components/shared/Button";
import { ImageFromCloud } from "@/src/components/shared/ImageFromCloud";
import { membersData } from "@/src/mockedData/membersData";
import { getTeammates } from "@/src/utils/getTeammates";
import { LocaleType } from "@/types/LocaleType";
import { Project } from "@/types/Projects";

import { TitleBig } from "./shared/TitleBig";

interface TeammatesProps {
    projects: Project[];
    id: string;
}

const INITIAL_VISIBLE = 5;

export const Teammates = ({ projects, id }: TeammatesProps) => {
    const [showAll, setShowAll] = useState(false);
    const teammates = getTeammates(membersData, projects, id);
    const locale = useLocale();
    const t = useTranslations("Buttons");

    const visibleTeammates = showAll
        ? teammates
        : teammates.slice(0, INITIAL_VISIBLE);

    return (
        <section>
            <TitleBig>Teammates</TitleBig>
            <ul className="grid grid-cols-1 pc:grid-cols-3 gap-4">
                {visibleTeammates.map(data => {
                    const langData = data[locale as LocaleType];

                    return (
                        <li
                            key={data.data.id}
                            className="flex gap-4 items-center"
                        >
                            <ImageFromCloud
                                storage="members"
                                src={data.data.imageURL || ""}
                                width={256}
                                height={256}
                                alt={data.data.id}
                                loading="lazy"
                                title={data.data.id}
                                className={
                                    "object-cover w-[56px] h-[56px] rounded-full"
                                }
                            />
                            <div>
                                <p className="mb-[6px] text-sm tab:text-base desk:text-lg font-caviar font-bold text-purple-200 dark:text-white-200">
                                    {langData.name}
                                </p>
                                <p className="text-xs desk:text-sm uppercase text-purple-130 dark:text-purple-50">
                                    {data.data.position}
                                </p>
                            </div>
                        </li>
                    );
                })}
                <li className="text-center tab:text-left">
                    <Button
                        className="tab:w-[200px]"
                        onClick={() => setShowAll(prev => !prev)}
                    >
                        {showAll ? t("showLess") : t("allTeammates")}
                    </Button>
                </li>
            </ul>
        </section>
    );
};
