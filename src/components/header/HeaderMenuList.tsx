import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

interface HeaderMenuListProps {
    setIsHeaderMenuOpened: (
        value: boolean | ((prev: boolean) => boolean)
    ) => void;
}

export const HeaderMenuList = ({
    setIsHeaderMenuOpened,
}: HeaderMenuListProps) => {
    const locale = useLocale();
    const getTranslation = useTranslations("Breadcrumbs");

    const menuList = [
        { name: getTranslation("breadcrumbItemHome"), path: "" },
        { name: getTranslation("breadcrumbItemAbout"), path: "about" },
    ];
    return (
        <ul>
            {menuList.map(({ name, path }, idx) => (
                <li
                    key={idx}
                    className="font-caviar text-xlb tab:text-3xl mt-[20px] tab:[&:not(:first-child)]:mt-6 tab:first:mt-0 mb-2 pc:[&:not(:last-child)]:mb-[26px] pc:mt-0"
                >
                    <Link
                        href={`/${locale}/${path}`}
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
