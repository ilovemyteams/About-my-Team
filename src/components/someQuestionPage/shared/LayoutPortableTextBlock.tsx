import {
    PortableText,
    PortableTextBlock,
    PortableTextComponents,
} from "next-sanity";
import React from "react";
import { twMerge } from "tailwind-merge";

import { PortableTextSimple } from "@/sanity/types";
import { Link as LocaleLink } from "@/src/i18n/routing";

import { HighlightText } from "../../shared/Search/HighlightText";

interface LayoutPortableTextBlockProps {
    value: PortableTextSimple;
    searchTerm: string;
}

const applyAdditionalMarginsStyles = (value: PortableTextBlock) => {
    const isMarginLeftApply = value.children.find(item =>
        item.marks.includes("marginLeft")
    );

    const isMarginBottomSmApply = value.children.find(item =>
        item.marks.includes("marginBottomSm")
    );

    const isMarginBottomMdApply = value.children.find(item =>
        item.marks.includes("marginBottomMd")
    );

    return twMerge(
        isMarginLeftApply ? "ml-12" : "",
        isMarginBottomSmApply ? "mb-6" : "",
        isMarginBottomMdApply ? "mb-12" : ""
    );
};

const extractComponents = (searchTerm: string): PortableTextComponents => {
    return {
        block: {
            small: ({ children, value }) => {
                const marginStyles = applyAdditionalMarginsStyles(value);

                return (
                    <p
                        className={twMerge(
                            "text-sm20 tab:text-base23 desk:text-lg25",
                            marginStyles
                        )}
                    >
                        {children}
                    </p>
                );
            },
            medium: ({ children, value }) => {
                const marginStyles = applyAdditionalMarginsStyles(value);
                return (
                    <p
                        className={twMerge(
                            "text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34",
                            marginStyles
                        )}
                    >
                        {children}
                    </p>
                );
            },
            normal: ({ children, value }) => {
                const marginStyles = applyAdditionalMarginsStyles(value);
                return (
                    <p
                        className={twMerge(
                            "text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34",
                            marginStyles
                        )}
                    >
                        {children}
                    </p>
                );
            },

            markered: ({ value }) => {
                const { children } = value;
                const marginStyles = applyAdditionalMarginsStyles(value);
                return (
                    <div className={twMerge(" flex gap-2 mb-3", marginStyles)}>
                        <div
                            className={` w-[20px] h-[20px] shrink-0 bg-[url('/images/pencil&ruler.svg')] bg-no-repeat bg-contain bg-center`}
                        ></div>

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
            subtitle: ({ value }) => {
                const { children } = value;
                const marginStyles = applyAdditionalMarginsStyles(value);
                return (
                    <h4
                        className={twMerge(
                            `font-caviar text-purple-200 dark:text-white-200 text-lg desk:text-xl`,
                            marginStyles
                        )}
                    >
                        <HighlightText
                            text={children[0].text}
                            toBeHighlighted={searchTerm}
                        />
                    </h4>
                );
            },
        },
        list: {
            bullet: ({ children }) => (
                <ul className={`list-disc`}>{children}</ul>
            ),
            bulletWithMargin: ({ children }) => {
                return <ul className={`list-disc ml-12`}>{children}</ul>;
            },
            // number: ({ children }) => <Ol>{children}</Ol>,
        },
        marks: {
            linkInternal: ({ text, value: { reference, newWindow } }) => {
                return (
                    <LocaleLink
                        className="link-style"
                        href={reference}
                        target={newWindow ? "_blank" : "_self "}
                    >
                        <HighlightText
                            text={text}
                            toBeHighlighted={searchTerm}
                        />
                    </LocaleLink>
                );
            },
            linkExternal: props => {
                const {
                    text,
                    value: { url, newWindow },
                } = props;
                return (
                    <a
                        className="link-style"
                        href={url}
                        target={newWindow ? "_blank" : "_self "}
                    >
                        <HighlightText
                            text={text}
                            toBeHighlighted={searchTerm}
                        />
                    </a>
                );
            },
            linkEmail: ({ text, value: { email } }) => {
                return (
                    <a
                        className="link-style"
                        href={`mailto:${email}`}
                        key={email}
                    >
                        <HighlightText
                            text={text}
                            toBeHighlighted={searchTerm}
                        />
                    </a>
                );
            },
            caviar: props => {
                return (
                    <span className="font-caviar font-bold mr-2">
                        {props.children}
                    </span>
                );
            },
            marginBottomSm: props => {
                return props.children;
            },
            marginBottomMd: props => {
                return props.children;
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
