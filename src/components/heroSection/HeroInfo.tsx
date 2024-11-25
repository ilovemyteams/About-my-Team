import { useTranslations } from "next-intl";

import { JoinUsButton } from "../shared/JoinUsButton";
import { WriteUs } from "../shared/WriteUs/WriteUs";

export const HeroInfo = () => {
    const getTranslation = useTranslations("Hero");

    return (
        <div className="flex flex-col items-center pc:block pc:w-[50%] ">
            <h1
                className="text-xl mt-6 pc:mb-[154px] pc:static
                           tab:absolute tab:left-0 tab:top-0 tab:min-w-[381px] tab:max-w-[50vw] deskxl:text-2xl text-purple-200 dark:text-grey deskxl:mb-[173px]"
            >
                {getTranslation.rich("heroInfoText", {
                    br: () => <br />,
                })}
            </h1>
            <div className="flex flex-col gap-4 pc:gap-6 mt-6 tab:mt-[86px] pc:mt-[96px]">
                <WriteUs />
                <JoinUsButton />
            </div>
        </div>
    );
};
