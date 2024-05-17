import Image from "next/image";
import { IconWebSite } from "../shared/Icons/IconWebSite";
import { addProtocol } from "@/src/utils/addProtocol";

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
                    <p className="font-caviar font-bold text-base mt-2 mb-1 ml-2">
                        {reviewer}
                    </p>
                    <p className="text-xs ml-2 ">{reviewerRole}</p>
                </div>
                <div className="absolute bottom-[15px] right-3">
                    <a target="_blank" href={addProtocol(siteLink)}>
                        <IconWebSite />
                    </a>
                </div>
            </div>

            <div className="h-[170px] px-2 py-4">
                <p className="text-sm">&ldquo; {feedbackText} &ldquo;</p>
            </div>
        </div>
    );
};
