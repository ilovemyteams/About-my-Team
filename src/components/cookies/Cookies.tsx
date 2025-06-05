"use client";
import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { useEffect } from "react";

import { selectedLink } from "@/src/utils/selectedLink";

import { Button } from "../shared/Button";

export const CookiesComponent = () => {
    const [isVisible, setIsVisible] = useState(false); // 👈 показ банеру
    const getTranslation = useTranslations("Cookies");
    const locale = useLocale();
    const policyURL = selectedLink(locale);

    useEffect(() => {
        const cookiesValue = Cookies.get("isAcceptedCookies"); // ✅ правильна назва
        if (!cookiesValue) {
            setIsVisible(true); // показати, якщо кукі ще немає
        }
    }, []);

    const handleAccept = () => {
        Cookies.set("isAcceptedCookies", "true");
        setIsVisible(false);
    };

    const handleReject = () => {
        Cookies.set("isAcceptedCookies", "false");
        setIsVisible(false);
    };

    return (
        <div
            className={`${
                isVisible ? "h-[363px] tab:h-[287px] pc:h-[236px]" : "h-0"
            } w-full transition-[height] duration-[1000ms] dark:bg-CTAGradient bg-CTAGradientLight overflow-hidden fixed z-[11] bottom-0 left-0 pc:pl-[80px] desk:pl-[120px]`}
        >
            <div className="px-4 py-10 tab:px-6 pc:px-[100px]  pc:py-10 flex flex-col gap-6 pc:gap-9 items-center tab:items-start pc:items-center justify-center max-w-[540px] tab:tab:max-w-full mx-auto">
                <div className="max-w-[915px] pc:max-w-[1080px] pc:w-[1080px] mx-auto ">
                    {getTranslation.rich("text", {
                        link: chunk => (
                            <a
                                href={policyURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dark:text-purple-50 text-purple-130"
                            >
                                {chunk}
                            </a>
                        ),
                    })}
                </div>
                <div className="w-full pc:flex pc:justify-between pc:w-[1080px]">
                    {/* <div className="hidden pc:block pc:w-[288px]">
                        <Button cookie color="grey" onClick={handleClick}>
                            {getTranslation("configure")}
                        </Button>
                    </div> */}
                    <div className="flex gap-4 flex-wrap justify-center w-full tab:gap-x-12 pc:gap-x-4 tab:gap-y-6 max-w-[915px] pc:max-w-[592px] pc:w-[592px] mx-auto pc:mr-0">
                        <div className="w-[45%] max-w-[288px] pc:w-[288px]">
                            <Button cookie color="grey" onClick={handleReject}>
                                {getTranslation("reject")}
                            </Button>
                        </div>
                        <div className="w-[45%] max-w-[288px] pc:w-[288px]">
                            <Button cookie onClick={handleAccept}>
                                {getTranslation("accept")}
                            </Button>
                        </div>
                        {/* <div className="w-[45%] max-w-[288px] pc:hidden">
                            <Button cookie color="grey" onClick={handleClick}>
                                {getTranslation("configure")}
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
