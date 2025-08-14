"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface TechnologiesProps {
    tools: string[];
}

export const Technologies = ({ tools }: TechnologiesProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [visibleCount, setVisibleCount] = useState(3);

    const tagRefs = useRef<(HTMLLIElement | null)[]>([] as HTMLLIElement[]);

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            calculateVisibleTags();
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tools]);

    const calculateVisibleTags = () => {
        if (!containerRef.current) return;

        const availableWidth =
            containerRef.current.getBoundingClientRect().width - 30;
        let total = 0;
        let count = 0;

        for (let i = 0; i < tools.length; i++) {
            const tag = tagRefs.current[i];
            if (tag) {
                const tagWidth = tag.getBoundingClientRect().width + 4;
                if (total + tagWidth <= availableWidth) {
                    total += tagWidth;
                    count++;
                } else {
                    break;
                }
            }
        }

        setVisibleCount(count);
    };

    return (
        <div className="w-full flex tab:justify-center" ref={containerRef}>
            <ul className="flex gap-1 ">
                {tools.map((item, index) => (
                    <li
                        ref={el => {
                            tagRefs.current[index] = el;
                        }}
                        key={index}
                        aria-hidden={visibleCount <= index}
                        className={twMerge(
                            "border-[1px] border-purple-strokeLight dark:border-purple-stroke h-[20px] px-2 flex items-center",
                            visibleCount <= index
                                ? "absolute invisible w-fit"
                                : ""
                        )}
                    >
                        <span className="text-xs text-nowrap">{item}</span>
                    </li>
                ))}
                {visibleCount < tools.length && (
                    <li className="border-[1px] border-purple-strokeLight dark:border-purple-stroke h-[20px] px-2 flex items-center">
                        <span className="text-xs text-nowrap">
                            +{tools.length - visibleCount}
                        </span>
                    </li>
                )}
            </ul>
        </div>
    );
};
