"use client";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useEffect, useRef } from "react";

import { useSettingsContext } from "@/src/utils/SettingsSanityContext";

import { Button } from "../shared/Button";

export const CookiesComponent = () => {
    const [isAccepted, setIsAccepted] = useState(true);
    const cookiesValue = Cookies.get("isAccetedCookies");
    const cookiesRef = useRef<HTMLDivElement>(null);
    const getTranslation = useTranslations("Cookies");
    const { footerData } = useSettingsContext();

    const selectedLink = footerData?.privacyPolicyURL || "";

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
    };

    return (
        <div
            ref={cookiesRef}
            className={`${isAccepted ? "h-0 " : "h-[292px] tab:h-[212px] pc:h-[171px] "} w-full transition-[height] duration-[1000ms] dark:bg-CTAGradient bg-CTAGradientLight  overflow-hidden linear  fixed z-[11]  bottom-0 left-0 flex  pc:pl-[80px] deskxl:pl-[120px]`}
        >
            <div className="px-4 py-10 tab:px-6 pc:px-[100px]  pc:py-10 flex flex-col pc:flex-row gap-6 pc:gap-9 items-center tab:items-start pc:items-center justify-center max-w-[540px] tab:tab:max-w-full mx-auto">
                <div className="pc:w-[60%]">
                    {getTranslation("text")}{" "}
                    <a
                        href={selectedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dark:text-purple-50 text-purple-130"
                    >
                        {getTranslation("policy")}
                    </a>
                </div>
                <div className="w-[288px]">
                    <Button onClick={handleClick}>
                        {getTranslation("button")}
                    </Button>
                </div>
            </div>
        </div>
    );
};
