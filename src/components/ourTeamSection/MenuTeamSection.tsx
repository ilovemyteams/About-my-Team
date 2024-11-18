"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { DEFAULT_SLIDE_ID } from "@/src/constants/defaultSlideId";
import { usePreviousURL } from "@/src/utils/PreviousURLContext";
import { CategoryNamesQueryResult } from "@/types/sanity.types";

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
    categoryNames: CategoryNamesQueryResult;
    displayedProjectsList: Array<{
        _id: string;
        title: string | null;
    }>;
}

export const MenuTeamSection = ({
    displayedProjectsList,
    selectedOption,
    setSelectedOption,
    categoryNames,
}: MenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const locale = useLocale();
    const getTranslation = useTranslations("OurTeam");
    const router = useRouter();
    const searchParams = useSearchParams();
    const { setSlideId } = usePreviousURL();

    useEffect(() => {
        const option = searchParams.get("option");
        if (option) {
            const category = categoryNames.find(
                category => category.name === option
            );
            if (category) {
                setSelectedOption({
                    optionName: category.name || "",
                    optionValue: category.name || "",
                    optionType: "person",
                });
            } else {
                const project = displayedProjectsList.find(
                    project => project._id === option
                );
                if (project && project.title) {
                    setSelectedOption({
                        optionName: project.title,
                        optionValue: project._id,
                        optionType: "team",
                    });
                }
            }
        } else {
            setSelectedOption({
                optionName: "i love my team",
                optionValue: "1",
                optionType: "team",
            });
        }
    }, [
        searchParams,
        locale,
        setSelectedOption,
        categoryNames,
        displayedProjectsList,
    ]);

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
        setSlideId(0);
        router.push(
            `/${locale}?option=${projectId}&slideId=${DEFAULT_SLIDE_ID}#team`
        );
    };

    const handleOptionSelectCategory = (category: {
        name: string | null;
        value: string | null;
    }) => {
        const selected = {
            optionName: category.name || "",
            optionValue: category.name || "",
            optionType: "person",
        };
        setSelectedOption(selected);
        setIsOpen(false);
        setSlideId(0);
        const categoryValue = category.value?.toLocaleLowerCase();
        router.push(
            `/${locale}?option=${categoryValue}&slideId=${DEFAULT_SLIDE_ID}#team`
        );
    };

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div onClick={toggleList} className="relative ">
            <div
                className="tab:hidden flex items-center justify-between h-12 min-w-[288px] max-w-[540px] pl-[16px] pr-[4px]
                  text-redLight dark:text-red text-baseb font-caviar bg-memberMenuGradientLight dark:bg-memberMenuGradientDark
                  relative outline-none border-[1px] border-purple-strokeLight dark:border-purple-stroke"
            >
                <p>{selectedOption?.optionName}</p>
                <div className="relative flex justify-center items-center icon-hover-rounded-purple">
                    <IconUp
                        className={`w-[40px] h-[40px] transition-rotate duration-300 ease-out  ${isOpen ? "rotate-0" : "rotate-180 "}`}
                    />
                </div>
            </div>
            <div
                className={`${isOpen ? "max-h-[1280px]" : "max-h-0"} tab:max-h-full tab:h-full bg-memberMenuGradientLight dark:bg-memberMenuGradientDark dark:bg-purple-400 bg-white-100 absolute top-12 z-10 min-w-[288px] max-w-[540px] w-full 
                    transition-[max-height] duration-[300ms] overflow-hidden 
                    tab:static tab:border-[1px] tab:border-purple-strokeLight dark:tab:border-purple-stroke tab:w-[27vw] pc:max-w-[286px] tab:min-w-[208px] pc:w-[19vw] pc:min-w-[246px] deskxl:w-[232px]`}
            >
                <div className="py-3 px-4 tab:px-[1.05vw] tab:min-h-[540px] h-full  border border-purple-strokeLight dark:border-purple-stroke border-t-0 tab:border-0">
                    <p className="text-sm dark:text-purple-50 text-purple-130 pb-3">
                        {getTranslation("teamsList").toUpperCase()}
                    </p>
                    <ul
                        className="relative flex flex-col gap-[12px] pb-3  text-baseb font-caviar
                    after:absolute after:border-b-[1px] after:border-purple-strokeLight dark:after:border-purple-stroke after:left-[0px] after:bottom-0 after:w-[148px]"
                    >
                        {displayedProjectsList.map(project => (
                            <li
                                key={project._id}
                                onClick={() =>
                                    handleOptionSelectProjectTeam({
                                        option: project.title || "",
                                        projectId: project._id,
                                        optionType: "team",
                                    })
                                }
                                className={`${selectedOption.optionValue === project._id ? "dark:text-red text-redLight" : "text-purple-200 dark:text-grey"} cursor-pointer dark:pc:hover:text-red pc:hover:text-redLight
                                dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300`}
                            >
                                {project.title}
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm dark:text-purple-50 text-purple-130 py-3 ">
                        {getTranslation("listTitle").toUpperCase()}
                    </p>
                    <ul className="flex flex-col gap-[12px] text-baseb font-caviar">
                        {categoryNames.map(category => (
                            <li
                                key={category.name}
                                onClick={() =>
                                    handleOptionSelectCategory(category)
                                }
                                className={`${selectedOption.optionValue === category.name ? "dark:text-red text-redLight" : "text-purple-200 dark:text-grey"} cursor-pointer dark:pc:hover:text-red pc:hover:text-redLight
                                dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300`}
                            >
                                {category.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
