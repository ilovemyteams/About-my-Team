import { LongAnswerListTypeItem } from "@/src/mockedData/questionsData";

import { RedSquareBullet } from "../../shared/RedSquareBullet";
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
        <div className="pt-6">
            <div className="mb-6 pc:mb-[80px] flex gap-2">
                {title && (
                    <>
                        <RedSquareBullet classNames="m-[3px] desk:m-[7px]" />
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
