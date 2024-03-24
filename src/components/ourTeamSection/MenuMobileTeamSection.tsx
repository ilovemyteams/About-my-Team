"use client";
import { useTranslations } from "next-intl";
import { IconUp } from "../shared/Icons/IconUp";
import { useState } from "react";
import { TeamsList } from "./TeamsList";
import { CategoriesList } from "./CategoriesList";

export const MenuMobileTeamSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const changeStateMenu = () => {
        setIsOpen(isOpen => !isOpen);
    };
    const getTranslation = useTranslations("OurTeam");
    return (
        <div className="tab:hidden pc:hidden">
            <button
                onClick={changeStateMenu}
                className="w-full flex justify-between items-center font-caviar text-baseb border-[1px] border-purple-stroke py-[14px] px-[16px]"
            >
                <p>{getTranslation("menuTopTitle")}</p>
                <div
                    className="flex-none cursor-pointer w-[24px] h-[24px] flex justify-center items-center
            after:content-[''] after:absolute after:w-[0px] after:h-[0px] after:rounded-full text-red after:bg-purple-stroke03 
            after:scale-0 after:origin-center after:blur-[2px] after:transition-scale after:ease-out after:duration-[600ms]
            hover:after:scale-100 hover:after:blur-[2px] hover:after:w-[48px] hover:after:h-[48px]
            focus-visible:after:scale-100 focus-visible:after:blur-[2px] focus-visible:after:w-[48px] focus-visible:after:h-[48px] 
            focus-visible:outline-none focus-within:outline-none"
                >
                    <IconUp
                        className={`w-[24px] h-[24px] text-red duration-300 ease-out transition-transform  ${isOpen ? "rotate-0" : "rotate-180 "}`}
                    />
                </div>
            </button>
            <div
                className={`text-sm overflow-hidden px-[16px] py-[12px] transition-[max-height] duration-[300ms] ease-in-out 
                    ${isOpen ? "max-h-[300px]" : "max-h-0"}`}
            >
                <TeamsList />
                <CategoriesList />
            </div>
        </div>
    );
};
