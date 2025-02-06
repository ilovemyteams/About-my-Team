import { useTranslations } from "next-intl";
import React from "react";

import { ArrowIcon } from "../icons/ArrowIcon";
import { PinkEnvelopeIcon } from "../icons/PinkEnvelopeIcon";
import { FlyingEnvelope } from "../shared/FlyingEnvelope";

export const Certificate = () => {
    const getTranslation = useTranslations("Valentines");
    return (
        <div
            className="aspectRatio-[1.2] w-[90%] max-w-[320px] h-auto pt-6 pb-[72px] pl-4 pr-1 absolute bottom-[80px]  
            left-[50%] translate-x-[-50%] tab:w-[45%] tab:max-w-[400px]  tab:top-[36px] tab:translate-x-0 
            tab:pt-0 tab:pb-0 pc:top-[65px] pc:max-w-[550px] pc:left-[45%] desk:left-[50%]"
        >
            <div className="block text-right relative mb-10 tab:mb-10 pc:mb-14">
                <p className="font-segoe text-xxs tab:text-sm pc:text-xl">
                    {getTranslation("certificateHere")}
                </p>
                <ArrowIcon className="absolute right-[15%] top-[20px] w-[30px] h-auto tab:w-[35px] pc:top-[25px] pc:w-[45px]" />
            </div>
            <div className="w-[85%] mx-auto pc:w-full">
                <FlyingEnvelope
                    className="rotate-[15deg] transform-x-[5%] tab:transform-x-0 cursor-pointer 
            max-w-[300px] tab:max-w-[350px] pc:max-w-[450px]"
                    icon={PinkEnvelopeIcon}
                />
            </div>
        </div>
    );
};
