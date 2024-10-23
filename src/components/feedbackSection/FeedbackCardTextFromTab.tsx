import { useTranslations } from "next-intl";

import { addProtocol } from "@/src/utils/addProtocol";

import { IconQuote } from "../shared/Icons/IconQuote";
import { FeedbackCardItemProps } from "./FeedbackCard";

export const FeedbackCardTextFromTab = ({
    feedback,
}: FeedbackCardItemProps) => {
    const getTranslation = useTranslations("Feedback");

    if (!feedback) return null;

    const {
        newWindow,
        projectCategory,
        projectName,
        projectURL,
        reviewText,
        reviewerName,
        reviewerPosition,
        feedbackLink,
    } = feedback;
    const siteTypeUp = projectCategory?.toUpperCase();

    return (
        <div className="flex flex-col tab:h-[377px] pc:h-[426px] ">
            <div className="tab:h-[302px] pc:h-[348px] ">
                <IconQuote
                    className={
                        "w-[48px] h-[32px] pc:w-[60px] pc:h-[40px] dark:text-red text-redLight"
                    }
                />
                <div className="tab:my-6 pc:my-[16px] tab:h-[139px] pc:h-[175px]">
                    {!feedbackLink && (
                        <p className="tab:text-base pc:text-xl">{reviewText}</p>
                    )}
                    {feedbackLink && (
                        <>
                            <p className="tab:text-base pc:text-xl tab:h-[103px] pc:h-[126px] pc:mb-2 overflow-hidden line-clamp-5 break-words">
                                {reviewText}
                            </p>
                            <a
                                target={newWindow ? "_blank" : ""}
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
                    {reviewerName}
                </p>
                <p className="text-xs text-purple-200 dark:text-white-200">
                    {reviewerPosition}
                </p>
            </div>
            <div className=" tab:flex tab:justify-between border-t border-b dark:border-purple-stroke border-purple-strokeLight pt-[10px] pb-4 tab:py-[14px] tab:min-w-[360px] pc:min-w-[450px] ">
                <div>
                    <h3 className="font-caviar text-baseb tab:mb-[10px] pc:mb-[6px] pc:text-xlb text-purple-200 dark:text-grey">
                        {projectName || ""}
                    </h3>

                    <p className="text-xs pc:text-sm font-light dark:text-purple-50 text-purple-130">
                        {siteTypeUp}
                    </p>
                </div>
                <div className="tab:mt-[25px]">
                    {projectURL && (
                        <a
                            target="_blank"
                            href={addProtocol(projectURL)}
                            rel="noopener noreferrer"
                            className="block border-b dark:border-grey border-greyLight dark:pc:hover:text-red dark:pc:hover:border-red pc:hover:border-redLight
                         pc:hover:text-redLight dark:active:text-red active:text-redLight dark:active:border-red active:border-redLight 
                         dark:pc:focus:text-red pc:focus:text-redLight dark:pc:focus:border-red pc:focus:border-redLight font-caviar text-lg outline-none
                         transition-color ease-out duration-300"
                        >
                            {projectURL}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
