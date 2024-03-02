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
            className={`relative bg-transparent w-[66px] h-[28px] border rounded-[32px] ${resolvedTheme === "dark" ? " border-grey" : " border-purple-200"}`}
        >
            <label className="cursor-pointer ">
                <input
                    type="checkbox"
                    value=""
                    className="sr-only"
                    defaultChecked={resolvedTheme === "dark"}
                    onChange={handleChange}
                />
                <div className="relative w-[66px] h-[28px]">
                    <div
                        className={`absolute w-[22px] h-[22px] rounded-full translate-y-[3px] 
                        ${resolvedTheme === "dark" ? "translate-x-[40px] bg-grey" : "translate-x-[3px]  bg-purple-200"} 
                        transition-transform duration-300 ease-in-out`}
                    ></div>
                </div>
            </label>
        </div>
    );
}
