import { useLocale } from "next-intl";

import { TextType } from "@/src/mockedData/servicesData";
import { parseTextWithLink } from "@/src/utils/parseTextWithLink";

interface LayoutTextArrayProps {
    text: string | TextType[];
    isSmall?: boolean;
    className?: string;
}

export const LayoutText = ({
    text,
    isSmall = false,
    className,
}: LayoutTextArrayProps) => {
    const locale = useLocale();

    const styleText = isSmall
        ? "text-sm20 tab:text-base23 desk:text-lg25"
        : "text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34";

    if (typeof text === "string") {
        return (
            <p className={`${styleText} ${className}`}>
                {parseTextWithLink(text, locale)}
            </p>
        );
    }

    return (
        <ul>
            {text.map((item, index) => (
                <li className="flex gap-[6px] pc:gap-2" key={index}>
                    {item.type === "listItem" && (
                        <span className="font-caviar font-bold ml-1">
                            {"\u2022"}
                        </span>
                    )}
                    <p className={`${styleText} ${className}`}>
                        {parseTextWithLink(item.text, locale)}
                    </p>
                </li>
            ))}
        </ul>
    );
};
