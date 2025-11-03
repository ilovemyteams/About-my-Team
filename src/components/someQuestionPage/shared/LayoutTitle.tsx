import { twMerge } from "tailwind-merge";

import { HighlightText } from "../../shared/Search/HighlightText";

interface LayoutTitleProps {
    className?: string;
    title: string;
    searchTerm: string;
}

export const LayoutTitle = ({
    searchTerm,
    title,
    className,
}: LayoutTitleProps) => {
    return (
        <h2
            className={twMerge(
                "font-caviar text-purple-200 dark:text-white-200 text-2xl tab:text-4xl pc:text-5xl desk:text-6xl font-bold",
                className
            )}
        >
            <HighlightText text={title} toBeHighlighted={searchTerm} />
        </h2>
    );
};
