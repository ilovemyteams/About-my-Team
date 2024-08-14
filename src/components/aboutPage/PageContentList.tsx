import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

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
            {contentList.map((content, idx) => (
                <li key={idx}>
                    <Link
                        href={`/${locale}/about#${content.id}`}
                        className="text-xs dark:text-purple-50 text-purple-130 dark:pc:hover:text-red pc:hover:text-redLight
                    dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300 dark:active:text-red active:text-redLight"
                    >
                        {content.name.toUpperCase()}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
