import { useTranslations } from "next-intl";

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
            <div className=" relative flex flex-col gap-4 pc:gap-6 mt-6 tab:mt-[196px] pc:mt-[120px]">
                <WriteUs />
            </div>
        </div>
    );
};
