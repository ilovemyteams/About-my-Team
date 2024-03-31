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
        <div className="flex flex-col tab:min-h-[377px] border border-purple-stroke tab:border-0 tab:min-w-[360px] tab:max-w-[50%] pc:min-w-[450px] pc:max-w-[41.66%]">
            <div className="tab:h-[302px]  px-2  ">
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
            <div className="tab:flex tab:justify-between tab:gap-10 pc:gap-[90px] ">
                <div className="border-t border-b pt-[10px] pb-4 tab:py-[14px]  tab:min-w-[50%] border-grey tab:flex tab:justify-between ">
                    <div>
                        <h3 className="font-caviar text-baseb tab:mb-[10px] pc:mb-[6px] pc:text-xlb   ">
                            {siteName}
                        </h3>

                        <p className="text-xs pc:text-sm font-light text-purple-50">
                            {siteTypeUp}
                        </p>
                    </div>
                    <div className="tab:mt-[25px]">
                        <a
                            href=""
                            className="block underline font-caviar text-lg"
                        >
                            {siteLink}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
