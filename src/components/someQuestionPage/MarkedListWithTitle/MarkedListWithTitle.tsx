import { MainContentProps } from "@/types/Faqs.types";

import { IconCheck } from "../../shared/Icons/IconCheck";
import { HighlightText } from "../../shared/Search/HighlightText";
import { LayoutPortableTextBlock } from "../shared/LayoutPortableTextBlock";
import { RedArrowDecoration } from "../shared/RedArrowDecoration";

export const MarkedListWithTitle = ({
    content,
    searchTerm,
    title,
    topText,
}: MainContentProps) => {
    return (
        <div>
            {title && (
                <h2 className="mb-10 pc:mb-20 font-caviar text-2xlb tab:text-4xl pc:text-5xl desk:text-6xl text-purple-200 dark:text-white-200">
                    <HighlightText text={title} toBeHighlighted={searchTerm} />
                </h2>
            )}
            <div className="flex flex-col tab:flex-row gap-8 tab:gap-3 pc:gap-[29px] desk:gap-[32px]">
                <div className="w-full tab:w-[75%] pc:w-[56%] desk:w-[59%] pc:mb-[60px]">
                    {topText && (
                        <p className="desk:mb-[80px]  text-greyLight dark:text-grey text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34 whitespace-pre-wrap mb-10 tab:mb-[64px] pc:mb-[80px]">
                            <HighlightText
                                text={topText}
                                toBeHighlighted={searchTerm}
                            />
                        </p>
                    )}
                    {content && (
                        <ul className="flex flex-col gap-5 tab:gap-6">
                            {content.map(
                                (
                                    { contentBlockText, contentBlockTitle },
                                    index
                                ) => (
                                    <li
                                        key={index}
                                        className="flex gap-2 tab:gap-3 items-start"
                                    >
                                        <div>
                                            <IconCheck className="w-4 tab:w-6 h-auto dark:text-red text-redLight" />
                                        </div>
                                        <div className="max-w-full  text-greyLight dark:text-grey">
                                            {contentBlockTitle && (
                                                <h3 className="font-caviar text-lg tab:text-xlb pc:text-2xlb desk:text-3xl text-purple-200 dark:text-white-200">
                                                    <HighlightText
                                                        text={contentBlockTitle}
                                                        toBeHighlighted={
                                                            searchTerm
                                                        }
                                                    />
                                                </h3>
                                            )}
                                            {contentBlockText && (
                                                <div className="max-w-full text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34 text-greyLight dark:text-grey">
                                                    <LayoutPortableTextBlock
                                                        value={contentBlockText}
                                                        searchTerm={searchTerm}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                )
                            )}
                        </ul>
                    )}
                </div>

                <RedArrowDecoration />
            </div>
        </div>
    );
};
