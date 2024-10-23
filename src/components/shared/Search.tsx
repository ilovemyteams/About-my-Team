"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import { IconCloseXBold } from "./Icons/IconCloseXBold";
import { IconSearch } from "./Icons/IconSearch";

export const Search = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const searchParams = useSearchParams();
    const defaultValue = searchParams.get("q")?.toString();
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
        <div className="flex w-full tab:w-auto tab:justify-end  border-b-1 tab:border-none">
            <div
                role="form"
                className={`flex relative w-full border-b-1  border-purple-200 dark:border-grey`}
            >
                <button
                    onClick={() => inputRef?.current?.focus()}
                    className={`flex absolute left-0 text-greyLight dark:text-grey`}
                >
                    <IconSearch
                        className={
                            "rounded-full transition ease-out duration-300 hover:bg-purple-100 hover:bg-opacity-30"
                        }
                    />
                    {!isInputFocused && (
                        <p className="my-auto">
                            {getTranslations("Buttons.search")}
                        </p>
                    )}
                </button>
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
                    className={`my-auto mx-[50px] h-[44px] text-purple-200 dark:text-grey placeholder:text-transparent focus:placeholder:text-purple-strokeFormLabel focus:outline-none bg-transparent`}
                />
                {(inputValue || isInputFocused) && (
                    <button
                        onClick={handleClearInput}
                        className="absolute right-0 rounded-full transition ease-out duration-300 hover:bg-purple-100 hover:bg-opacity-30"
                    >
                        <IconCloseXBold />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Search;

// tab form ${isInputFocused || inputValue ? "tab:border-tab:purple-200 dark:tab:border-grey" : "tab:border-transparent dark:tab:border-transparent"}
// button const shouldIconBeLeft = isInputFocused || inputValue;
// button ${shouldIconBeLeft ? "" : "tab:right-0 tab:left-auto "}
