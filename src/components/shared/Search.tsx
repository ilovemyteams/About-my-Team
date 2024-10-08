"use client";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { FormEvent } from "react";

import { IconSearch } from "./Icons/IconSearch";

type SearchProps = {
    defaultValue: string;
};

export const Search = ({ defaultValue }: SearchProps) => {
    const getTranslations = useTranslations("Buttons");

    const searchInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission
        const searchValue = searchInputRef.current?.value || "";
        const sanitizedValue = searchValue.trim().replace(/\s+/g, " ");

        if (!sanitizedValue) return;

        const queryString = new URLSearchParams({
            q: sanitizedValue,
        }).toString();

        window.location.href = `?${queryString}`;
    };

    return (
        <form
            method="GET"
            className="flex border-b-1 tab:border-none"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                name="q"
                minLength={3}
                maxLength={55}
                defaultValue={defaultValue}
                ref={searchInputRef}
                placeholder={getTranslations("search")}
            />
            <button type="submit">
                <IconSearch />
            </button>
            <p className="my-auto font-caviar text-sm tab:text-lg text-purple-200 dark:text-grey">
                {getTranslations("search")}
            </p>
        </form>
    );
};

export default Search;
