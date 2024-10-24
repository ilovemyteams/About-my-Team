import { useTranslations } from "next-intl";

import { getReadingTimeEstimation as rte } from "@/src/utils/getReadingTimeEstimation";

export type EstimatedReadingTimeCounterProps = {
    text: string;
    className?: string;
};

export const EstimatedReadingTimeCounter = ({
    text,
    className = "",
}: EstimatedReadingTimeCounterProps) => {
    const getTranslation = useTranslations("Badges");
    const readTime = rte(text);

    return (
        <p className={className}>{getTranslation("readTime", { readTime })}</p>
    );
};
