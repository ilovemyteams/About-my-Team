import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export const MenuFooter = () => {
    const locale = useLocale();
    const getTranslation = useTranslations("Breadcrumbs");

    const menuList = [
        { name: getTranslation("breadcrumbItemHome"), path: "" },
        { name: getTranslation("breadcrumbItemAbout"), path: "about" },
        { name: getTranslation("breadcrumbItemServices"), path: "services" },
        { name: getTranslation("breadcrumbItemIvents"), path: "events" },
        { name: getTranslation("breadcrumbItemFaq"), path: "faq" },
    ];
    return (
        <ul className="tab:flex flex-start tab:gap-[20px] pc:gap-[28px] font-geist text-base desk:text-lg">
            {menuList.map(({ name, path }, idx) => (
                <li
                    key={idx}
                    className=" pc:my-0 pc:py-0.5 pc:p-[2px] leading-6 tracking-normal text-left"
                >
                    <div className="py-[10px] pl-1 tab:py-0">
                        <Link
                            href={`/${locale}/${path}`}
                            className="text-base desk:text-lg font-normal font-geist outline-none text-purple-200 dark:text-grey dark:pc:hover:text-red pc:hover:text-redLight 
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
