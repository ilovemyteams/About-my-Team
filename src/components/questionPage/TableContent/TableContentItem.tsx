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
                <div className="mt-[3px] w-[18px] h-[18px] dark:border-red border-redLight border-[3px]"></div>
                <h3 className="h-[50px] font-caviar text-xlb dark:text-white-200 text-purple-200">
                    {title}
                </h3>
            </div>
            <ul>
                {text.map((item, index) => (
                    <li key={index} className="mb-6">
                        <div className="flex gap-2 mb-3">
                            <Image
                                src="/images/pencil&ruler.svg"
                                alt="icon pensil and ruler"
                                width={20}
                                height={20}
                            />
                            <h4 className="font-caviar text-lg">
                                {typeof item === "string" ? item : item.title}
                            </h4>
                        </div>
                        {typeof item !== "string" && item.text && (
                            <ul className=" list-disc ml-12 text-sm ">
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
