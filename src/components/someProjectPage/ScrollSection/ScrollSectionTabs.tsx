import React from "react";

interface ScrollSectionTabsProps {
    tabs: string[];
    activeTab: string;
    onClickTab?: (title: string) => void;
}

export const ScrollSectionTabs = ({
    activeTab,
    tabs,
    onClickTab,
}: ScrollSectionTabsProps) => {
    const onClickTabButton = (title: string) => {
        if (onClickTab) {
            onClickTab(title);
        }
    };
    return (
        <ul className="flex flex-wrap gap-2 shrink-0 tab:justify-end pc:absolute pc:top-0 pc:left-1/2">
            {tabs.map((title, index) => {
                const color =
                    activeTab === title
                        ? "text-redLight dark:text-red bg-memberMenuGradientLight dark:bg-memberMenuGradientDark"
                        : "text-greyLight dark:text-disabledLight";

                return (
                    <li
                        key={index}
                        className={`p-2 font-caviar font-bold border-[1px] border-purple-strokeLight dark:border-purple-stroke text-sm ${color} tab:px-4 tab:py-[13px] tab:text-base `}
                    >
                        <button
                            onClick={() => onClickTabButton(title)}
                            className="pointer-events-none tab:pointer-events-auto"
                        >
                            {title}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};
