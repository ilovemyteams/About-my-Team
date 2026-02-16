import React from "react";
import { twMerge } from "tailwind-merge";

import { SliderDots } from "./SliderDots";

interface SliderDotsBoxProps {
    scrollSnaps: number[];
    selectedIndex: number;
    onDotButtonClick: (index: number) => void;
    className?: string;
}

export const SliderDotsBox = <T,>({
    scrollSnaps,
    selectedIndex,
    sliders,
    className,
    onDotButtonClick,
}: SliderDotsBoxProps & { sliders: T[] }) => {
    return (
        <div
            className={twMerge(
                `tab:hidden embla__dots flex gap-3 items-center`,
                className
            )}
        >
            {scrollSnaps.map((_, index) => (
                <SliderDots
                    key={index}
                    style={{
                        display:
                            selectedIndex === 0
                                ? index === selectedIndex + 2
                                    ? "flex"
                                    : ""
                                : selectedIndex === sliders.length - 1
                                  ? index === selectedIndex - 2
                                      ? "flex"
                                      : ""
                                  : selectedIndex === index ||
                                      selectedIndex - 1 === index ||
                                      selectedIndex + 1 === index
                                    ? "flex"
                                    : "",
                    }}
                    onClick={() => onDotButtonClick(index)}
                    className={`slider-dot ${
                        index === selectedIndex ? "slider-dot--selected" : ""
                    } 
                ${index > selectedIndex + 1 || index < selectedIndex - 1 ? "hidden" : ""} 
               `}
                />
            ))}
        </div>
    );
};
