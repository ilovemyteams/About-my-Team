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
}
export const OneTableItemInfo = ({
    children,
    title,
    isIconShown = true,
    itemNumber,
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
            className="relative flex flex-col gap-4 justify-between min-h-[190px] pc:min-h-[270px] tab:px-4 py-6 overflow-hidden"
        >
            <ItemNumber itemNumber={itemNumber} />
            <div className="flex gap-2 items-center">
                {isIconShown && (
                    <div className="w-[18px] h-[18px] border-red border-[3px]"></div>
                )}
                <h3 className="font-caviar text-xlb">{title}</h3>
            </div>
            <div
                ref={contentRef}
                className={`cursor-pointer text-base pc:max-h-[60px] hover:max-h-[300px]
                line-clamp-3 pc:overflow-hidden pc:text-ellipsis
                pc:hover:line-clamp-none ${isShownMore ? "line-clamp-none max-h-[200px]" : "line-clamp-3 max-h-[60px] "}
                transition-[max-height] duration-[600ms] ease-in-out overflow-hidden
                `}
            >
                {children}
            </div>
            {isButtonShown && (
                <ShowMoreButton
                    toggleShowMore={toggleShowMore}
                    isShownMore={isShownMore}
                />
            )}
        </div>
    );
};
