import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import {
    QADataType,
    QAItemLocalizationTextType,
} from "@/src/mockedData/questionsData";
import { getTextString } from "@/src/utils/getTextString";
import { LikesTypes } from "@/src/utils/likeDataHandler";

import { EstimatedReadingTimeCounter } from "../../shared/EstimatedReadingTimeCounter";
import LikeButton from "../../shared/LikeButton";

export interface FaqCardItemProps {
    data: QADataType;
    localizationData: QAItemLocalizationTextType;
    likes: LikesTypes[];
}

export const QaCard = ({ data, localizationData, likes }: FaqCardItemProps) => {
    const getTranslation = useTranslations("Buttons");

    const { image, slug } = data;

    const {
        questionText,
        shortAnswerText,
        imageAltText,
        fullAnswerContent,
        fullAnswerTopText,
        fullAnswerBottomText,
    } = localizationData;

    const fullAnswerTextString = getTextString(fullAnswerContent);

    const allTexts = `${shortAnswerText.join(" ")} ${fullAnswerTopText?.join(" ") || ""} ${fullAnswerBottomText?.join(" ") || ""} ${fullAnswerTextString}`;

    return (
        <div className="flex flex-col tab:flex-row py-4 gap-3 tab:gap-3 border-b-1 border-purple-strokeLight dark:border-purple-stroke">
            <Image
                src={image}
                alt={imageAltText}
                width={300}
                height={200}
                className="h-[200px] aspect-[3/2] mb-"
            />

            <div className="flex flex-col tab:pl-3 pc:px-3 justify-between">
                <div>
                    <div className="justify-between h-12 flex">
                        <LikeButton questionSlug={slug} likes={likes} />
                    </div>

                    <h2 className="font-caviar text-purple-200 dark:text-white-200 text-lg tab:text-xlb desk:text-2xlb line-clamp-2 mb-2.5">
                        {questionText}
                    </h2>
                    <p className="text-sm tab:text-base desk:text-lg desk:font-light line-clamp-[8] tab:line-clamp-3 text-greyLight dark:text-grey mb-2.5">
                        {shortAnswerText.join(" ")}
                    </p>
                </div>
                <div className="flex justify-between">
                    <EstimatedReadingTimeCounter
                        className="text-purple-100 dark:text-purple-50 text-sm pc:text-base my-auto"
                        text={allTexts}
                    />
                    <Link
                        href={`faq/${slug}`}
                        className="mr-3 text-base text-purple-130 dark:text-purple-100 pc:hover:text-redLight dark:pc:hover:text-red
                    pc:focus:text-redLight dark:pc:focus:text-red focus:outline-none  dark:active:text-red active:text-redLight pc:transition pc:ease-out pc:duration-300 relative before:absolute before:bottom-[1px] before:w-full before:border-b before:border-current"
                    >
                        {getTranslation("readMore")}
                    </Link>
                </div>
            </div>
        </div>
    );
};
