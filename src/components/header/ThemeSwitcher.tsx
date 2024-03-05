"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleChange = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    if (!mounted) {
        return <div className="bg-transparent w-[66px] h-[28px]"></div>;
    }

    return (
        <div
            className={`relative bg-transparent w-[66px] h-[28px] border rounded-[32px] ${resolvedTheme === "dark" ? " border-purple-stroke" : " border-purple-200"}`}
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
                        ${resolvedTheme === "dark" ? "translate-x-[40px] bg-purple-stroke" : "translate-x-[3px]  bg-purple-200"} 
                        transition-transform duration-300 ease-in-out`}
                    ></div>
                </div>
            </label>
        </div>
    );
}
