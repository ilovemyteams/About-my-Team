import { PortableText, PortableTextComponents } from "next-sanity";
import React from "react";

import { PortableTextSimple } from "@/sanity/types";

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
