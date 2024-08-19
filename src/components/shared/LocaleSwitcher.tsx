"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

import { locales } from "@/src/config";
import { switchLocaleInURL } from "@/src/utils/localeInURL";

const activeStyle = "outline-none dark:text-red text-redLight";
const inactiveStyle = "outline-none dark:text-purple-stroke text-disabledLight";

export default function LocaleSwitcher() {
    const locale = useLocale();
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const [hash, setHash] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHash(window.location.hash);
        }
    }, [pathName, searchParams]);

    const redirectedPathName = (locale: string) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        if (segments.length > 2) {
            switchLocaleInURL(locale) === ""
                ? segments.splice(1, 1)
                : (segments[1] = switchLocaleInURL(locale));
            return hash ? `${segments.join("/")}${hash}` : segments.join("/");
        }
        if (segments.length <= 2) {
            const condition =
                segments[1] !== "" &&
                segments[1] !== "pl" &&
                segments[1] !== "en";
            condition
                ? segments.splice(1, 0, switchLocaleInURL(locale))
                : (segments[1] = switchLocaleInURL(locale));

            return hash ? `${segments.join("/")}${hash}` : segments.join("/");
        }
        segments[1] = switchLocaleInURL(locale);

        return hash ? `${segments.join("/")}${hash}` : segments.join("/");
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
