import { useTranslations } from "next-intl";

import { WriteUs } from "../../shared/WriteUs/WriteUs";
import { HeroClientList } from "./HeroClientList";

export const HeroInfo = () => {
    const getTranslation = useTranslations("Hero");

    return (
        <div className="flex flex-col tab:flex-row  tab:gap-[89px] w-full">
            <div className="tab:flex flex-col gap-[51px] tab:w-[50%] ">
                <h1
                    className="text-xl mt-5 tab:mt-0 tab:w-[360px] desk:w-[456px]
                           desk:text-2xl text-purple-200 dark:text-grey"
                >
                    {getTranslation.rich("heroInfoText", {
                        br: () => <br />,
                    })}
                </h1>
                <WriteUs
                    buttonName={getTranslation("btn")}
                    className="hidden tab:block"
                />
            </div>

            <div className=" relative flex flex-col gap-5 pc:gap-6 mt-5 tab:mt-0 mx-auto tab:mx-0">
                <HeroClientList />
                <WriteUs
                    buttonName={getTranslation("btn")}
                    className="tab:hidden"
                />
            </div>
        </div>
    );
};
