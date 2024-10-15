import Image from "next/image";

import { LongAnswerListType } from "@/src/mockedData/questionsData";

import { HighlightText } from "../../shared/HighlightText";

export const TableContentItem = ({
    content,
    searchTerm,
}: {
    content: LongAnswerListType;
    searchTerm: string;
}) => {
    const { title, text } = content;
    return (
        <div>
            <div className="flex gap-2 mb-6 pc:mb-[113px] mt-6">
                <div className="mt-[3px] w-[18px] h-[18px] dark:border-red border-redLight border-[3px]"></div>
                <h3 className="h-[50px] font-caviar text-xlb dark:text-white-200 text-purple-200">
                    <HighlightText text={title} toBeHighlighted={searchTerm} />
                </h3>
            </div>
            <ul>
                {text.map((item, index) => (
                    <li key={index} className="mb-6">
                        <div className="flex gap-2 mb-3">
                            <Image
                                src="/images/pencil&ruler.svg"
                                alt="icon pencil and ruler"
                                width={20}
                                height={20}
                            />
                            <h4 className="font-caviar text-lg">
                                {typeof item === "string" ? (
                                    <HighlightText
                                        text={item}
                                        toBeHighlighted={searchTerm}
                                    />
                                ) : (
                                    <HighlightText
                                        text={item.title}
                                        toBeHighlighted={searchTerm}
                                    />
                                )}
                            </h4>
                        </div>
                        {typeof item !== "string" && item.text && (
                            <ul className=" list-disc ml-12 text-sm ">
                                {Array.isArray(item.text) ? (
                                    item.text.map((subItem, i) => (
                                        <li key={i} className="">
                                            <HighlightText
                                                text={subItem}
                                                toBeHighlighted={searchTerm}
                                            />
                                        </li>
                                    ))
                                ) : (
                                    <li>
                                        <HighlightText
                                            text={item.text}
                                            toBeHighlighted={searchTerm}
                                        />
                                    </li>
                                )}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};
