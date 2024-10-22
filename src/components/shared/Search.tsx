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
    const [isInputFoucsed, setIsInputFoucsed] = useState(false);
    const getTranslations = useTranslations();
    const pathname = usePathname();
    const { replace } = useRouter();

    const shouldIconBeLeft =
        (defaultValue && defaultValue?.length > 0) || isInputFoucsed;

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
                className={`flex relative ${isInputFoucsed || inputValue ? "tab:border-b-1 border-greyLight dark:border-grey" : "tab:border-b-1 border-transparent"} w-full`}
            >
                <button
                    onClick={() => inputRef?.current?.focus()}
                    className={`absolute left-0 text-greyLight dark:text-grey ${shouldIconBeLeft ? "" : "tab:right-0 tab:left-auto "}`}
                >
                    <IconSearch />
                </button>
                <input
                    type="text"
                    ref={inputRef}
                    value={inputValue}
                    placeholder={getTranslations("Buttons.search")}
                    onChange={handleChange}
                    onFocus={() => {
                        setIsInputFoucsed(true);
                    }}
                    onBlur={() => setIsInputFoucsed(false)}
                    className={`my-auto mx-[50px] h-[44px] placeholder:text-purple-200 dark:placeholder:text-grey focus:placeholder:text-transparent tab:placeholder:text-transparent focus:outline-none bg-transparent`}
                />
                {inputValue && (
                    <button
                        onClick={handleClearInput}
                        className="absolute right-0"
                    >
                        <IconCloseXBold />
                    </button>
                )}
            </div>
            <p
                className={`hidden tab:block my-auto font-caviar text-sm tab:text-lg text-purple-200 dark:text-grey`}
            >
                {getTranslations("Buttons.search")}
            </p>
        </div>
    );
};

export default Search;
