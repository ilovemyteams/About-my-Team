import React from "react";

import { DescriptionType } from "@/src/mockedData/servicesData";

import { LayoutText } from "../shared/LayoutText";
import { TextLineAnimatedListItem } from "./TextLineAnimatedListItem";
import { TextLineAnimatedText } from "./TextLineAnimatedText";

interface TextInLineListItemProps {
    content: DescriptionType;
}

export const TextInLineListItem = ({ content }: TextInLineListItemProps) => {
    const { text, icon, title } = content;

    return (
        <TextLineAnimatedListItem icon={icon}>
            {title && (
                <h4 className="pc:w-[390px] desk:w-[430px] grow-0 shrink-0 font-caviar text-purple-200 dark:text-white-200 text-lg tab:text-2xlb pc:text-3xl desk:text-4xl mb-4 tab:mb-6 pc:mb-0">
                    {title}
                </h4>
            )}
            <TextLineAnimatedText>
                <LayoutText text={text} className="pc:grow" />
            </TextLineAnimatedText>
        </TextLineAnimatedListItem>
    );
};
