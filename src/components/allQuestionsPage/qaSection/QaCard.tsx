import { useTranslations } from "next-intl";

import { Link } from "@/src/i18n/routing";
import { QuestionType } from "@/types/Faqs.types";

import { EstimatedReadingTimeCounter } from "../../shared/EstimatedReadingTimeCounter";
import LikeButton from "../../shared/LikeButton";
import { SanityImage } from "../../shared/SanityImage";
import { HighlightText } from "../../shared/Search/HighlightText";

export interface FaqCardItemProps {
    data: QuestionType;
    searchTerm: string;
}

export const QaCard = ({
    data,

    searchTerm,
}: FaqCardItemProps) => {
    const getTranslation = useTranslations("Buttons");

    const {
        slug,
        question,
        shortAnswer,
        media,
        estimateReadTime,
        likedUserList,
        _id,
    } = data;

    return (
        <div className="flex flex-col tab:flex-row py-4 gap-3 tab:gap-3 border-b-1 border-purple-strokeLight dark:border-purple-stroke">
            <div
                className={`w-full tab:w-[300px] desk:w-[375px] shrink-0 grow-0 relative overflow-hidden`}
            >
                <div className="relative w-full max-w-[280px] tab:max-w-none mx-auto aspect-[280/200] tab:aspect-[300/200]">
                    <SanityImage
                        image={media.image}
                        metadata={media.metadata}
                        alt={media.caption}
                        width={375}
                        className="h-full w-full object-cover"
                    />
                </div>

                <SanityImage
                    image={media.image}
                    metadata={media.metadata}
                    alt={media.caption}
                    width={375}
                    className="absolute tab:hidden top-0 left-0 w-full h-full z-[-1] blur-xl object-cover"
                />
            </div>

            <div className="flex flex-col tab:pl-3 pc:px-3 desk:pl-4 justify-between">
                <div>
                    {slug && (
                        <>
                            <LikeButton docId={_id} likes={likedUserList} />
                            <Link
                                href={{
                                    pathname: `faq/${slug}`,
                                    query: searchTerm && `query=${searchTerm}`,
                                }}
                            >
                                {question && (
                                    <h2
                                        className="pc:hover:text-redLight dark:pc:hover:text-red
                    pc:focus:text-redLight dark:pc:focus:text-red focus:outline-none  dark:active:text-red active:text-redLight pc:transition pc:ease-out pc:duration-300 font-caviar text-purple-200 dark:text-white-200 text-lg tab:text-xlb desk:text-2xlb line-clamp-2 mb-3"
                                    >
                                        <HighlightText
                                            text={question}
                                            toBeHighlighted={searchTerm}
                                        />
                                    </h2>
                                )}
                            </Link>
                        </>
                    )}
                    {shortAnswer && (
                        <p className="text-sm tab:text-base line-clamp-3 text-greyLight dark:text-grey mb-2.5">
                            <HighlightText
                                text={shortAnswer}
                                toBeHighlighted={searchTerm}
                            />
                        </p>
                    )}
                </div>
                <div className="flex justify-between">
                    {estimateReadTime && (
                        <EstimatedReadingTimeCounter
                            className="text-purple-100 dark:text-purple-50 text-sm pc:text-base my-auto"
                            value={estimateReadTime}
                        />
                    )}
                    {slug && (
                        <Link
                            href={`faq/${slug}${searchTerm && `?query=${searchTerm}`}`}
                            className="mr-3 text-base text-purple-130 dark:text-purple-100 pc:hover:text-redLight dark:pc:hover:text-red
                    pc:focus:text-redLight dark:pc:focus:text-red focus:outline-none  dark:active:text-red active:text-redLight pc:transition pc:ease-out pc:duration-300 relative before:absolute before:bottom-[1px] before:w-full before:border-b before:border-current"
                        >
                            {getTranslation("readMore")}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};
