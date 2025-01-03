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
        redChudov: chunk => (
            <a
                href=" https://www.linkedin.com/in/chudov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-redLight dark:text-red uppercase underline"
            >
                {chunk}
            </a>
        ),
        linkChudov: chunk => (
            <a
                href="https://www.choodov.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-redLight dark:text-red underline"
            >
                {chunk}
            </a>
        ),
    });

    return <p className={className}>{title}</p>;
};
