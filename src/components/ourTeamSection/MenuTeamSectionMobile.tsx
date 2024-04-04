"use client";
import { useState, Dispatch, SetStateAction } from "react";
import { useLocale, useTranslations } from "next-intl";
import { portfolioData } from "../portfolioSection/portfolioData";
import { LocaleType } from "@/types/LocaleType";
import { categoryNames } from "./data/categoryNames";
import { СategoryNamesProp } from "./data/categoryNames";
import { IconUp } from "../shared/Icons/IconUp";

interface MenuMobileProps {
    selectedOption: {
        optionName: string;
        optionValue: string;
    };
    setSelectedOption: Dispatch<
        SetStateAction<{
            optionName: string;
            optionValue: string;
        }>
    >;
}
export const MenuTeamSectionMobile = ({
    selectedOption,
    setSelectedOption,
}: MenuMobileProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const locale = useLocale();
    const getTranslation = useTranslations("OurTeam");

    const handleOptionSelectProjectTeam = ({
        option,
        projectId,
    }: {
        option: string;
        projectId: string;
    }) => {
        const selected = {
            optionName: option,
            optionValue: projectId,
        };
        setSelectedOption(selected);
        setIsOpen(false);
    };

    const handleOptionSelectCategory = (category: СategoryNamesProp) => {
        const selected = {
            optionName: category[locale as LocaleType],
            optionValue: category.categoryName,
        };
        setSelectedOption(selected);
        setIsOpen(false);
    };

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div onClick={toggleList} className="tab:hidden relative ">
            <div
                className="flex items-center justify-between h-12 min-w-[288px] max-w-[540px] pl-[16px] pr-[4px]
                  text-red text-baseb font-caviar
                  relative outline-none border-[1px] border-purple-stroke"
            >
                <p>{selectedOption?.optionName}</p>
                <IconUp
                    className={`w-[40px] h-[40px] transition-rotate duration-300 ease-out  ${isOpen ? "rotate-0" : "rotate-180 "}`}
                />
            </div>
            <div
                className={`${isOpen ? "max-h-[1280px]" : "max-h-0"} bg-purple-400 absolute top-12 z-10 min-w-[288px] max-w-[540px] w-full 
                    transition-[max-height] duration-[300ms] overflow-hidden 
                    `}
            >
                <div className="py-3 px-4">
                    <p className="text-sm text-purple-50 pb-3">
                        {getTranslation("teamsList").toUpperCase()}
                    </p>
                    <ul
                        className="relative flex flex-col gap-[12px] pb-3  text-baseb font-caviar
                    after:absolute after:border-b-[1px] after:border-purple-stroke after:left-[0px] after:bottom-0 after:w-[148px]"
                    >
                        {portfolioData.map(project => (
                            <li
                                key={project.data.id}
                                onClick={() =>
                                    handleOptionSelectProjectTeam({
                                        option: project[locale as LocaleType]
                                            ?.name,
                                        projectId: project.data.id,
                                    })
                                }
                                className={`${selectedOption.optionValue === project.data.id ? "text-red" : "text-grey"}`}
                            >
                                {project[locale as LocaleType]?.name}
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm text-purple-50 py-3 ">
                        {getTranslation("listTitle").toUpperCase()}
                    </p>
                    <ul className="flex flex-col gap-[12px] text-baseb font-caviar">
                        {categoryNames.map(category => (
                            <li
                                key={category.categoryName}
                                onClick={() =>
                                    handleOptionSelectCategory(category)
                                }
                                className={`${selectedOption.optionValue === category.categoryName ? "text-red" : "text-grey"}`}
                            >
                                {category[locale as LocaleType]}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
