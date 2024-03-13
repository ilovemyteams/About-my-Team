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
                    fill
                    sizes="min-w-[100%] h-[220px]"
                    className="object-cover "
                />
                <div className="">
                    <div className="">
                        <Image
                            src="/images/quote.png"
                            alt="Quote"
                            width={48}
                            height={32}
                        />
                        <p>{feedbackText}</p>
                        <p>{reviewer}</p>
                        <p>{reviewerRole}</p>
                        <div>
                            <h3 className="font-caviar font-bold text-lg tab:text-xl mb-[6px]">
                                {siteName}
                            </h3>

                            <p className="text-xs tab:text-sm font-normal text-red mb-4">
                                {siteTypeUp}
                            </p>
                            <p>{siteLink}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
