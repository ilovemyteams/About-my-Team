import { useLocale } from "next-intl";

import { TextType } from "@/src/mockedData/servicesData";
import { parseTextWithLink } from "@/src/utils/parseTextWithLink";

interface ColumnTextProps {
    text: string | TextType[];
}

export const ColumnText = ({ text }: ColumnTextProps) => {
    const locale = useLocale();
    const textStyle = "text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34";

    if (typeof text === "string") {
        return <p className={textStyle}>{parseTextWithLink(text, locale)}</p>;
    }
    return (
        <ul>
            {text.map((item, index) => (
                <li
                    className={item.type === "listItem" ? "list-disc ml-6" : ""}
                    key={index}
                >
                    <p className={textStyle}>
                        {parseTextWithLink(item.text, locale)}
                    </p>
                </li>
            ))}
        </ul>
    );
};
