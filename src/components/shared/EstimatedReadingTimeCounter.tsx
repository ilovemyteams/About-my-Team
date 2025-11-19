import { useTranslations } from "next-intl";

export type EstimatedReadingTimeCounterProps = {
    value: number;
    className?: string;
};

export const EstimatedReadingTimeCounter = ({
    value,
    className = "",
}: EstimatedReadingTimeCounterProps) => {
    const getTranslation = useTranslations("Badges");

    return (
        <p className={className}>
            {getTranslation("readTime", { readTime: value })}
        </p>
    );
};
