"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Cookies from "js-cookie";

export function ThemeSwitcher() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        const storedTheme = Cookies.get("theme");
        if (
            storedTheme &&
            (storedTheme === "dark" || storedTheme === "light")
        ) {
            setTheme(storedTheme);
        } else {
            setTheme("dark");
        }

        setMounted(true);
    }, [setTheme]);

    const handleChange = () => {
        const newTheme = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
        Cookies.set("theme", newTheme);
        typeof window !== "undefined" && window.location.reload();
    };

    if (!mounted) {
        return (
            <div className="w-[66px] h-[28px] border border-purple-stroke rounded-[32px]"></div>
        );
    }

    // TODO: update switcher border colors for light theme when design is ready
    return (
        <div
            className={`relative bg-transparent w-[66px] h-[28px] border rounded-[32px] ${resolvedTheme === "dark" ? " border-purple-stroke" : " border-purple-stroke"}`}
        >
            <label htmlFor="themeToggle" className="cursor-pointer ">
                <input
                    type="checkbox"
                    id="themeToggle"
                    value=""
                    className="sr-only"
                    defaultChecked={resolvedTheme === "dark"}
                    onChange={handleChange}
                    aria-label="Toggle theme mode"
                />
                <div className="relative w-[66px] h-[28px]">
                    <div
                        className={`absolute w-[22px] h-[22px] rounded-full translate-y-[2px] 
                        ${resolvedTheme === "dark" ? "translate-x-[3px] bg-purple-stroke" : "translate-x-[40px]  bg-purple-stroke"} 
                        transition-transform duration-300 ease-out`}
                    ></div>
                </div>
            </label>
        </div>
    );
}
