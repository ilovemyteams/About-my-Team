import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export const MenuFooter = () => {
    const getTranslation = useTranslations();

    const menuList = [
        { name: getTranslation("Mission.pageTitle"), id: "mission" },
        { name: getTranslation("Portfolio.pageTitle"), id: "portfolio" },
        { name: getTranslation("Feedback.pageTitle"), id: "feedback" },
        { name: getTranslation("Services.pageTitle"), id: "services" },
        { name: getTranslation("OurTeam.pageTitle"), id: "team" },
        { name: getTranslation("Stages.pageTitle"), id: "stages" },
    ];

    const locale = useLocale();
    return (
        <ul className="flex flex-start mr-[236px] gap-[24px] font-geist text-base [&>*:last-child]:mr-0 ">
            {menuList.map(({ name, id }, idx) => (
                <li
                    key={idx}
                    className="py-0.5 p-[2px] text-base leading-6 tracking-normal text-left"
                >
                    <Link
                        href={`/${locale}#${id}`}
                        className="text-base font-normal font-geist hover:text-red focus:text-red transition ease-out duration-300"
                    >
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
