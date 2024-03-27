import Image from "next/image";

export interface FeedbackCardItemProps {
    data: {
        id: string;
        image?: string;
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
    const {
        image = "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146266/samples/dessert-on-a-plate.jpg",
        siteLink,
    } = data;
    const { siteName, siteView, reviewer, reviewerRole, feedbackText } =
        localizationData;

    const siteTypeUp = siteView?.toUpperCase();
    return (
        <div className="flex flex-col min-h-[405px] tab:min-h-[377px] border border-purple-stroke tab:border-0">
            <div className="tab:flex tab:flex-row-reverse tab:justify-between tab:gap-10 pc:gap-[90px]">
                <div className="relative">
                    <Image
                        src={image}
                        alt={siteName}
                        width={540}
                        height={346}
                        className=" object-cover min-w-[220px] h-[220px] tab:min-w-[320px] tab:h-[302px] pc:w-[540px] pc:h-[346px]"
                    />
                    <div className="tab:hidden absolute bottom-0 left-0 min-w-full h-[55px] bg-feedbackMobCardGradient">
                        <p className="font-caviar font-bold text-base mt-2 mb-1 ml-2 ">
                            {reviewer}
                        </p>
                        <p className="text-xs ml-2 ">{reviewerRole}</p>
                    </div>
                    <div className="tab:hidden absolute bottom-[15px] right-3">
                        <a href={siteLink}>
                            <Image
                                src="/images/webSiteIcon_opt.svg"
                                alt="siteLink"
                                width={24}
                                height={24}
                            />
                        </a>
                    </div>
                </div>

                <div className="h-[185px] tab:mb-6 my-4 px-2 tab:min-w-[360px] tab:max-w-[50%] pc:min-w-[450px] tab:my-0 tab:h-[302px]">
                    <Image
                        src="/images/quote_opt.svg"
                        alt="Quote"
                        width={48}
                        height={32}
                        className="hidden tab:block"
                    />
                    <p className="my-4 tab:hidden text-sm  h-[136px] ">
                        &ldquo; {feedbackText} &ldquo;
                    </p>
                    <p className="hidden tab:block tab:my-6 pc:my-[16px] font-light tab:text-base pc:text-xl tab:h-[139px] pc:h-[175px]">
                        {feedbackText}
                    </p>
                    <p className="hidden tab:block font-caviar font-bold text-base mb-1 pc:text-xl pc:font-geist pc:font-light ">
                        {reviewer}
                    </p>
                    <p className="hidden tab:block text-xs ">{reviewerRole}</p>
                </div>
            </div>
            <div className="hidden tab:flex tab:justify-between tab:gap-10 pc:gap-[90px] ">
                <div className="border-t border-b pt-[10px] pb-4 tab:py-[14px]  tab:min-w-[50%] border-grey tab:flex tab:justify-between ">
                    <div>
                        <h3 className="font-caviar text-baseb mb-[6px] tab:mb-[10px] pc:mb-[6px] pc:text-xlb   ">
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
