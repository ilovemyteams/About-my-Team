import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import { localeInURL } from "@/src/utils/localeInURL";

interface HeaderMenuListProps {
    setIsHeaderMenuOpened: (
        value: boolean | ((prev: boolean) => boolean)
    ) => void;
}

export const HeaderMenuList = ({
    setIsHeaderMenuOpened,
}: HeaderMenuListProps) => {
    const getTranslation = useTranslations();
    const menuList = [
        { name: getTranslation("Mission.pageTitle"), id: "mission" },
        { name: getTranslation("Portfolio.pageTitle"), id: "portfolio" },
        { name: getTranslation("Feedback.pageTitle"), id: "feedback" },
        { name: getTranslation("Services.pageTitle"), id: "services" },
        { name: getTranslation("OurTeam.pageTitle"), id: "team" },
        { name: getTranslation("Stages.pageTitle"), id: "stages" },
        { name: getTranslation("Q&A.pageTitle").toUpperCase(), id: "faq" },
    ];
    const locale = useLocale();
    return (
        <ul>
            {menuList.map(({ name, id }, idx) => (
                <li
                    key={idx}
                    className="font-caviar text-xlb tab:text-3xl mt-[20px] tab:[&:not(:first-child)]:mt-6 tab:first:mt-0 mb-2 pc:[&:not(:last-child)]:mb-[26px] pc:mt-0"
                >
                    <Link
                        href={`/${localeInURL(locale)}#${id}`}
                        onClick={() => setIsHeaderMenuOpened(false)}
                        className="border-solid border-b-[1px] dark:border-purple-stroke border-purple-strokeLight dark:pc:hover:border-grey 
                        pc:hover:border-purple-200 dark:active:border-grey active:border-purple-200 dark:pc:focus:border-grey pc:focus:border-purple-200 transition-color duration-300 ease-out 
                        outline-none"
                    >
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
