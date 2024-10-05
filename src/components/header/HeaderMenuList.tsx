import Link from "next/link";
import { useLocale } from "next-intl";

import { useSettingsContext } from "@/src/utils/SettingsSanityContext";

interface HeaderMenuListProps {
    setIsHeaderMenuOpened: (
        value: boolean | ((prev: boolean) => boolean)
    ) => void;
}

export const HeaderMenuList = ({
    setIsHeaderMenuOpened,
}: HeaderMenuListProps) => {
    const locale = useLocale();
    const { data } = useSettingsContext();

    const menuList = data?.header?.navigationMenu || [];

    return (
        <ul>
            {menuList.map(({ titleMenu, linkInternal }, idx) => (
                <li
                    key={idx}
                    className="font-caviar text-xlb tab:text-3xl mt-[20px] tab:[&:not(:first-child)]:mt-6 tab:first:mt-0 mb-2 pc:[&:not(:last-child)]:mb-[26px] pc:mt-0"
                >
                    <Link
                        href={`/${locale}/${linkInternal}`}
                        onClick={() => setIsHeaderMenuOpened(false)}
                        className="border-solid border-b-[1px] dark:border-purple-stroke border-purple-strokeLight dark:pc:hover:border-grey 
                        pc:hover:border-purple-200 dark:active:border-grey active:border-purple-200 dark:pc:focus:border-grey pc:focus:border-purple-200 transition-color duration-300 ease-out 
                        outline-none"
                    >
                        {titleMenu}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
