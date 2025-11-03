import { MainContentProps } from "@/types/Faqs.types";

import { LayoutText } from "../shared/LayoutText";
import { LayoutTitle } from "../shared/LayoutTitle";
import { RedArrowDecoration } from "../shared/RedArrowDecoration";
import { NumberedListContentItem } from "./NumberedListContentItem";

export const NumberedListContent = ({
    content,
    searchTerm,
    title,
    topText,
}: MainContentProps) => {
    return (
        <div>
            {title && (
                <LayoutTitle
                    className="mb-6 tab:mb-10 pc:mb-16"
                    title={title}
                    searchTerm={searchTerm}
                />
            )}

            <div className="flex flex-col tab:flex-row justify-start gap-8 ">
                <div className="tab:w-[75%] pc:w-[56%] desk:w-[59%]">
                    {topText && (
                        <LayoutText
                            className="desk:mb-[80px] tab:w-[70%] pc:w-[56%] desk:w-[70%] mb-10 tab:mb-16 pc:mb-20"
                            text={topText}
                            searchTerm={searchTerm}
                        />
                    )}
                    {content && (
                        <ol className="tab:max-w-[517px] pc:max-w-[688px] desk:max-w-[836px] flex flex-col gap-6 tab:gap-10 pc:gap-[60px]">
                            {content.map((item, i) => (
                                <NumberedListContentItem
                                    key={i}
                                    item={item}
                                    indx={i}
                                    searchTerm={searchTerm}
                                />
                            ))}
                        </ol>
                    )}
                </div>

                <RedArrowDecoration />
            </div>
        </div>
    );
};
