import { useTranslations } from "next-intl";
import React from "react";

import { ColoredText } from "./ColoredText";

interface ColoredTitleProps {
    categoryName: string;
    propName: string[];
    className?: string;
}

export const ColoredTitle = ({
    categoryName,
    propName,
    className,
}: ColoredTitleProps) => {
    const getTranslation = useTranslations(categoryName);

    const title = propName.map(item => {
        return getTranslation.rich(item, {
            purple: chunk => <ColoredText>{chunk}</ColoredText>,
        });
    });

    return (
        <p className="flex-inline tab:flex tab:flex-col">
            {title.map((item, index) => (
                <span
                    className={`[&:not(:last-child)]:mr-[5px] tab:[&:not(:last-child)]:mr-0 ${className}`}
                    key={index}
                >
                    {item}
                </span>
            ))}
        </p>
    );
};
