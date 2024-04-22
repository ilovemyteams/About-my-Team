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
}
export const OneTableItemInfo = ({
    children,
    title,
    isIconShown = true,
    itemNumber,
    textClassName,
    isShowMoreButton = true,
}: OneTableItemInfoProps) => {
    const { elementRef, elementWidth } = useElementWidth<HTMLDivElement>();
    const contentRef = useRef<HTMLDivElement>(null);
    const [isShownMore, setIsShownMore] = useState<boolean>(false);
    const [isButtonShown, setIsButtonShown] = useState<boolean>(true);
    const toggleShowMore = () => {
        const contentElement = contentRef?.current;
        setIsShownMore(!isShownMore);
        !isShownMore
            ? contentElement?.classList.remove("line-clamp-3")
            : setTimeout(
                  () => contentElement?.classList.add("line-clamp-3"),
                  600
              );
    };

    useEffect(() => {
        if (contentRef.current) {
            const contentHeight = contentRef.current?.scrollHeight;
            setIsButtonShown(contentHeight > TEXT_CONTAINER_HEIGHT);
        }
    }, [elementWidth]);

    const handleMouseEnter = () => {
        const contentElement = contentRef?.current;
        if (contentElement) {
            contentElement.classList.remove("pc:line-clamp-3");
        }
    };

    const handleMouseLeave = () => {
        const contentElement = contentRef?.current;
        if (contentElement) {
            setTimeout(
                () => contentElement.classList.add("pc:line-clamp-3"),
                600
            );
        }
    };

    return (
        <div
            ref={elementRef}
            className="relative flex flex-col gap-4 justify-between min-h-[150px] 
                        tab:justify-normal pc:justify-between
                        tab:h-[210px] pc:h-[270px] tab:px-0 pc:px-4 py-6 overflow-hidden 
                        deskxl:gap-4"
        >
            <ItemNumber itemNumber={itemNumber} />
            <div className="flex gap-2 items-center">
                {isIconShown && (
                    <div className="w-[18px] h-[18px] border-red border-[3px]"></div>
                )}
                <h3 className="font-caviar text-xlb text-white-200">{title}</h3>
            </div>
            <div
                ref={contentRef}
                className={`cursor-pointer text-base deskxl:text-lg deskxl:font-light overflow-hidden
                ${isShownMore ? "max-h-[160px] deskxl:max-h-[190px]" : "max-h-[60px] tab:max-h-full pc:max-h-[60px] deskxl:max-h-[70px] "}
                tab:max-h-full pc:max-h-[60px] deskxl:max-h-[70px] hover:max-h-[160px] hover:deskxl:max-h-[190px]
                pc:line-clamp-3 
                 transition-[max-height] duration-[600ms] ease-in ${textClassName}             
                `}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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
