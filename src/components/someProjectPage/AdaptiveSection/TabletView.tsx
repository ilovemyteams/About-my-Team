import React from "react";

interface TabletViewProps {
    screen: string;
}

export const TabletView = ({ screen }: TabletViewProps) => {
    console.log(screen);
    return (
        <div className="w-full bg-green-800 aspect-[16/9] mb-6 tab:mb-0">
            TabletView
        </div>
    );
};
