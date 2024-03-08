import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";

export const HeaderMenuList = () => {
    const getTranslation = useTranslations();
    const menuList = [
        { name: getTranslation("Mission.pageTitle"), id: "mission" },
        { name: getTranslation("Portfolio.pageTitle"), id: "portfolio" },
        { name: getTranslation("Feedback.pageTitle"), id: "feedback" },
        { name: getTranslation("Services.pageTitle"), id: "services" },
        { name: getTranslation("Stages.pageTitle"), id: "stages" },
        { name: getTranslation("OurTeam.pageTitle"), id: "team" },
    ];
    const locale = useLocale();
    return (
        <ul>
            {menuList.map(({ name, id }, idx) => (
                <li
                    key={idx}
                    className="font-caviar text-3xl [&:not(:last-child)]:mb-[26px]"
                >
                    <Link
                        href={`/${locale}#${id}`}
                        className="border-solid border-b-[1px] border-purple-stroke hover:border-transparent transition-color duration-300 ease-out"
                    >
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
