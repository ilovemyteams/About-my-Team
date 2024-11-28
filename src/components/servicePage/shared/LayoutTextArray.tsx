import React from "react";

import { TextType } from "@/src/mockedData/servicesData";

import { LayoutText } from "../shared/LayoutText";

interface LayoutTextArrayProps {
    text: string | TextType[];
    className?: string;
}

export const LayoutTextArray = ({ text, className }: LayoutTextArrayProps) => {
    if (typeof text === "string") {
        return <LayoutText text={text} className={className} />;
    }
    return (
        <ul>
            {text.map((item, index) => (
                <li
                    className={item.type === "listItem" ? "list-disc ml-6" : ""}
                    key={index}
                >
                    <LayoutText text={item.text} className={className} />
                </li>
            ))}
        </ul>
    );
};
