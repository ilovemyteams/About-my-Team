import { PortableText, PortableTextComponents } from "next-sanity";
import React from "react";
import { twMerge } from "tailwind-merge";

import { marginsForBlockType } from "@/sanity/constants";
import { PortableTextSimple } from "@/sanity/types";
import { Link as LocaleLink } from "@/src/i18n/routing";

import { HighlightText } from "../../shared/Search/HighlightText";

interface LayoutPortableTextBlockProps {
    value: PortableTextSimple;
    searchTerm: string;
}

const styleForNormalText =
    "text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34";

const styleForSmallText = "text-sm20 tab:text-base23 desk:text-lg25";
// const bulletListStyle =
//     "relative before:absolute before:w-[5px] before:h-[5px]  before:rounded-full before:bg-current before:top-[10px] before:-left-4";

const styleForSubtitle =
    "font-caviar inline text-purple-200 dark:text-white-200 font-semibold";
// const bulletListStyle = "marker:text-[16px] ";

const styleForLargeText =
    "text-lg leading-[1.278] desk:text-xl desk:leading-[1.25]";
const bulletList = "list-disc marker:text-[16px] marker:leading-none";
const bulletListItemStyle = "";

const extractComponents = (searchTerm: string): PortableTextComponents => {
    return {
        block: {
            normal: ({ children }) => {
                return (
                    <p className={twMerge(styleForNormalText)}>{children}</p>
                );
            },
            small: ({ children }) => {
                return <p className={twMerge(styleForSmallText)}>{children}</p>;
            },
            subtitle: ({ children }) => {
                return (
                    <h4 className={twMerge(styleForSubtitle)}>{children}</h4>
                );
            },
            subtitleWithIcon: ({ children }) => {
                return (
                    <div className={twMerge("inline-flex gap-2 mb-3")}>
                        <div
                            className={`w-[20px] h-[20px] shrink-0 bg-[url('/images/pencil&ruler.svg')] bg-no-repeat bg-contain bg-center`}
                        ></div>

                        <h4
                            className={`font-caviar text-purple-200 dark:text-white-200 text-lg desk:text-xl`}
                        >
                            {children}
                        </h4>
                    </div>
                );
            },
        },
        list: {
            bullet: ({ children }) => (
                <ul className={twMerge(bulletList, "ml-6")}>{children}</ul>
            ),
            bulletWithMargin: ({ children }) => {
                return (
                    <ul className={twMerge(bulletList, "ml-12")}>{children}</ul>
                );
            },
            // number: ({ children }) => <Ol>{children}</Ol>,
        },
        listItem: {
            bullet: ({ children }) => (
                <li className={twMerge(bulletListItemStyle)}>{children}</li>
            ),
            bulletWithMargin: ({ children }) => {
                return (
                    <li className={twMerge(bulletListItemStyle)}>{children}</li>
                );
            },
        },
        marks: {
            linkInternal: ({ text, value: { reference, newWindow } }) => {
                const newWindowParam = newWindow ? { target: "_blank" } : {};
                return (
                    <LocaleLink
                        className="link-style"
                        href={reference}
                        {...newWindowParam}
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
                    <span className="font-caviar inline text-purple-200 dark:text-white-200 font-semibold">
                        {props.children}
                    </span>
                );
            },

            small: props => {
                return (
                    <span className={twMerge(styleForSmallText)}>
                        {props.children}
                    </span>
                );
            },
            medium: props => {
                return (
                    <span className={twMerge(styleForNormalText)}>
                        {props.children}
                    </span>
                );
            },
            large: props => {
                return (
                    <span
                        className={twMerge(styleForLargeText, "inline-block")}
                    >
                        {props.children}
                    </span>
                );
            },
        },

        hardBreak: false,
        types: {
            margins: ({ value }) => {
                const { marginValue } = value;
                const { margin } =
                    marginsForBlockType.find(
                        item => item.value === marginValue
                    ) || marginsForBlockType[0];
                return (
                    <div
                        style={{
                            height: `${margin}px`,
                        }}
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
