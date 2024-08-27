import Image from "next/image";

import { addProtocol } from "@/src/utils/addProtocol";

import { IconFacebook } from "../shared/Icons/IconFacebook";
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
    const {
        image = "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146266/samples/dessert-on-a-plate.jpg",
        siteLink,
        feedbackLink,
    } = data;
    const { siteName, reviewer, reviewerRole, feedbackText } = localizationData;

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
                    <div className="flex gap-3 items-center">
                        <p className="font-caviar font-bold text-base mt-2 mb-1 ml-2">
                            {reviewer}
                        </p>
                        {feedbackLink && (
                            <a
                                target="_blank"
                                href={feedbackLink}
                                rel="noopener noreferrer"
                                className=" text-purple-130 dark:text-purple-50 dark:pc:hover:text-red pc:hover:text-redLight
                    dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300 dark:active:text-red active:text-redLight"
                            >
                                <IconFacebook />
                            </a>
                        )}
                    </div>
                    <p className="text-xs ml-2 ">{reviewerRole}</p>
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

            <div className="h-[170px] px-2 py-4">
                <p className="text-sm">&ldquo; {feedbackText} &ldquo;</p>
            </div>
        </div>
    );
};
