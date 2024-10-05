import Link from "next/link";
import { useLocale } from "next-intl";

type NavigationMenu = Array<{
    linkInternal: string | null;
    titleMenu: string | null;
}> | null;

export const MenuFooter = ({ menuList }: { menuList: NavigationMenu }) => {
    const locale = useLocale();

    return (
        <ul className="tab:flex flex-start tab:gap-[20px] pc:gap-[28px] font-geist text-base deskxl:text-lg">
            {menuList &&
                menuList.map(({ titleMenu, linkInternal }, idx) => (
                    <li
                        key={idx}
                        className=" pc:my-0 pc:py-0.5 pc:p-[2px] leading-6 tracking-normal text-left"
                    >
                        <div className="py-[10px] pl-1 tab:py-0">
                            <Link
                                href={`/${locale}${linkInternal}`}
                                className="text-base deskxl:text-lg font-normal font-geist outline-none text-purple-200 dark:text-grey dark:pc:hover:text-red pc:hover:text-redLight 
                            dark:pc:focus:text-red pc:focus:text-redLight dark:active:text-red active:text-redLight transition-color ease-out duration-300"
                            >
                                {titleMenu}
                            </Link>
                        </div>
                    </li>
                ))}
        </ul>
    );
};
