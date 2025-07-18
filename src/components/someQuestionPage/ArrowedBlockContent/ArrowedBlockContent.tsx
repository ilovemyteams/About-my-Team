import { LongAnswerListType } from "@/src/mockedData/questionsData";

import { HighlightText } from "../../shared/Search/HighlightText";
import { RedArrowDecoration } from "../shared/RedArrowDecoration";
import { ArrowedText } from "./ArrowedText";
interface ArrowedBlockContentProps {
    content: LongAnswerListType;
    searchTerm: string;
}

export const ArrowedBlockContent = ({
    content,
    searchTerm,
}: ArrowedBlockContentProps) => {
    const { title, data } = content;

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
            <div className="flex flex-col tab:flex-row gap-8 tab:gap-0">
                <div className="w-full tab:w-[61%] pc:w-[64%] desk:w-[62%]">
                    <ul className="flex flex-col gap-5 tab:gap-6 desk:gap-10">
                        {data.map((item, index) => (
                            <ArrowedText
                                searchTerm={searchTerm}
                                data={item.text}
                                key={index}
                            />
                        ))}
                    </ul>
                </div>
                <RedArrowDecoration />
            </div>
        </div>
    );
};
