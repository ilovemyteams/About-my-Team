import React from "react";

import { TextType } from "@/src/mockedData/servicesData";

import { LayoutText } from "../shared/LayoutText";

interface TwoSideListTextProps {
    text: string | TextType[];
}

export const TwoSideListText = ({ text }: TwoSideListTextProps) => {
    if (typeof text === "string") {
        return <LayoutText text={text} />;
    }
    return (
        <ul>
            {text.map((item, index) => (
                <li
                    className={item.type === "listItem" ? "list-disc ml-6" : ""}
                    key={index}
                >
                    <LayoutText text={item.text} />
                </li>
            ))}
        </ul>
    );
};
