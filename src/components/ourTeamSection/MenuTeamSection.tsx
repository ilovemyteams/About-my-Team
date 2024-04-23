"use client";
import { useState, Dispatch, SetStateAction } from "react";
import { useLocale, useTranslations } from "next-intl";
import { portfolioData } from "../../mockedData/portfolioData";
import { LocaleType } from "@/types/LocaleType";
import { categoryNames } from "../../mockedData/categoryNames";
import { СategoryNamesProp } from "../../mockedData/categoryNames";
import { IconUp } from "../shared/Icons/IconUp";

interface MenuProps {
    selectedOption: {
        optionName: string;
        optionValue: string;
        optionType: string;
    };
    setSelectedOption: Dispatch<
        SetStateAction<{
            optionName: string;
            optionValue: string;
            optionType: string;
        }>
    >;
}

export const MenuTeamSection = ({
    selectedOption,
    setSelectedOption,
}: MenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const locale = useLocale();
    const getTranslation = useTranslations("OurTeam");

    const handleOptionSelectProjectTeam = ({
        option,
        projectId,
        optionType,
    }: {
        option: string;
        projectId: string;
        optionType: string;
    }) => {
        const selected = {
            optionName: option,
            optionValue: projectId,
            optionType,
        };
        setSelectedOption(selected);
        setIsOpen(false);
    };

    const handleOptionSelectCategory = (category: СategoryNamesProp) => {
        const selected = {
            optionName: category[locale as LocaleType],
            optionValue: category.categoryName,
            optionType: "person",
        };
        setSelectedOption(selected);
        setIsOpen(false);
    };

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div onClick={toggleList} className="relative ">
            <div
                className="tab:hidden flex items-center justify-between h-12 min-w-[288px] max-w-[540px] pl-[16px] pr-[4px]
                  text-red text-baseb font-caviar
                  relative outline-none border-[1px] border-purple-stroke"
            >
                <p>{selectedOption?.optionName}</p>
                <IconUp
                    className={`w-[40px] h-[40px] transition-rotate duration-300 ease-out  ${isOpen ? "rotate-0" : "rotate-180 "}`}
                />
            </div>
            <div
                className={`${isOpen ? "max-h-[1280px]" : "max-h-0"} tab:max-h-full tab:h-full absolute top-12 z-10 min-w-[288px] max-w-[540px] w-full 
                    transition-[max-height] duration-[300ms] overflow-hidden 
                    tab:static tab:border-[1px] tab:border-purple-stroke tab:w-[27vw] tab:min-w-[208px]
                    `}
            >
                <div className="py-3 px-4 tab:px-[1.05vw] tab:min-h-[540px]">
                    <p className="text-sm dark:text-purple-50 text-purple-130 pb-3">
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
                                        optionType: "team",
                                    })
                                }
                                className={`${selectedOption.optionValue === project.data.id ? "text-red" : ""} cursor-pointer `}
                            >
                                {project[locale as LocaleType]?.name}
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm dark:text-purple-50 text-purple-130 py-3 ">
                        {getTranslation("listTitle").toUpperCase()}
                    </p>
                    <ul className="flex flex-col gap-[12px] text-baseb font-caviar">
                        {categoryNames.map(category => (
                            <li
                                key={category.categoryName}
                                onClick={() =>
                                    handleOptionSelectCategory(category)
                                }
                                className={`${selectedOption.optionValue === category.categoryName ? "text-red" : ""} cursor-pointer `}
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
