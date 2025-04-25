import { useTranslations } from "next-intl";

import { addProtocol, removeProtocol } from "@/src/utils/addProtocol";

import { IconQuote } from "../../shared/Icons/IconQuote";
import { FeedbackCardItemProps } from "./FeedbackCard";

export const FeedbackCardTextFromTab = ({
    data,
    localizationData,
}: FeedbackCardItemProps) => {
    const getTranslation = useTranslations("Feedback");

    const { siteLink, feedbackLink } = data;
    const { siteName, siteView, reviewer, reviewerRole, feedbackText } =
        localizationData;

    const siteTypeUp = siteView?.toUpperCase();

    return (
        <div className="flex flex-col tab:h-[377px] pc:h-[426px] desk:h-[506px]">
            <div className="tab:h-[302px] pc:h-[348px] desk:h-[428px]">
                <IconQuote
                    className={
                        "w-[48px] h-[32px] pc:w-[60px] pc:h-[40px] dark:text-red text-redLight"
                    }
                />
                <div className="tab:my-6 pc:my-[16px] tab:h-[139px] pc:h-[209px] desk:h-[276px]">
                    {!feedbackLink && (
                        <p className="tab:text-base pc:text-xl overflow-hidden line-clamp-[7] break-words">
                            {feedbackText}
                        </p>
                    )}
                    {feedbackLink && (
                        <>
                            <p className="tab:text-base pc:text-xl desk:text-2xl tab:h-[103px] pc:h-[180px] desk:h-[248px] pc:mb-2 overflow-hidden line-clamp-5 pc:line-clamp-[7] desk:line-clamp-[8] break-words">
                                {feedbackText}
                            </p>
                            <a
                                target="_blank"
                                href={addProtocol(feedbackLink)}
                                rel="noopener noreferrer"
                                className="text-purple-100 text-sm pc:text-base border-b border-purple-100 dark:pc:hover:text-red pc:hover:text-redLight
                dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300 dark:active:text-red active:text-redLight
                dark:active:border-red active:border-redLight dark:pc:hover:border-red pc:hover:border-redLight
                dark:pc:focus:border-red pc:focus:border-redLight"
                            >
                                {getTranslation("feedbackLink")}
                            </a>
                        </>
                    )}
                </div>
                <p className="font-caviar font-bold text-base mb-1 pc:text-xl pc:font-geist pc:font-light text-purple-200 dark:text-white-200">
                    {reviewer}
                </p>
                <p className="text-xs desk:text-sm text-purple-200 dark:text-white-200">
                    {reviewerRole}
                </p>
            </div>
            <div className=" tab:flex tab:justify-between border-t border-b dark:border-purple-stroke border-purple-strokeLight pt-[10px] pb-4 tab:py-[14px] tab:min-w-[360px] pc:min-w-[450px] ">
                <div>
                    <h3 className="font-caviar text-baseb tab:mb-[10px] pc:mb-[6px] pc:text-xlb text-purple-200 dark:text-grey">
                        {siteName}
                    </h3>

                    <p className="text-xs pc:text-sm font-light dark:text-purple-50 text-purple-130">
                        {siteTypeUp}
                    </p>
                </div>
                <div className="tab:mt-[25px]">
                    <a
                        target="_blank"
                        href={addProtocol(siteLink)}
                        rel="noopener noreferrer"
                        className="block border-b dark:border-grey border-greyLight dark:pc:hover:text-red dark:pc:hover:border-red pc:hover:border-redLight
                         pc:hover:text-redLight dark:active:text-red active:text-redLight dark:active:border-red active:border-redLight 
                         dark:pc:focus:text-red pc:focus:text-redLight dark:pc:focus:border-red pc:focus:border-redLight font-caviar text-lg outline-none
                         transition-color ease-out duration-300"
                    >
                        {removeProtocol(siteLink)}
                    </a>
                </div>
            </div>
        </div>
    );
};
