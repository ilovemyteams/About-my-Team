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
        <>
            <div className=" tab:flex tab:flex-row-reverse tab:justify-between tab:gap-[90px]">
                <div>
                    <Image
                        src={image}
                        alt={siteName}
                        fill
                        sizes="min-w-[100%] h-[220px] tab:min-w-[50%] tab:h-[400px]"
                        className="object-cover "
                    />
                    <div className="  mt-4 pc:mt-0">
                        <Image
                            src="/images/quote.png"
                            alt="Quote"
                            width={48}
                            height={32}
                        />
                        <p className="my-4 text-sm pc:text-xl h-[136px]">
                            {feedbackText}
                        </p>
                        <p className="font-caviar font-bold text-base mb-1 pc:text-xl pc:font-geist pc:font-light ">
                            {reviewer}
                        </p>
                        <p className="text-xs mb-6">{reviewerRole}</p>
                    </div>
                </div>
                <div className="mt-4 pc:mt-0 tab:flex  tab:justify-between tab:gap-[90px]">
                    <div className="border-t border-b pt-[10px] pb-4 border-grey tab:flex tab:justify-between pc:min-w-[450px] pc:max-w-[50%]">
                        <div>
                            <h3 className="font-caviar text-baseb mb-[6px] pc:text-xlb  tab:text-xl ">
                                {siteName}
                            </h3>

                            <p className="text-xs tab:text-sm pc:font-light text-purple-50">
                                {siteTypeUp}
                            </p>
                        </div>
                        <div className="tab:flex tab:items-end">
                            <a href="" className="block underline pc:text-lg">
                                {siteLink}
                            </a>
                        </div>
                    </div>
                    <div className="hidden tab:block ">
                        <ButtonShare className="mt-[45px] pc:text-lg" />
                    </div>
                </div>
            </div>
        </>
    );
};
