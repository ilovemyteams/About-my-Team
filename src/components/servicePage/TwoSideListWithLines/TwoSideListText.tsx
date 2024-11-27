import React from "react";

import { TextType } from "@/src/mockedData/servicesData";

interface TwoSideListTextProps {
    text: string | TextType[];
}

export const TwoSideListText = ({ text }: TwoSideListTextProps) => {
    const textStyle = "text-sm20 tab:text-base23 desk:text-lg25";
    if (typeof text === "string") {
        return <p className={textStyle}> {text}</p>;
    }
    return (
        <ul>
            {text.map((item, index) => (
                <li
                    className={item.type === "listItem" ? "list-disc ml-6" : ""}
                    key={index}
                >
                    <p className={textStyle}>{item.text}</p>
                </li>
            ))}
        </ul>
    );
};
