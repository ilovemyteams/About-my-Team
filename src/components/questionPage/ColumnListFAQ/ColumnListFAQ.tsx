import { LongAnswerListType } from "@/src/mockedData/questionsData";

import { HighlightText } from "../../shared/Search/HighlightText";

interface ColumnListProps {
    content: LongAnswerListType;
    searchTerm: string;
}

export const ColumnListFAQ = ({ content, searchTerm }: ColumnListProps) => {
    const { title, data: items } = content;

    return (
        <div className="mb-[80px] tab:mb-[100px] desk:mb-[120px]">
            {title && (
                <h3 className="font-caviar text-purple-200 dark:text-white-200 text-2xlb tab:text-4xl pc:text-5xl desk:text-6xl mb-10 tab:mb-[64px] pc:mb-[80px]">
                    <HighlightText
                        text={title as string}
                        toBeHighlighted={searchTerm}
                    />
                </h3>
            )}{" "}
            <ul className="tab:grid tab:gap-y-[42px] pc:gap-y-20 tab:grid-cols-[33%_34%_33%]">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="relative py-6 tab:py-0 tab:px-5 pc:px-[50px] last:pb-0 tab:last:pr-0 first:pt-0 
                        [&:nth-child(3n-2)]:tab:pl-0 border-b-[1px] tab:border-r-[1px] tab:border-b-0 border-redLight dark:border-red
                        tab:[&:nth-child(3n)]:border-none last:border-none tab:after:absolute after:w-[101%] after:h-[1px]
                         after:bg-redLight after:dark:bg-red after:-top-[21px] pc:after:-top-10 after:left-0
                         [&:nth-child(-n+3)]:after:hidden [&:nth-child(2n)]:origin-left [&:nth-child(2n+1)]:origin-right
                         tab:[&:nth-child(6n)]:origin-bottom-right tab:[&:nth-child(6n+3)]:origin-top-right 
                         tab:[&:nth-child(6n+1)]:origin-top-left tab:[&:nth-child(6n+4)]:origin-bottom-left
                         tab:[&:nth-child(6n+2)]:origin-top tab:[&:nth-child(6n+5)]:origin-bottom"
                    >
                        {item.title && (
                            <h4 className="font-caviar text-purple-200 dark:text-white-200 text-lg tab:text-xlb desk:text-3xl pc:text-2xlb mb-4">
                                <HighlightText
                                    text={item.title}
                                    toBeHighlighted={searchTerm}
                                />
                            </h4>
                        )}
                        <div className="text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34">
                            {Array.isArray(item.text) &&
                                item.text.map((line, i) =>
                                    typeof line === "string" ? (
                                        <HighlightText
                                            key={i}
                                            text={line}
                                            toBeHighlighted={searchTerm}
                                        />
                                    ) : (
                                        //TODO we haven't desing like this:
                                        <div key={i}>
                                            {line.title && (
                                                <h4 className="font-semibold">
                                                    {line.title}
                                                </h4>
                                            )}
                                            {Array.isArray(line.text) &&
                                                line.text.map((subline, j) => (
                                                    <p key={j}>{subline}</p>
                                                ))}
                                        </div>
                                    )
                                )}
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};
