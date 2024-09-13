import Image from "next/image";
import { useTranslations } from "next-intl";

import { EstimatedReadingTime } from "../shared/EstimatedReadingTime";
import LikeButton from "../shared/LikeButton";
import { SharePopover } from "../shared/SharePopover";
export interface FaqCardItemProps {
    data: {
        id: number;
        image?: string;
        likes: number;
    };
    localizationData: {
        questionText: string;
        answerText: string;
        imageAltText: string;
    };
}

export const QaCard = ({ data, localizationData }: FaqCardItemProps) => {
    const getTranslation = useTranslations("Buttons");

    const {
        image = "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146266/samples/dessert-on-a-plate.jpg",
        likes,
    } = data;

    const { questionText, answerText, imageAltText } = localizationData;

    return (
        <div className="container mb-3 tab:mb-2.5 flex flex-col tab:flex-row py-4 tab:gap-3 border-b-1 border-purple-strokeLight dark:border-purple-stroke">
            <Image
                src={image}
                alt={imageAltText}
                width="300"
                height="200"
                className="object-cover w-auto tab:w-[300px] h-[200px] tab:my-auto"
            />

            <div className="flex flex-col">
                <div className="flex justify-between">
                    <LikeButton likes={likes} />
                    <SharePopover className="" trigerShowShareText={true} />
                </div>
                <h2 className="font-caviar text-purple-200 dark:text-white-200 text-lg tab:text-xlb line-clamp-2 mb-2.5">
                    {questionText}
                </h2>
                <p className="text-sm tab:text-base line-clamp-3 text-greyLight dark:text-grey mb-2.5">
                    {answerText}
                </p>
                <div className="flex justify-between">
                    <EstimatedReadingTime
                        className="text-purple-100 dark:text-purple-50"
                        text={answerText}
                    />
                    <button
                        onClick={() => alert("Transition to full article")}
                        className="text-purple-130 dark:text-purple-100 dark:tab:text-purple-130 dark:pc:text-purple-100 relative before:absolute before:bottom-1 before:w-full before:border-b before:border-purple-130 dark:before:border-purple-100 dark:tab:before:border-purple-130 dark:pc:before:border-purple-100"
                    >
                        {getTranslation("readMore")}
                    </button>
                </div>
            </div>
        </div>
    );
};
