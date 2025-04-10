import { sendGTMEvent } from "@next/third-parties/google";
import { useTranslations } from "next-intl";

import { useRouter } from "@/src/i18n/routing";

// import { WriteUs } from "../../shared/WriteUs/WriteUs";
import { Button } from "../../shared/Button";

export const HeroInfo = () => {
    const getTranslation = useTranslations("Hero");
    const router = useRouter();
    const onClickButton = () => {
        router.push(`/events`);
        sendGTMEvent({
            event: "easter_get_100_usd_button",
        });
    };

    return (
        <div className="flex flex-col items-center pc:block pc:w-[35vw] desk:max-w-[535px] ">
            <h1
                className="text-xl mt-6 tab:mt-0 pc:static
                           tab:absolute tab:left-0 tab:top-0 tab:min-w-[381px] tab:max-w-[40vw] desk:text-2xl text-purple-200 dark:text-grey desk:mb-[108px]"
            >
                {getTranslation.rich("heroInfoText", {
                    br: () => <br />,
                })}
            </h1>
            <div className=" relative flex flex-col gap-4 pc:gap-6 mt-6 tab:mt-[196px] pc:mt-[120px]">
                <Button onClick={onClickButton} className="">
                    {getTranslation("btn")}
                </Button>
            </div>
        </div>
    );
};
