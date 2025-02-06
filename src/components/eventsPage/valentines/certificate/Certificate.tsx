import { useTranslations } from "next-intl";
import React from "react";

import { ArrowIcon } from "../icons/ArrowIcon";
import { FlyingEnvelope } from "../shared/FlyingEnvelope";

export const Certificate = () => {
    const getTranslation = useTranslations("Valentines");
    return (
        <div className="w-full max-w-[320px] h-auto relative">
            <div className="absolute top-0 right-0 translate-y-[-200%] text-right mb-10 tab:mb-10 pc:mb-14 opacity-0">
                <p className="font-segoe text-xxs tab:text-sm pc:text-xl whitespace-nowrap">
                    {getTranslation("certificateHere")}
                </p>
                <ArrowIcon className="absolute right-[15%] top-[20px] w-[30px] h-auto tab:w-[35px] pc:top-[25px] pc:w-[45px]" />
            </div>
            <div className="w-[85%] mx-auto pc:w-full">
                <FlyingEnvelope
                    className="rotate-[15deg] transform-x-[5%] tab:transform-x-0 cursor-pointer 
            max-w-[300px] tab:max-w-[350px] pc:max-w-[450px] pb-[3%]"
                    envelope="pink"
                />
            </div>
        </div>
    );
};
