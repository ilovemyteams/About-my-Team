import { useTranslations } from "next-intl";

interface ColoredTextProps {
    propName: string;
    className?: string;
}

export const ColoredText = ({ propName, className }: ColoredTextProps) => {
    const getTranslation = useTranslations("Christmas");

    const title = getTranslation.rich(propName, {
        purple: chunk => <span className="text-purple-100">{chunk}</span>,
        red: chunk => (
            <span className="text-redLight dark:text-red">{chunk}</span>
        ),
    });

    return <p className={className}>{title}</p>;
};
