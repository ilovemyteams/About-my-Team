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
        { name: getTranslation("Stages.pageTitle"), id: "stages" },
        { name: getTranslation("OurTeam.pageTitle"), id: "team" },
    ];
    const locale = useLocale();
    return (
        <ul>
            {menuList.map(({ name, id }, idx) => (
                <li
                    key={idx}
                    className="font-caviar text-baseb pc:text-3xl mt-[28px] pc:[&:not(:last-child)]:mb-[26px]"
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
