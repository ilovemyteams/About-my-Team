"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

import { portfolioData } from "@/src/mockedData/portfolioData";

export const FilterAllProjects = () => {
    const t = useTranslations("Buttons");
    const searchParams = useSearchParams();
    const router = useRouter();

    const categories = [
        "AllProjects",
        ...new Set(portfolioData.map(item => item.data.category)),
    ];

    const selectedCategory = searchParams.get("category") || "AllProjects";

    const handleCategoryChange = (category: string) => {
        if (category !== selectedCategory) {
            const newParams = new URLSearchParams(searchParams);
            newParams.set("category", category);
            router.push(`?${newParams.toString()}`);
        }
    };

    return (
        <div className="flex gap-4 flex-wrap deskx:flex-nowrap desk:flex-nowrap pc:flex-nowrap">
            {categories.map(value => (
                <button
                    key={value}
                    className={`h-12 border dark:border-purple-stroke w-fit border-purple-strokeLight py-[14px] px-4 text-justify flex items-center justify-center dark:text-disabledLight text-greyLight font-caviar text-sm tab:text-base font-bold text-nowrap 
                        ${selectedCategory === value ? "dark:text-red text-redLight dark:bg-memberMenuGradientDark bg-memberMenuGradientLight" : ""}`}
                    onClick={() => handleCategoryChange(value)}
                >
                    {t(value)}
                </button>
            ))}
        </div>
    );
};
