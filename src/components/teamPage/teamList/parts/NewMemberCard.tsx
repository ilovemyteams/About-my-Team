import { useTranslations } from "next-intl";
import React from "react";

import { JoinUsButton } from "@/src/components/shared/JoinUsButton";
import { NoImageHeart } from "@/src/components/shared/NoImageHeart";

import { JoinUsLink } from "./JoinUsLink";

export const NewMemberCard = () => {
    const t = useTranslations("MemberPage");
    return (
        <div className="block mx-auto w-full relative bg-white-200 dark:bg-purple-200 z-5 max-w-[408px] tab:max-w-[350px] pc:min-w-[320px] h-full px-4 tab:px-5 pc:px-4 py-5 isolate border-purple-strokeLight  border-[1px] dark:border-purple-stroke hover:before:opacity-100 focus:before:opacity-100 active:before:opacity-100 cursor-pointer before:transition-opacity before:duration-500 before:absolute before:z-[-1] before:opacity-0 before:inset-0 before:bg-hoverTeamCardGradientLight before:dark:bg-hoverTeamCardGradientDark min-h-[388px]">
            <JoinUsLink />
            <div className="h-full flex flex-col justify-between">
                <div className="flex pt-8 tab:pt-9 justify-center">
                    <NoImageHeart className="w-[92px] h-auto tab:w-[102px]" />
                </div>
                <div className=" text-center">
                    <p className="font-caviar font-bold text-lg mb-[14px] tab:text-xl">
                        {t("joinUsTitle")}
                    </p>
                    <p className="text-sm tab:text-base whitespace-pre-wrap">
                        {t("joinUsText")}
                    </p>
                </div>
                <div className="flex justify-center w-full max-w-[270px] mx-auto">
                    <JoinUsButton btnSize="small" />
                </div>
            </div>
        </div>
    );
};
