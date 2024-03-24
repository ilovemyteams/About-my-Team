"use client";
import { useState, useEffect } from "react";
import { IconUp } from "../shared/Icons/IconUp";

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;

            if (scrolled > 800) {
                setIsVisible(true);
            } else if (scrolled <= 800) {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisible);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            <button
                className={`${isVisible ? "block" : "hidden"} text-grey fixed bottom-[164px] right-[8px] tab:right-[28px] pc:right-[60px] w-[64px] h-[64px] p-3 rounded-full color-grey after:content-[''] after:absolute after:top-0 after:left-0 after:z-[-10] after:w-[64px] after:h-[64px] after:rounded-full after:bg-purple-100 after:bg-opacity-40 after:blur-[2px]`}
                onClick={scrollToTop}
            >
                <IconUp />
            </button>
        </>
    );
};
