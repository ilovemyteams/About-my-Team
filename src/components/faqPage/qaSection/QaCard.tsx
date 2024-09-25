"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { EstimatedReadingTimeCounter } from "../../shared/EstimatedReadingTimeCounter";
import LikeButton from "../../shared/LikeButton";
import { SharePopover } from "../../shared/SharePopover";
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
        <div className="flex flex-col tab:flex-row py-4 tab:gap-3 border-b-1 border-purple-strokeLight dark:border-purple-stroke">
            <Image
                src={image}
                alt={imageAltText}
                width="300"
                height="200"
                className="object-cover w-auto tab:w-[300px] h-[200px] tab:my-auto"
            />

            <div className="flex flex-col tab:pl-3 pc:px-3">
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
                    <EstimatedReadingTimeCounter
                        className="text-purple-100 dark:text-purple-50"
                        text={answerText}
                    />
                    <button
                        onClick={() => alert("Transition to full article")}
                        className="mr-3 text-purple-130 dark:text-purple-100 pc:hover:text-redLight dark:pc:hover:text-red
                    pc:focus:text-redLight dark:pc:focus:text-red focus:outline-none pc:transition pc:ease-out pc:duration-300 relative before:absolute before:bottom-1 before:w-full before:border-b before:border-purple-130 dark:before:border-purple-100 pc:hover:before:border-redLight dark:pc:hover:before:border-red pc:focus:before:border-redLight dark:pc:focus:before:border-red pc:before:transition pc:before:ease-out pc:before:duration-300"
                    >
                        {getTranslation("readMore")}
                    </button>
                </div>
            </div>
        </div>
    );
};
