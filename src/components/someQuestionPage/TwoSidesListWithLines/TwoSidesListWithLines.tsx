import { MainContentProps } from "@/types/Faqs.types";

import { HighlightText } from "../../shared/Search/HighlightText";
import { LayoutTitle } from "../shared/LayoutTitle";
import { TwoSidesListItem } from "./TwoSidesListItem";

export const TwoSidesListWithLines = ({
    content,
    searchTerm,
    title,
    topText,
}: MainContentProps) => {
    return (
        <div>
            {title && (
                <LayoutTitle
                    title={title}
                    searchTerm={searchTerm}
                    className="mb-10 tab:mb-[64px] pc:mb-[80px]"
                />
            )}
            {topText && (
                <p className="mb-6 tab:mb-10 desk:mb-[80px] tab:w-[70%] pc:w-[56%] desk:w-[53%] text-greyLight dark:text-grey text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34 whitespace-pre-wrap">
                    <HighlightText
                        text={topText}
                        toBeHighlighted={searchTerm}
                    />
                </p>
            )}
            {content && (
                <ul className="pc:pb-[60px]">
                    {content.map(
                        ({ contentBlockText, contentBlockTitle }, index) => (
                            <TwoSidesListItem
                                key={index}
                                title={contentBlockTitle}
                                text={contentBlockText}
                                searchTerm={searchTerm}
                            />
                        )
                    )}
                </ul>
            )}
        </div>
    );
};
