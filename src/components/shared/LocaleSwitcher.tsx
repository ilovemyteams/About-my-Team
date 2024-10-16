"use client";

import { useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { useEffect, useState } from "react";

import { locales } from "@/src/config";

const { Link, usePathname } = createSharedPathnamesNavigation({
    locales,
});

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

    return (
        <ul className="font-caviar flex gap-4 text-xlb text-purple-stroke">
            {locales.map(curLocale => (
                <li key={curLocale}>
                    <Link
                        href={{
                            hash: hash,
                            search: searchParams.toString(),
                            pathname: pathName,
                        }}
                        locale={curLocale}
                        scroll={false}
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
