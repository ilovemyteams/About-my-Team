import React from "react";

import { MainContentProps } from "@/types/Faqs.types";

import { HighlightText } from "../../shared/Search/HighlightText";
import { LayoutPortableTextBlock } from "../shared/LayoutPortableTextBlock";
import { LayoutTitle } from "../shared/LayoutTitle";

export const DescriptionListContent = ({
    content,
    searchTerm,
    title,
    topText,
}: MainContentProps) => {
    return (
        <div>
            {title && (
                <LayoutTitle
                    searchTerm={searchTerm}
                    title={title}
                    className="pc:max-w-[910px] desk:max-w-full  mb-10 tab:mb-[64px] pc:mb-[80px]"
                />
            )}

            {topText && (
                <p className="desk:mb-[80px] tab:w-[70%] pc:w-[56%] desk:w-[70%] text-greyLight dark:text-grey text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34 whitespace-pre-wrap mb-10 tab:mb-[64px] pc:mb-[80px]">
                    <HighlightText
                        text={topText}
                        toBeHighlighted={searchTerm}
                    />
                </p>
            )}

            {content && (
                <ul className="flex flex-col gap-6 tab:gap-10 pc:gap-[60px]">
                    {content.map(
                        ({ contentBlockText, contentBlockTitle }, index) => (
                            <li
                                key={index}
                                className="grid tab:grid-cols-[320px_1fr] pc:grid-cols-[370px_1fr] gap-4 tab:gap-10  pb-4 tab:pb-6 pc:pb-10 border-b-1 dark:border-purple-stroke"
                            >
                                {contentBlockTitle && (
                                    <p className="font-caviar text-lg tab:text-2xlb pc:text-3xl desk:text-4xl text-purple-100 dark:text-purple-50 tab:basis-[320px] pc:basis-[370px]">
                                        <HighlightText
                                            text={contentBlockTitle || ""}
                                            toBeHighlighted={searchTerm}
                                        />
                                    </p>
                                )}
                                {contentBlockText && (
                                    <LayoutPortableTextBlock
                                        searchTerm={searchTerm}
                                        value={contentBlockText}
                                    />
                                )}
                            </li>
                        )
                    )}
                </ul>
            )}
        </div>
    );
};
