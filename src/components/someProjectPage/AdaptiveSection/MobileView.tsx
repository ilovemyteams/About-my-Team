import React from "react";

interface MobileViewProps {
    screen: string;
}
export const MobileView = ({ screen }: MobileViewProps) => {
    console.log(screen);
    return (
        <div className="inline-block w-[41%] aspect-[118/244] bg-zinc-500 tab:absolute tab:w-[17.5%] tab:bottom-[2%] tab:left-[68%]">
            MobileView
        </div>
    );
};
