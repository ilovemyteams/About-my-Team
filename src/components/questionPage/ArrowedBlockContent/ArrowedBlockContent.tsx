import { LongAnswerListType } from "@/src/mockedData/questionsData";

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

    return (
        <div className="pc:pb-[60px] flex flex-col tab:flex-row">
            <div className="w-full tab:w-[61%] pc:w-[64%] desk:w-[62%]">
                {title && (
                    <h2 className="mb-10 tab:mb-16 pc:mb-20 font-caviar text-2xlb tab:text-4xl pc:text-5xl desk:text-6xl text-purple-200 dark:text-white-200">
                        <HighlightText
                            text={title}
                            toBeHighlighted={searchTerm}
                        />
                    </h2>
                )}
                {subtitle && (
                    <p className=" mb-6 tab:mb-10 desk:mb-15 text-greyLight dark:text-grey text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34">
                        <HighlightText
                            text={subtitle}
                            toBeHighlighted={searchTerm}
                        />
                    </p>
                )}
                {pieces.map((piece, idx) => {
                    return typeof piece !== "string" ? (
                        <p
                            key={idx}
                            className="text-greyLight dark:text-grey text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34"
                        >
                            {piece.title && (
                                <span className="font-caviar text-baseb pc:text-xlb desk:text-3xl text-purple-200 dark:text-white-200">
                                    <HighlightText
                                        text={`- ${piece.title}: `}
                                        toBeHighlighted={searchTerm}
                                    />
                                </span>
                            )}
                            <HighlightText
                                text={piece.text.join("")}
                                toBeHighlighted={searchTerm}
                            />
                        </p>
                    ) : (
                        <p>
                            <HighlightText
                                text={piece}
                                toBeHighlighted={searchTerm}
                            />
                        </p>
                    );
                })}
            </div>
            <div className="min-w-[76px] w-[26%] tab:w-[11%] pc:min-w-[110px] pc:w-[10%] desk:w-[8%] mx-auto mt-8 tab:mt-24 pc:mt-[8.25rem] desk:mt-32 text-redLight dark:text-red">
                <IconQADecoration className="-mt-2" />
            </div>
        </div>
    );
};
