import Image from "next/image";

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
            <div className=" ">
                <Image
                    src={image}
                    alt={siteName}
                    width={540}
                    height={346}
                    className="object-cover "
                />
                <div className="mt-4">
                    <div className="">
                        <Image
                            src="/images/quote.png"
                            alt="Quote"
                            width={48}
                            height={32}
                        />
                        <p className="my-4 text-sm">{feedbackText}</p>
                        <p className="font-caviar font-bold text-base mb-1">
                            {reviewer}
                        </p>
                        <p className="text-xs mb-6">{reviewerRole}</p>
                        <div className="border-t border-b border-grey">
                            <h3 className="font-caviar text-baseb mt-2 mb-[6px] tab:text-xl ">
                                {siteName}
                            </h3>

                            <p className="text-xs tab:text-sm  text-purple-50">
                                {siteTypeUp}
                            </p>
                            <a href="" className="block mb-4 underline">
                                {siteLink}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
