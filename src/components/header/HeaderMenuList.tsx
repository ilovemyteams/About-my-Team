import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";

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
        { name: getTranslation("Q&A.pageTitle").toUpperCase(), id: "qa" },
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
                        href={`/${locale}#${id}`}
                        onClick={() => setIsHeaderMenuOpened(false)}
                        className="border-solid border-b-[1px] border-purple-stroke hover:border-grey transition-color duration-300 ease-out"
                    >
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
