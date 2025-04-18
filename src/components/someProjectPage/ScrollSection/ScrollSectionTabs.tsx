import React from "react";

interface ScrollSectionTabsProps {
    tabs: string[];
    isActive: string;
}

export const ScrollSectionTabs = ({
    isActive,
    tabs,
}: ScrollSectionTabsProps) => {
    return (
        <ul className="flex flex-wrap gap-2 shrink-0">
            {tabs.map((title, index) => {
                const color =
                    isActive === title
                        ? "text-redLight dark:text-red bg-memberMenuGradientLight dark:bg-memberMenuGradientDark"
                        : "text-greyLight dark:text-disabledLight";

                return (
                    <li
                        key={index}
                        className={`p-2 font-bold border-[1px] border-purple-strokeLight dark:border-purple-stroke text-sm ${color}`}
                    >
                        <span>{title}</span>
                    </li>
                );
            })}
        </ul>
    );
};
