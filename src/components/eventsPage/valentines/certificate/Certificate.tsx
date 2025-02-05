import { useTranslations } from "next-intl";
import React from "react";

import { PageSection } from "../../../shared/PageSection";
import { CornerIcon } from "../icons/CornerIcon";
import { Card } from "./Card";

export const Certificate = () => {
    const getTranslation = useTranslations("Valentines");

    const title = getTranslation.rich("clickHere", {
        purple: chunk => <span className="text-purple-100">{chunk}</span>,
        red: chunk => (
            <span className="text-redLight dark:text-red">{chunk}</span>
        ),
    });

    const cornersStyles = "w-[62px] h-auto pc:w-[91px]";
    return (
        <PageSection className="pb-[80px] relative">
            <div className="relative pt-7 pb-[266px] tab:pt-9 tab:pb-10 pc:pt-[65px] pc:pb-[55px]">
                <CornerIcon
                    className={`absolute top-0 left-0 rotate-90 ${cornersStyles}`}
                />
                <CornerIcon
                    className={`absolute top-0 right-0 rotate-[180deg] ${cornersStyles}`}
                />
                <CornerIcon
                    className={`absolute bottom-0 left-0 ${cornersStyles}`}
                />
                <CornerIcon
                    className={`absolute bottom-0 right-0 rotate-[-90deg] ${cornersStyles}`}
                />
                <div className="px-3 tab:pl-10 tab:pr-0 tab:w-[50%] pc:pl-[72px] desk:pl-[76px] desk:w-[52%]">
                    <p className="font-caviar text-purple-200 dark:text-white-200 font-bold text-2xl24 tab:text-3xl28 pc:text-5xl40 desk:text-6xln mb-10 tab:mb-6 pc:mb-14 desk:mb-[72px] whitespace-pre-wrap">
                        {title}
                    </p>

                    <p className="text-sm pc:text-lg25">
                        {getTranslation("firstFootnote")}
                    </p>
                    <p className="text-sm pc:text-lg25">
                        {getTranslation("secondFootnote")}
                    </p>
                </div>
            </div>
            <Card />
        </PageSection>
    );
};
