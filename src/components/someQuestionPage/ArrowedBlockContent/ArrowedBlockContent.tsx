import { LongAnswerListType } from "@/src/mockedData/questionsData";

import { IconQADecoration } from "../../shared/Icons/IconQADecoration";
import { HighlightText } from "../../shared/Search/HighlightText";
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
        <div className="pc:pb-[60px] flex flex-col tab:flex-row">
            <div className="w-full tab:w-[61%] pc:w-[64%] desk:w-[62%]">
                {title && (
                    <h2 className="mb-10 pc:mb-20 font-caviar text-2xlb tab:text-4xl pc:text-5xl desk:text-6xl text-purple-200 dark:text-white-200">
                        <HighlightText
                            text={title}
                            toBeHighlighted={searchTerm}
                        />
                    </h2>
                )}
                <ul>
                    {data.map((item, index) => (
                        <ArrowedText
                            searchTerm={searchTerm}
                            data={item.text}
                            key={index}
                        />
                    ))}
                </ul>
            </div>
            <div className="w-[76px] pc:w-[110px] mx-auto mt-8 tab:mt-[4.5rem] pc:mt-[8.25rem] desk:mt-32 text-redLight dark:text-red">
                <IconQADecoration className="tab:sticky tab:top-[88px] pc:top-2" />
            </div>
        </div>
    );
};
