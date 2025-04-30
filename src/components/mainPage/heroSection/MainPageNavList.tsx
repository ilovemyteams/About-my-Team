import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { localeInURL } from "@/src/utils/localeInURL";

export const MainPageNavList = () => {
    const getTranslation = useTranslations();
    const navList = [
        { name: getTranslation("Portfolio.pageTitle"), id: "portfolio" },
        { name: getTranslation("Services.pageTitle"), id: "services" },
        { name: getTranslation("Feedback.pageTitle"), id: "feedback" },
        { name: getTranslation("Stages.pageTitle"), id: "stages" },
        { name: getTranslation("OurTeam.pageTitle"), id: "team" },
        { name: getTranslation("Q&A.pageTitle"), id: "faq" },
    ];
    const locale = useLocale();
    return (
        <ul className="flex flex-wrap gap-y-4 gap-x-4 justify-center mt-[52px] tab:justify-around tab:mt-0 pc:mt-[97px] tab:gap-8">
            {navList.map((content, idx) => (
                <li key={idx}>
                    <Link
                        href={`/${localeInURL(locale)}#${content.id}`}
                        className="text-sm desk:text-base dark:text-purple-50 text-purple-130 dark:pc:hover:text-red pc:hover:text-redLight
                dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300 dark:active:text-red active:text-redLight"
                    >
                        {content.name.toUpperCase()}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
