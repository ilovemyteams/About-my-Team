import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { localeInURL } from "@/src/utils/localeInURL";

export const PageContentList = () => {
    const getTranslation = useTranslations("AboutPage");
    const locale = useLocale();
    const contentList = [
        { name: getTranslation("contentItem1"), id: "founder" },
        { name: getTranslation("contentItem2"), id: "chronology" },
        { name: getTranslation("contentItem3"), id: "aboutteam" },
        { name: getTranslation("contentItem4"), id: "presentation" },
    ];
    return (
        <ul className="flex flex-wrap gap-y-4 gap-x-[18%] justify-between mb-6 tab:mb-0 tab:gap-4">
            {contentList.map(({ name, id }, idx) => (
                <li key={idx}>
                    <Link
                        href={`/${localeInURL(locale)}about#${id}`}
                        className="text-xs pc:text-sm desk:text-base dark:text-purple-50 text-purple-130 dark:pc:hover:text-red pc:hover:text-redLight
                    dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300 dark:active:text-red active:text-redLight"
                    >
                        {name.toUpperCase()}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
