import { useTranslations } from "next-intl";

import { IconLowPolyBall } from "../shared/Icons/christmas/IconLowPolyBall";
import { JoinUsButton } from "../shared/JoinUsButton";
import { WriteUs } from "../shared/WriteUs/WriteUs";

export const HeroInfo = () => {
    const getTranslation = useTranslations("Hero");

    return (
        <div className="flex flex-col items-center pc:block pc:w-[35vw] desk:max-w-[535px] ">
            <h1
                className="text-xl mt-6 tab:mt-0 pc:static
                           tab:absolute tab:left-0 tab:top-0 tab:min-w-[381px] tab:max-w-[49vw] desk:text-2xl text-purple-200 dark:text-grey desk:mb-[108px]"
            >
                {getTranslation.rich("heroInfoText", {
                    br: () => <br />,
                })}
            </h1>
            <div className="flex flex-col gap-4 pc:gap-6 mt-6 tab:mt-[166px] pc:mt-[80px]">
                <WriteUs />
                <div className="relative">
                    <JoinUsButton />
                    <IconLowPolyBall className="absolute hidden tab:block top-[100%] left-[235px] pc:left-[243px] desk:left-[235px] w-[47px] pc:w-[55px] tab:w-[70px] text-purple-200 dark:text-white-200" />
                </div>
            </div>
        </div>
    );
};
