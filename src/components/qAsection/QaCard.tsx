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
        <div className="container">
            <div className="flex flex-col tab:flex-row py-4 tab:gap-3 border-b-1 border-purple-stroke">
                <Image
                    src={image}
                    alt={imageAltText}
                    width="300"
                    height="200"
                    className="object-cover w-auto tab:w-[300px] h-[200px]"
                />

                <div className="flex flex-col justify-between">
                    <div className="flex justify-between">
                        <LikeButton likes={likes} />
                        <SharePopover className="" trigerShowShareText={true} />
                    </div>
                    <h2 className="font-caviar text-white-200 text-lg">
                        {questionText}
                    </h2>
                    <p className="font-geist text-sm text-grey">{answerText}</p>
                    <div className="flex justify-between">
                        <EstimatedReadingTime
                            className="text-purple-50"
                            text={answerText}
                        />
                        <button
                            onClick={() => alert("Transition to full article")}
                            className="font-geist text-purple-100 tab:text-purple-130 pc:text-purple-100 underline underline-offset-2"
                        >
                            {getTranslation("readMore")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
