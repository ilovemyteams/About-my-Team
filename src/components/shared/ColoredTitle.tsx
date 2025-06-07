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
        <p>
            {title.map((item, index) => (
                <span className={`tab:block ${className}`} key={index}>
                    {item}
                </span>
            ))}
        </p>
    );
};
