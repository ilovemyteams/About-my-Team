"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

import { projectCategories } from "@/src/mockedData/allProjectsData";

export const FilterAllProjects = () => {
    const t = useTranslations("Buttons");
    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedCategory =
        searchParams.get("category") || projectCategories.ALL_PROJECTS;

    const handleCategoryChange = (category: string) => {
        if (category !== selectedCategory) {
            const newParams = new URLSearchParams(searchParams);
            newParams.set("category", category);
            router.push(`?${newParams.toString()}`);
        }
    };

    return (
        <div className="flex gap-2 flex-wrap desk:min-w-[542px] pc:min-w-[542px]">
            {Object.values(projectCategories).map(value => (
                <button
                    key={value}
                    className={`w-auto h-12 border dark:border-purple-stroke border-purple-strokeLight py-[14px] px-4 text-justify flex items-center justify-center
                        ${selectedCategory === value ? "text-red bg-memberMenuGradientDark" : ""}`}
                    onClick={() => handleCategoryChange(value)}
                >
                    {t(value)}
                </button>
            ))}
        </div>
    );
};
