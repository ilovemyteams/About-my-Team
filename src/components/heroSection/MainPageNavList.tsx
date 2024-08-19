import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { localeInURL } from "@/src/utils/localeInURL";

export const MainPageNavList = () => {
    const getTranslation = useTranslations();
    const navList = [
        { name: getTranslation("Mission.pageTitle"), id: "mission" },
        { name: getTranslation("Portfolio.pageTitle"), id: "portfolio" },
        { name: getTranslation("Feedback.pageTitle"), id: "feedback" },
        { name: getTranslation("Services.pageTitle"), id: "services" },
        { name: getTranslation("OurTeam.pageTitle"), id: "team" },
        { name: getTranslation("Stages.pageTitle"), id: "stages" },
        { name: getTranslation("Q&A.pageTitle"), id: "faq" },
    ];
    const locale = useLocale();
    return (
        <ul className="flex flex-wrap gap-y-4 gap-x-[18%] justify-center tab:justify-between mt-[40px] tab:mt-[56px] pc:mt-[46px] tab:gap-4">
            {navList.map((content, idx) => (
                <li key={idx}>
                    <Link
                        href={`/${localeInURL(locale)}#${content.id}`}
                        className="text-xs pc:text-sm desk:text-base dark:text-purple-50 text-purple-130 dark:pc:hover:text-red pc:hover:text-redLight
                dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300 dark:active:text-red active:text-redLight"
                    >
                        {content.name.toUpperCase()}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
