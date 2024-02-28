"use client";
import { useState } from "react";
import { ShowMoreButton } from "./ShowMoreButton";

interface OneServiceInfoProps {
    children: string;
    title?: string;
}
export const OneServiceInfo = ({ children, title }: OneServiceInfoProps) => {
    const [isShownMore, setIsShownMore] = useState<boolean>(false);
    const toggleShowMore = () => setIsShownMore(!isShownMore);

    return (
        <div className="flex flex-col justify-between min-h-[190px] pc:h-[270px] tab:px-4 py-6">
            <div className="flex gap-2">
                <div className="w-6 h-6 bg-purple-100"></div>
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
