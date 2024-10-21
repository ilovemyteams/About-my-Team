import Image from "next/image";
import React from "react";

import { LongAnswerListType } from "@/src/mockedData/questionsData";

export const TableContentItem = ({
    content,
}: {
    content: LongAnswerListType;
}) => {
    const { title, text } = content;
    return (
        <div>
            <div className="flex gap-2 mb-6 pc:mb-[113px] mt-6">
                <div className="w-8 h-8 flex-shrink-0">
                    <Image
                        src="/images/pumpkin.png"
                        alt="pumpkin"
                        width={30}
                        height={30}
                    />
                </div>{" "}
                <h3 className="h-[50px] font-caviar text-xlb desk:text-3xl dark:text-white-200 text-purple-200">
                    {title}
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
                            <h4 className="font-caviar text-lg desk:text-xl">
                                {typeof item === "string" ? item : item.title}
                            </h4>
                        </div>
                        {typeof item !== "string" && item.text && (
                            <ul className=" list-disc ml-12 text-sm20 tab:text-base23 desk:text-lg25">
                                {Array.isArray(item.text) ? (
                                    item.text.map((subItem, i) => (
                                        <li key={i} className="">
                                            {subItem}
                                        </li>
                                    ))
                                ) : (
                                    <li>{item.text}</li>
                                )}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};
