import { LongAnswerListTypeItem } from "@/src/mockedData/questionsData";

import { IconQADecoration } from "../../shared/Icons/IconQADecoration";
import { HighlightText } from "../../shared/Search/HighlightText";
import { LayoutTitle } from "../shared/LayoutTitle";
import { ListContentItem } from "./ListContentItem";

interface ListContentProps {
    content: LongAnswerListTypeItem[];
    searchTerm: string;
    title?: string;
}

export const ListContent = ({
    content,
    searchTerm,
    title,
}: ListContentProps) => {
    return (
        <div>
            {title && (
                <LayoutTitle className="mb-6 tab:mb-10 pc:mb-16">
                    <HighlightText text={title} toBeHighlighted={searchTerm} />
                </LayoutTitle>
            )}
            <div className="flex flex-col tab:flex-row justify-start gap-8">
                <ol className="tab:max-w-[517px] pc:max-w-[688px] desk:max-w-[836px] flex flex-col gap-6 tab:gap-10 pc:gap-[60px]">
                    {content.map((item, i) => (
                        <ListContentItem
                            key={i}
                            item={item}
                            indx={i}
                            searchTerm={searchTerm}
                        />
                    ))}
                </ol>
                <div className="text-redLight dark:text-red mx-auto w-[76px] pc:w-[110px]">
                    <IconQADecoration className="block tab:sticky tab:top-[15%]" />
                </div>
            </div>
        </div>
    );
};
