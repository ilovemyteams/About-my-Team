import Image from "next/image";
import { FeedbackCardItemProps } from "./FeedbackCard";

export const FeedbackCardTextFromTab = ({
    data,
    localizationData,
}: FeedbackCardItemProps) => {
    const { siteLink } = data;
    const { siteName, siteView, reviewer, reviewerRole, feedbackText } =
        localizationData;

    const siteTypeUp = siteView?.toUpperCase();
    return (
        <div className="flex flex-col tab:h-[377px] pc:h-[426px] ">
            <div className="tab:h-[302px] pc:h-[348px] ">
                <Image
                    src="/images/quote_opt.svg"
                    alt="Quote"
                    width={48}
                    height={32}
                />
                <p className="tab:my-6 pc:my-[16px] font-light tab:text-base pc:text-xl tab:h-[139px] pc:h-[175px]">
                    {feedbackText}
                </p>
                <p className="font-caviar font-bold text-base mb-1 pc:text-xl pc:font-geist pc:font-light ">
                    {reviewer}
                </p>
                <p className="text-xs ">{reviewerRole}</p>
            </div>
            <div className=" tab:flex tab:justify-between border-t border-b dark:border-purple-stroke border-purple-strokeLight pt-[10px] pb-4 tab:py-[14px] tab:min-w-[360px] pc:min-w-[450px] ">
                <div>
                    <h3 className="font-caviar text-baseb tab:mb-[10px] pc:mb-[6px] pc:text-xlb   ">
                        {siteName}
                    </h3>

                    <p className="text-xs pc:text-sm font-light dark:text-purple-50 text-purple-130">
                        {siteTypeUp}
                    </p>
                </div>
                <div className="tab:mt-[25px]">
                    <a
                        href=""
                        className="block border-b dark:border-grey border-greyLight dark:pc:hover:text-red dark:pc:hover:border-red pc:hover:border-redLight
                         pc:hover:text-redLight dark:active:text-red active:text-redLight dark:active:border-red active:border-redLight 
                         dark:pc:focus:text-red pc:focus:text-redLight dark:pc:focus:border-red pc:focus:border-redLight font-caviar text-lg outline-none
                         transition-color ease-out duration-300"
                    >
                        {siteLink}
                    </a>
                </div>
            </div>
        </div>
    );
};
