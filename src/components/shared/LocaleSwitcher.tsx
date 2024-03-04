"use client";
import { useLocale } from "next-intl";
import { locales } from "../../i18n";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
                            curLocale === locale
                                ? " text-red"
                                : " text-purple-stroke"
                        }
                    >
                        {curLocale}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
