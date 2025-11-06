import { PortableText, PortableTextComponents } from "next-sanity";
import React from "react";

import { PortableTextSimple } from "@/src/sanity/types";

import { HighlightText } from "../../shared/Search/HighlightText";
import { LayoutText } from "./LayoutText";

interface LayoutPortableTextBlockProps {
    value: PortableTextSimple;
    searchTerm: string;
}

const extractComponents = (searchTerm: string): PortableTextComponents => {
    return {
        block: {
            normal: ({ value: { children } }) => {
                return (
                    <LayoutText
                        searchTerm={searchTerm}
                        text={children[0].text}
                    />
                );
            },
            markered: ({ value: { children } }) => {
                return (
                    <div className=" flex gap-2 mb-3">
                        <div
                            className={` w-[20px] h-[20px] shrink-0 bg-[url('/images/pencil&ruler.svg')] bg-no-repeat bg-contain bg-center`}
                        ></div>
                        {/* // ? "min-h-[40px] tab:min-h-[46px] desk:min-h-[50px]" */}
                        <h4
                            className={`font-caviar text-purple-200 dark:text-white-200 text-lg desk:text-xl`}
                        >
                            <HighlightText
                                text={children[0].text}
                                toBeHighlighted={searchTerm}
                            />
                        </h4>
                    </div>
                );
            },
        },
        list: {
            bullet: ({ children }) => (
                <ul
                    className={`list-disc ml-12 text-sm20 tab:text-base23 desk:text-lg25 mb-6`}
                >
                    {children}
                </ul>
            ),
            // number: ({ children }) => <Ol>{children}</Ol>,
        },
        marks: {
            linkInternal: ({ value: { children } }) => {
                console.log("linkIntertnal", children);
                return (
                    <LayoutText
                        searchTerm={searchTerm}
                        text={children[0].text}
                    />
                );
            },
        },
    };
};

export const LayoutPortableTextBlock = ({
    value,
    searchTerm,
}: LayoutPortableTextBlockProps) => {
    return (
        <PortableText
            value={value}
            components={extractComponents(searchTerm)}
        />
    );
};
