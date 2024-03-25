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
                className="h-[48px] w-full flex justify-between items-center font-caviar text-baseb border-[1px] border-purple-stroke py-[14px] px-[16px]"
            >
                <p>{getTranslation("menuTopTitle")}</p>
                <div
                    className="relative cursor-pointer flex justify-center items-center w-[48px] h-[48px] p-3 pc:p-2
            icon-hover-rounded-purple icon-hover-rounded-purple:hover icon-hover-rounded-purple:focus-visible icon-hover-rounded-purple:focus-within pc:text-red "
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
