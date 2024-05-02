"use client";
import { useState } from "react";
import { Button } from "../shared/Button";
import Cookies from "js-cookie";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

export const CookiesComponent = () => {
    const [isAccepted, setIsAccepted] = useState(true);
    const cookiesValue = Cookies.get("isAccetedCookies");
    const cookiesRef = useRef<HTMLDivElement>(null);
    const getTranslation = useTranslations("Cookies");

    useEffect(() => {
        if (cookiesValue) {
            setIsAccepted(true);
        } else {
            setIsAccepted(false);
        }
    }, [isAccepted, cookiesValue]);

    const handleClick = () => {
        setIsAccepted(true);
        Cookies.set("isAccetedCookies", "true");
        console.log(isAccepted);
    };

    return (
        <div
            ref={cookiesRef}
            className={`${isAccepted ? "h-0 " : "h-[292px] tab:h-[171px] pc:h-[212px] "} w-full transition-[height] duration-[2000ms] dark:bg-CTAGradient bg-CTAGradientLight  overflow-hidden linear  fixed z-[11]  bottom-0 left-0 flex  pc:pl-[140px]`}
        >
            <div className="px-4 py-10 pc:px-6 pc:py-10 flex flex-col gap-6 items-center tab:items-start justify-center max-w-[540px] tab:tab:max-w-full mx-auto">
                <p>
                    {getTranslation("text")}{" "}
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dark:text-purple-50 text-purple-130"
                    >
                        {getTranslation("policy")}
                    </a>
                </p>
                <Button onClick={handleClick}>
                    {getTranslation("button")}
                </Button>
            </div>
        </div>
    );
};
