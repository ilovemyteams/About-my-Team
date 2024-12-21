"use client";

import { useTranslations } from "next-intl";

import { IconBorderCurve } from "../../shared/Icons/christmas/IconBorderCurve";

export const onClickBtnToWinForm = () => {
    const element = document.getElementById("form");
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};

export const WinLandingBtn = () => {
    const getTranslation = useTranslations("Christmas");

    return (
        <button
            className="relative ml-auto cursor-pointer whitespace-pre-wrap text-redLight dark:text-red font-intro 
                text-[24px] tab:text-[40px] desk:text-[48px] leading-none outline-1 px-5 py-4 min-w-[170px] rotate-[-9deg] 
                scale-[70%] translate-x-[5%] tab:scale-[72%]
                 tab:px-8 tab:py-4 tab:min-w-[250px] desk:px-12 desk:py-6 desk:min-w-[320px] 
                 active:scale-[75%] tab:active:scale-[77%] tab:hover:scale-[77%] desk:scale-[67%] transition ease-out duration-300"
            onClick={onClickBtnToWinForm}
        >
            <IconBorderCurve className="w-[110%] h-auto absolute top-[-5%] left-[-5%] z-[-1] translate-y-[-4%]" />
            {getTranslation("heroStamp")}
        </button>
    );
};
