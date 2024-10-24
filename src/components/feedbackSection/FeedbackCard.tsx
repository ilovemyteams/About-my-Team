import Image from "next/image";
import { useTranslations } from "next-intl";

import { addProtocol } from "@/src/utils/addProtocol";

import { IconGoToSite } from "../shared/Icons/IconGoToSite";

export interface FeedbackCardItemProps {
    feedback: {
        _id: string;
        reviewText: string | null;
        feedbackLink: string | null;
        newWindow: boolean | null;
        altImage: string | null;
        asset: string | null;
        reviewerName: string | null;
        reviewerPosition: string | null;
        projectName: string | null;
        projectURL: string | null;
        projectCategory: string | null;
    };
}

export const FeedbackCard = ({ feedback }: FeedbackCardItemProps) => {
    const getTranslation = useTranslations("Feedback");
    if (!feedback) return null;

    const {
        altImage,
        asset,
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
    const reviewerRoleLow = reviewerPosition?.toLowerCase();

    return (
        <div className="flex flex-col min-h-[390px] border dark:border-purple-stroke border-purple-strokeLight">
            <div className="relative">
                <Image
                    src={asset || ""}
                    alt={altImage || ""}
                    width={540}
                    height={346}
                    className=" object-cover min-w-[220px] h-[220px] "
                />
                <div className="absolute bottom-0 left-0 min-w-full h-[55px] dark:bg-feedbackMobCardGradient bg-feedbackMobCardGradientLight text-purple-200 dark:text-white-200">
                    <p className="font-caviar font-bold text-base mt-2 mb-1 ml-2">
                        {projectName || ""}
                    </p>
                    <p className="text-xs pc:text-sm ml-2 font-light dark:text-purple-50 text-purple-130">
                        {siteTypeUp}
                    </p>
                </div>
                <div className="absolute bottom-[15px] right-3">
                    <a
                        target={newWindow ? "_blank" : ""}
                        href={projectURL || ""}
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
                            &ldquo; {reviewText} &ldquo;
                        </p>
                    )}
                    {feedbackLink && (
                        <>
                            <p className="text-sm h-[86px] overflow-hidden line-clamp-5 break-words">
                                &ldquo; {reviewText} &ldquo;
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
                    {reviewerName},
                    <span className="text-xxs leading-3">
                        {reviewerRoleLow}
                    </span>
                </p>
            </div>
        </div>
    );
};
