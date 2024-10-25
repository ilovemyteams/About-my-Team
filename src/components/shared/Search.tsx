"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import { IconCloseX } from "./Icons/IconCloseX";
import { IconSearch } from "./Icons/IconSearch";

export const Search = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const searchParams = useSearchParams();
    const defaultValue = searchParams.get("query")?.toString();
    const [inputValue, setInputValue] = useState(defaultValue || "");
    const [isInputFocused, setIsInputFocused] = useState(false);
    const getTranslations = useTranslations();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback(() => {
        const sanitizedValue = inputValue
            .trim()
            .replace(/[^\w\s\u0400-\u04FF\u0100-\u017F]|_/g, "")
            .replace(/\s+/g, " ");
        const params = new URLSearchParams(searchParams);
        sanitizedValue
            ? params.set("query", sanitizedValue)
            : params.delete("query");
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    useEffect(() => {
        handleSearch();
    }, [inputValue, handleSearch]);

    const handleClearInput = () => {
        setInputValue("");
        inputRef?.current?.focus();
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInputValue(e.target.value);
    };

    return (
        <label
            className={`flex w-full tab:w-[45%] pc:w-[35%] border-b-1  border-purple-200 dark:border-grey`}
        >
            <IconSearch className="text-greyLight dark:text-grey" />

            <input
                type="text"
                ref={inputRef}
                value={inputValue}
                placeholder={getTranslations("Q&A.searchInputPlaceholder")}
                onChange={handleChange}
                onFocus={() => {
                    setIsInputFocused(true);
                }}
                onBlur={() => setIsInputFocused(false)}
                className={`flex-grow h-[44px] text-purple-200 dark:text-grey placeholder:text-purple-strokeFormLabel focus:outline-none bg-transparent`}
            />

            {(inputValue || isInputFocused) && (
                <button
                    onClick={handleClearInput}
                    className="size-[44px] flex relative justify-center items-center icon-hover-rounded-purple"
                >
                    <IconCloseX className="size-4 stroke-[2.5] m-auto" />
                </button>
            )}
        </label>
    );
};

export default Search;
