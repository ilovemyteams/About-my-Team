"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { DescriptionType } from "@/src/mockedData/servicesData";

import { ChessboardListItem } from "./ChessboardListItem";

export const ChessboardListWithIcons = ({
    description,
}: {
    description: DescriptionType[];
}) => {
    const ref = useRef<HTMLUListElement | null>(null);
    const [visibleIndices, setVisibleIndices] = useState<Set<number>>(
        new Set()
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    const index = Number(
                        entry.target.getAttribute("data-index")
                    );
                    if (
                        entry.boundingClientRect.top > 0 &&
                        entry.isIntersecting
                    ) {
                        setVisibleIndices(prev => new Set(prev).add(index));
                    } else if (
                        entry.boundingClientRect.top > 0 &&
                        !entry.isIntersecting
                    ) {
                        setVisibleIndices(prev => {
                            const updated = new Set(prev);
                            updated.delete(index);
                            return updated;
                        });
                    }
                });
            },
            { threshold: 0.5 }
        );

        const elements = ref.current?.children;
        if (elements) {
            Array.from(elements).forEach(el => observer.observe(el));
        }

        return () => observer.disconnect();
    }, []);

    return (
        <ul ref={ref} className="">
            {description.map((item, index) => (
                <motion.li
                    key={index}
                    data-index={index}
                    className="flex flex-row-reverse gap-[14px] tab:gap-[1.32%] pc:gap-[4.537%] desk:gap-[2.1%] mb-8 last:mb-0 tab:mb-6 tab:odd:flex-row"
                    initial={{ opacity: 0, y: 70 }}
                    animate={
                        visibleIndices.has(index)
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 70 }
                    }
                    transition={{ duration: 1 }}
                >
                    <ChessboardListItem
                        item={item}
                        isLast={index === description.length - 1}
                    />
                </motion.li>
            ))}
        </ul>
    );
};
