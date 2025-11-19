import { MainContentProps } from "@/types/Faqs.types";

import { HighlightText } from "../../shared/Search/HighlightText";
import { LayoutPortableTextBlock } from "../shared/LayoutPortableTextBlock";
import { RedArrowDecoration } from "../shared/RedArrowDecoration";

export const ArrowedBlockContent = ({
    content,
    searchTerm,
    title,
    topText,
}: MainContentProps) => {
    return (
        <div className="pc:pb-[60px]">
            {title && (
                <div className="w-full tab:w-[61%] pc:w-[64%] desk:w-[62%]">
                    <h2 className="mb-10 pc:mb-20 font-caviar text-2xlb tab:text-4xl pc:text-5xl desk:text-6xl text-purple-200 dark:text-white-200">
                        <HighlightText
                            text={title}
                            toBeHighlighted={searchTerm}
                        />
                    </h2>
                </div>
            )}
            {topText && (
                <p className="desk:mb-[80px] tab:w-[70%] pc:w-[56%] desk:w-[70%] text-greyLight dark:text-grey text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34 whitespace-pre-wrap mb-10 tab:mb-[64px] pc:mb-[80px]">
                    <HighlightText
                        text={topText}
                        toBeHighlighted={searchTerm}
                    />
                </p>
            )}
            <div className="flex flex-col tab:flex-row gap-8 tab:gap-0">
                <div className="w-full tab:w-[61%] pc:w-[64%] desk:w-[62%]">
                    {content && (
                        <ul className="flex flex-col gap-5 tab:gap-6 desk:gap-10">
                            {content.map(({ contentBlockText }, index) => (
                                <li key={index}>
                                    {contentBlockText && (
                                        <LayoutPortableTextBlock
                                            searchTerm={searchTerm}
                                            value={contentBlockText}
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <RedArrowDecoration />
            </div>
        </div>
    );
};
