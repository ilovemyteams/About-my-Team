"use client";
import { useState, useRef, useEffect } from "react";
import { ShowMoreButton } from "../ShowMoreButton";
import { ItemNumber } from "./ItemNumber";
import { useElementWidth } from "@/src/hooks/useElementWidth";

const TEXT_CONTAINER_HEIGHT = 60;
interface OneTableItemInfoProps {
    children: string;
    title?: string;
    isIconShown?: boolean;
    itemNumber?: number;
    textClassName?: string;
    isShowMoreButton?: boolean;
    className?: string;
}
export const OneTableItemInfo = ({
    children,
    title,
    isIconShown = true,
    itemNumber,
    textClassName,
    className,
    isShowMoreButton = true,
}: OneTableItemInfoProps) => {
    const { elementRef, elementWidth } = useElementWidth<HTMLDivElement>();
    const contentRef = useRef<HTMLDivElement>(null);
    const [isShownMore, setIsShownMore] = useState<boolean>(false);
    const [isButtonShown, setIsButtonShown] = useState<boolean>(true);
    const toggleShowMore = () => setIsShownMore(!isShownMore);

    useEffect(() => {
        if (contentRef.current) {
            const contentHeight = contentRef.current?.scrollHeight;
            setIsButtonShown(contentHeight > TEXT_CONTAINER_HEIGHT);
        }
    }, [elementWidth]);

    return (
        <div
            ref={elementRef}
            className={`relative flex flex-col gap-4 justify-between min-h-[150px] 
            border-purple-stroke border-b-[1px]  first-of-type:border-t-[1px] 
            tab:[&:nth-child(2)]:border-t-[1px] 
            tab:justify-normal pc:justify-between  
            tab:h-[210px] pc:h-[270px] tab:px-0 pc:px-4 py-6 overflow-hidden
            
            ${className}`}
        >
            <ItemNumber itemNumber={itemNumber} />
            <div className="flex gap-2 items-center">
                {isIconShown && (
                    <div className="w-[18px] h-[18px] border-red border-[3px]"></div>
                )}
                <h3 className="font-caviar text-xlb text-white">{title}</h3>
            </div>
            <div
                ref={contentRef}
                className={`cursor-pointer text-base  hover:max-h-[160px] line-clamp-3 
                tab:line-clamp-none
                pc:line-clamp-3 
                pc:max-h-[60px] pc:overflow-hidden 
                pc:hover:line-clamp-none ${isShownMore ? "line-clamp-none max-h-[160px]" : "line-clamp-3 max-h-[60px] tab:max-h-full pc:max-h-[60px] "}
                transition-[max-height] duration-[600ms] ease-in overflow-hidden
                ${textClassName}
                `}
            >
                {children}
            </div>
            {isButtonShown && isShowMoreButton && (
                <ShowMoreButton
                    toggleShowMore={toggleShowMore}
                    isShownMore={isShownMore}
                />
            )}
        </div>
    );
};
