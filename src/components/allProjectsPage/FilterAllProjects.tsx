"use client";
import { useTranslations } from "next-intl";

import { categoryKeys } from "@/src/mockedData/allProjectsData";

import { useFilterContext } from "./FilterContext";

export const FilterAllProjects = () => {
    const t = useTranslations("Buttons");

    const categories = categoryKeys.map(key => ({
        key,
        label: t(key),
    }));

    const { selectedCategory, setSelectedCategory } = useFilterContext();

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <div className="flex gap-2 flex-wrap desk:min-w-[542px] pc:min-w-[542px]">
            {categories.map(({ key, label }) => (
                <button
                    key={key}
                    className={`w-[auto] h-12 border dark:border-purple-stroke border-purple-strokeLight py-[14px] px-[16px] text-justify flex items-center justify-center
                        ${selectedCategory === key ? "text-[#FB7185] bg-portfolioActiveButtonGradient" : ""}`}
                    onClick={() => handleCategoryChange(key)}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};
