import { CurrentQuestionMainContentItemType } from "@/types/Faqs.types";

import { RedSquareBullet } from "../../shared/RedSquareBullet";
import { HighlightText } from "../../shared/Search/HighlightText";
import { LayoutPortableTextBlock } from "../shared/LayoutPortableTextBlock";

export const TableContentItem = ({
    content,
    searchTerm,
}: {
    content: CurrentQuestionMainContentItemType;
    searchTerm: string;
}) => {
    const { contentBlockText, contentBlockTitle } = content;

    return (
        <div className="pt-6">
            <div className="mb-6 pc:mb-[80px] flex gap-2">
                {contentBlockTitle && (
                    <>
                        <RedSquareBullet classNames="m-[3px] desk:m-[7px]" />
                        <h3 className="min-h-[50px] desk:min-h-[70px]  font-caviar text-xlb desk:text-3xl dark:text-white-200 text-purple-200">
                            <HighlightText
                                text={contentBlockTitle}
                                toBeHighlighted={searchTerm}
                            />
                        </h3>
                    </>
                )}
            </div>
            {contentBlockText && (
                <LayoutPortableTextBlock
                    value={contentBlockText}
                    searchTerm={searchTerm}
                />
            )}
            {/* <ul>
                {text.map((item, index) => (
                    <TableContentText
                        item={item}
                        key={index}
                        searchTerm={searchTerm}
                    />
                ))}
            </ul> */}
        </div>
    );
};
