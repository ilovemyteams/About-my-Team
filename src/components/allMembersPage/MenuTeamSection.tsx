"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { DEFAULT_SLIDE_ID } from "@/src/constants/defaultSlideId";
import { СategoryNamesProp } from "@/src/mockedData/categoryNames";
import { categoryNames } from "@/src/mockedData/categoryNames";
import { portfolioData } from "@/src/mockedData/portfolioData";
import { usePreviousURL } from "@/src/utils/PreviousURLContext";
import { LocaleType } from "@/types/LocaleType";

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
    const router = useRouter();
    const searchParams = useSearchParams();
    const { setSlideId } = usePreviousURL();

    useEffect(() => {
        const option = searchParams.get("option");
        if (option) {
            const category = categoryNames.find(
                category => category.categoryName === option
            );
            if (category) {
                setSelectedOption({
                    optionName: category[locale as LocaleType],
                    optionValue: category.categoryName,
                    optionType: "person",
                });
            } else {
                const project = portfolioData.find(
                    project => project.data.slug === option
                );
                if (project) {
                    setSelectedOption({
                        optionName: project[locale as LocaleType]?.name,
                        optionValue: project.data.slug,
                        optionType: "team",
                    });
                }
            }
        } else {
            setSelectedOption({
                optionName: "i love my team",
                optionValue: "ilovemyteam-online",
                optionType: "team",
            });
        }
    }, [searchParams, locale, setSelectedOption]);

    const handleOptionSelectProjectTeam = ({
        option,
        projectSlug,
        optionType,
    }: {
        option: string;
        projectSlug: string;
        optionType: string;
    }) => {
        const selected = {
            optionName: option,
            optionValue: projectSlug,
            optionType,
        };
        setSelectedOption(selected);
        setIsOpen(false);
        setSlideId(DEFAULT_SLIDE_ID);

        const params = new URLSearchParams(searchParams.toString());
        params.set("option", projectSlug);
        params.set("slideId", DEFAULT_SLIDE_ID.toString());

        router.replace(`/${locale}?${params.toString()}#team`);
    };

    const handleOptionSelectCategory = (category: СategoryNamesProp) => {
        const selected = {
            optionName: category[locale as LocaleType],
            optionValue: category.categoryName,
            optionType: "person",
        };
        setSelectedOption(selected);
        setIsOpen(false);
        setSlideId(DEFAULT_SLIDE_ID);

        const params = new URLSearchParams(searchParams.toString());
        params.set("option", category.categoryName);
        params.set("slideId", DEFAULT_SLIDE_ID.toString());

        router.replace(`/${locale}?${params.toString()}#team`);
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
                        {portfolioData.map(project => (
                            <li
                                key={project.data.slug}
                                onClick={() =>
                                    handleOptionSelectProjectTeam({
                                        option: project[locale as LocaleType]
                                            ?.name,
                                        projectSlug: project.data.slug,
                                        optionType: "team",
                                    })
                                }
                                className={`${selectedOption.optionValue === project.data.slug ? "dark:text-red text-redLight" : "text-purple-200 dark:text-grey"} cursor-pointer dark:pc:hover:text-red pc:hover:text-redLight
                                dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300`}
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
                                className={`${selectedOption.optionValue === category.categoryName ? "dark:text-red text-redLight" : "text-purple-200 dark:text-grey"} cursor-pointer dark:pc:hover:text-red pc:hover:text-redLight
                                dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300`}
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
