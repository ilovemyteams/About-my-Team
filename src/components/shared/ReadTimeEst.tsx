import { useTranslations } from "next-intl";

import { readingTimeEstimation as rte } from "@/src/utils/readingTimeEstimation";

export type ReadTimeEstProps = {
    text: string;
    className?: string;
};

export const ReadTimeEst = ({ text, className = "" }: ReadTimeEstProps) => {
    const getTranslation = useTranslations("Badges");
    const readTime = rte(text);
    const textValue =
        readTime > 1
            ? getTranslation("readTimePlural")
            : getTranslation("readTimeSingular");
    return (
        <p className={className}>
            {readTime}
            {textValue}
        </p>
    );
};
