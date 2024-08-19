"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

import { locales } from "@/src/config";

const activeStyle = "outline-none dark:text-red text-redLight";
const inactiveStyle = "outline-none dark:text-purple-stroke text-disabledLight";

export default function LocaleSwitcher() {
    const locale = useLocale();

    const pathName = usePathname();

    const redirectedPathName = (locale: string) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");

        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <ul className="font-caviar flex gap-4 text-xlb text-purple-stroke">
            {locales.map(curLocale => (
                <li key={curLocale}>
                    <Link
                        href={redirectedPathName(curLocale)}
                        className={
                            curLocale === locale ? activeStyle : inactiveStyle
                        }
                    >
                        {curLocale}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
