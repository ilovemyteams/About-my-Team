import Image from "next/image";
import { useTranslations } from "next-intl";

import { addProtocol } from "@/src/utils/addProtocol";

import { IconGoToSite } from "../shared/Icons/IconGoToSite";

export interface FeedbackCardItemProps {
    data: {
        id: string;
        image?: string;
        video?: string;
        siteLink: string;
        feedbackLink?: string;
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
    const getTranslation = useTranslations("Feedback");

    const {
        image = "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146266/samples/dessert-on-a-plate.jpg",
        siteLink,
        feedbackLink,
    } = data;
    const { siteName, reviewer, siteView, reviewerRole, feedbackText } =
        localizationData;
    const siteTypeUp = siteView?.toUpperCase();
    const reviewerRoleLow = reviewerRole?.toLowerCase();

    return (
        <div className="flex flex-col min-h-[390px] border dark:border-purple-stroke border-purple-strokeLight">
            <div className="relative">
                <Image
                    src={image}
                    alt={siteName}
                    width={540}
                    height={346}
                    className=" object-cover min-w-[220px] h-[220px] "
                />
                <div className="absolute bottom-0 left-0 min-w-full h-[55px] dark:bg-feedbackMobCardGradient bg-feedbackMobCardGradientLight text-purple-200 dark:text-white-200">
                    <p className="font-caviar font-bold text-base mt-2 mb-1 ml-2">
                        {siteName}
                    </p>
                    <p className="text-xs pc:text-sm ml-2 font-light dark:text-purple-50 text-purple-130">
                        {siteTypeUp}
                    </p>
                </div>
                <div className="absolute bottom-[15px] right-3">
                    <a
                        target="_blank"
                        href={addProtocol(siteLink)}
                        rel="noopener noreferrer"
                    >
                        <IconGoToSite />
                    </a>
                </div>
            </div>

            <div className="h-[186px] px-2 pt-4 pb-2 flex flex-col justify-between">
                <div>
                    {!feedbackLink && (
                        <p className="text-sm h-[120px]">
                            &ldquo; {feedbackText} &ldquo;
                        </p>
                    )}
                    {feedbackLink && (
                        <>
                            <p className="text-sm h-[86px] overflow-hidden line-clamp-5 break-words">
                                &ldquo; {feedbackText} &ldquo;
                            </p>
                            <a
                                target="_blank"
                                href={addProtocol(feedbackLink)}
                                rel="noopener noreferrer"
                                className="text-purple-100 text-sm border-b border-purple-100 dark:pc:hover:text-red pc:hover:text-redLight
                dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300 dark:active:text-red active:text-redLight
                dark:active:border-red active:border-redLight dark:pc:hover:border-red pc:hover:border-redLight
                dark:pc:focus:border-red pc:focus:border-redLight"
                            >
                                {getTranslation("feedbackLink")}
                            </a>
                        </>
                    )}
                </div>

                <p className="font-caviar font-bold text-sm">
                    {reviewer},{" "}
                    <span className="text-xxs leading-3">
                        {reviewerRoleLow}
                    </span>
                </p>
            </div>
        </div>
    );
};
