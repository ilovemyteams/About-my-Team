import { LongAnswerListTypeItem } from "@/src/mockedData/questionsData";

import { HighlightText } from "../../shared/Search/HighlightText";
import { TableContentText } from "./TableContentText";

export const TableContentItem = ({
    content,
    searchTerm,
}: {
    content: LongAnswerListTypeItem;
    searchTerm: string;
}) => {
    const { title, text } = content;

    return (
        <div>
            <div className="mb-6 pc:mb-[80px] mt-6 flex gap-2">
                {title && (
                    <>
                        <div className=" m-[3px] desk:m-[7px] w-[18px] shrink-0 h-[18px] dark:border-red border-redLight border-[3px]"></div>
                        <h3 className="min-h-[50px] desk:min-h-[70px]  font-caviar text-xlb desk:text-3xl dark:text-white-200 text-purple-200">
                            <HighlightText
                                text={title}
                                toBeHighlighted={searchTerm}
                            />
                        </h3>
                    </>
                )}
            </div>
            <ul>
                {text.map((item, index) => (
                    <TableContentText
                        item={item}
                        key={index}
                        searchTerm={searchTerm}
                    />
                ))}
            </ul>
        </div>
    );
};
