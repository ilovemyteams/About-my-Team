"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { ChangeEvent } from "react";

import { IconSearch } from "./Icons/IconSearch";

export const Search = () => {
    const getTranslations = useTranslations();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const defaultValue = searchParams.get("q")?.toString();

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const searchValue = e.target.value || "";
        const sanitizedValue = searchValue.trim().replace(/\s+/g, " ");

        if (!sanitizedValue) return;

        const params = new URLSearchParams(searchParams);
        sanitizedValue ? params.set("q", sanitizedValue) : params.delete("q");
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <form method="GET" className="flex border-b-1 tab:border-none">
            <input
                type="text"
                minLength={3}
                maxLength={55}
                defaultValue={defaultValue}
                placeholder={getTranslations("Buttons.search")}
                onChange={handleSearch}
            />
            <button type="submit">
                <IconSearch />
            </button>
            <p className="my-auto font-caviar text-sm tab:text-lg text-purple-200 dark:text-grey">
                {getTranslations("Buttons.search")}
            </p>
        </form>
    );
};

export default Search;
