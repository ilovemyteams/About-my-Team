import Image from "next/image";
import { ButtonShare } from "../shared/ButtonShare";

export interface FeedbackCardItemProps {
    data: {
        id: string;
        image: string;
        video?: string;
        siteLink: string;
    };
    localizationData: {
        siteName: string;
        siteView: string;
        reviewer: string;
        reviewerRole: string;
        feedbackText: string;
    };
}

export const FeedbackCard = ({
    data,
    localizationData,
}: FeedbackCardItemProps) => {
    const { image, siteLink } = data;
    const { siteName, siteView, reviewer, reviewerRole, feedbackText } =
        localizationData;

    const siteTypeUp = siteView?.toUpperCase();
    return (
        <div className="flex flex-col min-h-[595px] tab:min-h-[377px]">
            <div className="tab:flex tab:flex-row-reverse tab:gap-10 pc:gap-[90px]">
                <Image
                    src={image}
                    alt={siteName}
                    width={540}
                    height={346}
                    className="object-cover min-w-[220px] h-[220px] tab:w-[320px] tab:h-[302px] pc:w-[540px] pc:h-[346px]"
                />

                <div className="h-[239px] mb-6 mt-4 tab:w-[360px] pc:w-[450px] tab:my-0 tab:h-[302px]">
                    <Image
                        src="/images/quote_opt.svg"
                        alt="Quote"
                        width={48}
                        height={32}
                    />
                    <p className="my-4 tab:my-6 pc:my-[16px] text-sm tab:text-base pc:text-xl h-[136px] tab:h-[139px] pc:h-[175px]">
                        {feedbackText}
                    </p>
                    <p className="font-caviar font-bold text-base mb-1 pc:text-xl pc:font-geist pc:font-light ">
                        {reviewer}
                    </p>
                    <p className="text-xs ">{reviewerRole}</p>
                </div>
            </div>
            <div className=" pc:mt-0 tab:flex  tab:justify-between tab:gap-[90px]">
                <div className="border-t border-b pt-[10px] pb-4 tab:py-[14px] border-grey tab:flex tab:justify-between tab:w-[360px] pc:min-w-[450px] pc:max-w-[50%]">
                    <div>
                        <h3 className="font-caviar text-baseb mb-[6px] tab:mb-[10px] pc:mb-[6px] pc:text-xlb   ">
                            {siteName}
                        </h3>

                        <p className="text-xs pc:text-sm pc:font-light text-purple-50">
                            {siteTypeUp}
                        </p>
                    </div>
                    <div className="tab:flex tab:mt-[25px]">
                        <a
                            href=""
                            className="block underline font-caviar text-lg"
                        >
                            {siteLink}
                        </a>
                    </div>
                </div>
                <div className="hidden tab:block mt-10">
                    <ButtonShare className=" " />
                </div>
            </div>
        </div>
    );
};
