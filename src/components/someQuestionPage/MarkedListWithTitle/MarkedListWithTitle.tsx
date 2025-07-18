import { LongAnswerListType } from "@/src/mockedData/questionsData";

import { IconCheck } from "../../shared/Icons/IconCheck";
import { HighlightText } from "../../shared/Search/HighlightText";
import { RedArrowDecoration } from "../shared/RedArrowDecoration";

interface MarkedListProps {
    content: LongAnswerListType;
    searchTerm: string;
}

export const MarkedListWithTitle = ({
    content,
    searchTerm,
}: MarkedListProps) => {
    const { title, data: items } = content;

    return (
        <div>
            {title && (
                <h2 className="mb-10 pc:mb-20 font-caviar text-2xlb tab:text-4xl pc:text-5xl desk:text-6xl text-purple-200 dark:text-white-200">
                    <HighlightText text={title} toBeHighlighted={searchTerm} />
                </h2>
            )}
            <div className="flex flex-col tab:flex-row gap-8 tab:gap-3 pc:gap-[29px] desk:gap-[32px]">
                <ul className="flex flex-col gap-5 tab:gap-6 w-full tab:w-[75%] pc:w-[56%] desk:w-[59%] pc:mb-[60px]">
                    {items.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="flex gap-2 tab:gap-3 items-start"
                            >
                                <div
                                    className={
                                        item.type === "unchecked"
                                            ? "hidden"
                                            : ""
                                    }
                                >
                                    <IconCheck className="w-4 tab:w-6 h-auto dark:text-red text-redLight" />
                                </div>
                                <div>
                                    {item.title && (
                                        <h3 className="font-caviar text-lg tab:text-xlb pc:text-2xlb desk:text-3xl text-purple-200 dark:text-white-200">
                                            <HighlightText
                                                text={item.title as string}
                                                toBeHighlighted={searchTerm}
                                            />
                                        </h3>
                                    )}
                                    <div className="max-w-full text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34 text-greyLight dark:text-grey">
                                        {Array.isArray(item.text) &&
                                            item.text.map((line, i) =>
                                                typeof line === "string" ? (
                                                    <HighlightText
                                                        key={i}
                                                        text={line}
                                                        toBeHighlighted={
                                                            searchTerm
                                                        }
                                                    />
                                                ) : (
                                                    //TODO we haven't desing like this:
                                                    <div key={i}>
                                                        {line.title && (
                                                            <h4 className="font-semibold">
                                                                {line.title}
                                                            </h4>
                                                        )}
                                                        {Array.isArray(
                                                            line.text
                                                        ) &&
                                                            line.text.map(
                                                                (
                                                                    subline,
                                                                    j
                                                                ) => (
                                                                    <p key={j}>
                                                                        {
                                                                            subline
                                                                        }
                                                                    </p>
                                                                )
                                                            )}
                                                    </div>
                                                )
                                            )}
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <RedArrowDecoration />
            </div>
        </div>
    );
};
