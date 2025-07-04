import { useLocale } from "next-intl";
import React from "react";

import { parsePolicyLinks } from "@/src/utils/parsePolicyLinks";
import { TextDocContentType } from "@/types/TextDocTypes";

import { IconCheck } from "../Icons/IconCheck";
import { TextDocHighlightedText } from "./TextDocHighlightedText";

export const TextDocBlock = ({ text, type }: TextDocContentType) => {
    const locale = useLocale();
    if (type === "subtitle") {
        return (
            <li className="first:mt-0 mt-4 tab:mt-5 pc:mt-7 desk:mt-8">
                <h3 className="font-caviar font-bold text-lg tab:text-xl text-purple-200 dark:text-white-200 pc:text-2xl24 desk:text-4xl">
                    <TextDocHighlightedText text={text} />
                </h3>
            </li>
        );
    }

    if (type === "list") {
        return (
            <li className="first:mt-0 mt-3 tab:mt-4 pc:mt-5 desk:mt-6">
                <ul className="flex flex-col gap-2 tab:gap-3 pc:gap-4">
                    {text.map((item, index) => (
                        <li className="first:mt-0" key={index}>
                            <p className="text-sm20 text-pretty ml-3 flex gap-2 tab:text-base23 tab:ml-8 pc:text-xl28 desk:text-2xl">
                                <IconCheck className="size-4 shrink-0 text-redLight dark:text-red tab:size-6 " />
                                {parsePolicyLinks(item, locale)}
                            </p>
                        </li>
                    ))}
                </ul>
            </li>
        );
    }

    return (
        <li className="first:mt-0 mt-4 tab:mt-5 pc:mt-7 desk:mt-8">
            <p className="text-sm20 text-pretty tab:text-base23 pc:text-xl28 desk:text-2xl">
                {parsePolicyLinks(text, locale)}
            </p>
        </li>
    );
};
