"use client";
import { useState } from "react";
import { ShowMoreButton } from "../ShowMoreButton";
import { ItemNumber } from "./ItemNumber";

interface OneTableItemInfoProps {
    children: string;
    title?: string;
    isIconShown?: boolean;
    itemNumber?: number;
}
export const OneTableItemInfo = ({
    children,
    title,
    isIconShown = true,
    itemNumber,
}: OneTableItemInfoProps) => {
    const [isShownMore, setIsShownMore] = useState<boolean>(false);
    const toggleShowMore = () => setIsShownMore(!isShownMore);

    return (
        <div className="relative flex flex-col gap-4 min-h-[190px] pc:justify-between pc:min-h-[270px] tab:px-4 py-6">
            <ItemNumber itemNumber={itemNumber} />
            <div className="flex gap-2">
                {isIconShown && <div className="w-6 h-6 bg-purple-100"></div>}
                <h3 className="font-caviar text-xlb">{title}</h3>
            </div>
            <div
                className={`cursor-pointer text-base line-clamp-3  hover:h-max pc:hover:line-clamp-none ${isShownMore && "line-clamp-none"}`}
            >
                {children}
            </div>
            <ShowMoreButton
                toggleShowMore={toggleShowMore}
                isShownMore={isShownMore}
            />
        </div>
    );
};
