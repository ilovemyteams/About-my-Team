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
        <ul className="flex flex-wrap gap-y-4 justify-between mb-6">
            {contentList.map((content, idx) => (
                <li key={idx}>
                    <Link
                        href={`/${locale}/about#${content.id}`}
                        className="text-xs dark:text-purple-50 text-purple-130"
                    >
                        {content.name.toUpperCase()}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
