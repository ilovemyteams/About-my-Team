import { PortableText, PortableTextComponents } from "next-sanity";
import React from "react";
import { twMerge } from "tailwind-merge";

import { PortableTextSimple } from "@/sanity/types";
import { Link as LocaleLink } from "@/src/i18n/routing";

import { HighlightText } from "../../shared/Search/HighlightText";

interface LayoutPortableTextBlockProps {
    value: PortableTextSimple;
    searchTerm: string;
}

const styleForNormalText =
    "text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34";

const extractComponents = (searchTerm: string): PortableTextComponents => {
    return {
        block: {
            normal: ({ children }) => {
                return (
                    <p className={twMerge(styleForNormalText)}>{children}</p>
                );
            },
            marginBottomSm: ({ children }) => {
                return (
                    <p className={twMerge(styleForNormalText, "mb-6")}>
                        {children}
                    </p>
                );
            },
            marginBottomMd: ({ children }) => {
                return (
                    <p className={twMerge(styleForNormalText, "mb-12")}>
                        {children}
                    </p>
                );
            },

            markered: ({ value }) => {
                const { children } = value;

                return (
                    <div className={twMerge(" flex gap-2 mb-3")}>
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

                return (
                    <h4
                        className={twMerge(
                            `font-caviar text-purple-200 dark:text-white-200 text-lg desk:text-xl`
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
                <ul className={`list-disc ml-6`}>{children}</ul>
            ),
            bulletWithMargin: ({ children }) => {
                return <ul className={`list-disc ml-12`}>{children}</ul>;
            },
            // number: ({ children }) => <Ol>{children}</Ol>,
        },
        listItem: {
            bullet: ({ children }) => (
                <li className={styleForNormalText}>{children}</li>
            ),
            bulletWithMargin: ({ children }) => {
                return <li className={styleForNormalText}>{children}</li>;
            },
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
            subtitle: props => {
                return (
                    <h4 className="font-caviar inline text-purple-200 dark:text-white-200 font-semibold">
                        {props.children}
                    </h4>
                );
            },
            subtitleWithIcon: props => {
                return (
                    <div className={twMerge("inline-flex gap-2")}>
                        <div
                            className={` w-[20px] h-[20px] shrink-0 bg-[url('/images/pencil&ruler.svg')] bg-no-repeat bg-contain bg-center`}
                        ></div>

                        <h4
                            className={`font-caviar text-purple-200 dark:text-white-200 text-lg desk:text-xl`}
                        >
                            {props.children}
                        </h4>
                    </div>
                );
            },
            small: props => {
                return (
                    <span
                        className={twMerge(
                            "text-sm20 tab:text-base23 desk:text-lg25"
                        )}
                    >
                        {props.children}
                    </span>
                );
            },
            large: props => {
                return (
                    <span className={twMerge("text-lg desk:text-xl")}>
                        {props.children}
                    </span>
                );
            },
        },
        types: {
            span: props => {
                console.log(props);
                return <span className="text-purple">span</span>;
            },
        },
        hardBreak: false,
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
