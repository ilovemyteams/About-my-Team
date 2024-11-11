import { LongAnswerListType } from "@/src/mockedData/questionsData";
import { ListTextItemType } from "@/src/mockedData/questionsData";

import { IconQADecoration } from "../../shared/Icons/IconQADecoration";
import { HighlightText } from "../../shared/Search/HighlightText";

interface ArrowedBlockContentProps {
    content: LongAnswerListType;
    searchTerm: string;
}

export const ArrowedBlockContent = ({
    content,
    searchTerm,
}: ArrowedBlockContentProps) => {
    const { title, data } = content;
    const subtitle = data[0].text.join("");
    const pieces = data[1].text;

    const processedText = (piece: string | ListTextItemType) => {
        if (typeof piece === "string") return piece;
        const title = piece.title ? `- ${piece.title}: ` : "";
        const text = piece.text.join("");
        return title + text;
    };
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
                {subtitle && (
                    <p className=" mb-5 tab:mb-6 desk:mb-10 text-greyLight dark:text-grey text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34">
                        <HighlightText
                            text={subtitle}
                            toBeHighlighted={searchTerm}
                        />
                    </p>
                )}
                {pieces.map((piece, idx) => {
                    return (
                        <p
                            key={idx}
                            className="text-greyLight dark:text-grey text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34"
                        >
                            <HighlightText
                                text={processedText(piece)}
                                toBeHighlighted={searchTerm}
                            />
                        </p>
                    );
                })}
            </div>
            <div className="min-w-[76px] w-[26%] tab:min-w-[76px] tab:w-[11%] tab:max-w-[110px] pc:min-w-[110px] pc:w-[10%] desk:min-w-[110px] desk:w-[8%] mx-auto mt-8 tab:mt-[4.5rem] pc:mt-[8.25rem] desk:mt-32 text-redLight dark:text-red">
                <IconQADecoration className="tab:sticky tab:top-0" />
            </div>
        </div>
    );
};
