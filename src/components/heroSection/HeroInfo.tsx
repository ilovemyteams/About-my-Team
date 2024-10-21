import { useTranslations } from "next-intl";

import { JoinUsButton } from "../shared/JoinUsButton";
import { WriteUs } from "../shared/WriteUs/WriteUs";
import { IconWebHero } from "../shared/Icons/IconWebHero";

export const HeroInfo = () => {
    const getTranslation = useTranslations();

    return (
        <div className="flex flex-col items-center pt-4 tab:pt-0 pc:block pc:w-[50%] pc:pt-6">
            <h1
                className="text-xl pc:mb-[154px] pc:static
                           tab:absolute tab:left-0 tab:top-0 deskxl:text-2xl text-purple-200 dark:text-grey deskxl:mb-[173px]"
            >
                {getTranslation("Hero.heroInfoText")}
            </h1>
            <div className="hidden pc:block absolute top-12 pc:w-[428px] pc:h-[164px] deskxl:h-[188px]">
                <IconWebHero className="w-auto h-full dark:text-purple-strokeFormLabelLight " />
            </div>
            <div className="flex flex-col gap-4 tab:mt-[86px] pc:gap-6 mt-8 pc:mt-[96px]">
                <WriteUs />
                <JoinUsButton />
            </div>
        </div>
    );
};
