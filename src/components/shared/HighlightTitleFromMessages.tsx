import { useTranslations } from "next-intl";

interface HighlightTitleFromMessagesProps {
    title: string;
    text: string;
    className?: string;
}

export const HighlightTitleFromMessages = ({
    text,
    title,
    className,
}: HighlightTitleFromMessagesProps) => {
    const getTranslation = useTranslations(title);

    const translations = getTranslation.rich(text, {
        purple: chunk => <span className="text-purple-100">{chunk}</span>,
    });

    return (
        <h2
            className={`font-caviar font-bold text-purple-200 dark:text-grey text-2xl24 tab:text-4xl pc:text-5xl desk:text-6xl  ${className}`}
        >
            {translations}
        </h2>
    );
};
