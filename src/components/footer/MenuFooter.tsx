import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { localeInURL } from "@/src/utils/localeInURL";

export const MenuFooter = () => {
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
        <ul className="tab:flex flex-start tab:gap-[20px] pc:gap-[28px] font-geist text-base deskxl:text-lg">
            {menuList.map(({ name, id }, idx) => (
                <li
                    key={idx}
                    className=" pc:my-0 pc:py-0.5 pc:p-[2px] leading-6 tracking-normal text-left"
                >
                    <div className="py-[10px] pl-1 tab:py-0">
                        <Link
                            href={`/${localeInURL(locale)}#${id}`}
                            className="text-base deskxl:text-lg font-normal font-geist outline-none text-purple-200 dark:text-grey dark:pc:hover:text-red pc:hover:text-redLight 
                            dark:pc:focus:text-red pc:focus:text-redLight dark:active:text-red active:text-redLight transition-color ease-out duration-300"
                        >
                            {name}
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    );
};
