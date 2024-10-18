"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import { IconCloseXBold } from "./Icons/IconCloseXBold";
import { IconSearch } from "./Icons/IconSearch";

export const Search = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isInputFoucsed, setIsInputFoucsed] = useState(false);
    const getTranslations = useTranslations();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const defaultValue = searchParams.get("q")?.toString();

    const shouldIconBeLeft =
        (defaultValue && defaultValue?.length > 0) || isInputFoucsed;

    const handleSearch = useDebouncedCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            const searchValue = e.target.value || "";
            const sanitizedValue = searchValue.trim().replace(/\s+/g, " ");

            const params = new URLSearchParams(searchParams);
            sanitizedValue
                ? params.set("q", sanitizedValue)
                : params.delete("q");
            replace(`${pathname}?${params.toString()}`);
        },
        300
    );

    const handleClearInput = () => {
        if (typeof inputRef.current?.value === "string")
            inputRef.current.value = "";
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // if (inputRef?.current) {
        //     inputRef.current.scrollIntoView();
        // }
    };

    return (
        <div className="flex w-full tab:w-auto tab:justify-end  border-b-1 tab:border-none">
            <form
                onSubmit={handleSubmit}
                className={`flex relative ${isInputFoucsed && "tab:border-b-1"} w-full`}
            >
                <div
                    role="button"
                    onClick={() => inputRef?.current?.focus()}
                    className={`absolute left-0 ${shouldIconBeLeft ? "" : "tab:right-0 tab:left-auto"}`}
                >
                    <IconSearch />
                </div>
                <input
                    type="text"
                    ref={inputRef}
                    defaultValue={defaultValue}
                    placeholder={getTranslations("Buttons.search")}
                    onChange={handleSearch}
                    onFocus={() => {
                        setIsInputFoucsed(true);
                    }}
                    onBlur={() => setIsInputFoucsed(false)}
                    className={`my-auto mx-[50px] h-[44px] focus:placeholder:text-transparent tab:placeholder:text-transparent focus:outline-none bg-transparent`}
                />
                {defaultValue && (
                    <button
                        onClick={handleClearInput}
                        className="absolute right-0"
                    >
                        <IconCloseXBold />
                    </button>
                )}
            </form>
            <p
                className={`hidden tab:block my-auto font-caviar text-sm tab:text-lg text-purple-200 dark:text-grey`}
            >
                {getTranslations("Buttons.search")}
            </p>
        </div>
    );
};

export default Search;

//що робить "пошук"
//обмеження по макс символам ---
//стандартне повідомлення про помилковий ввод ---
// стандартний бедж про кількість відповідей ---
// як користувач має ділитися пошуком (чи підходить лінк) ---
// "містить пошуковий запит"
