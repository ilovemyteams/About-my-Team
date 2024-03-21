"use client";
import { useState, useEffect } from "react";

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;

            if (scrolled > 300) {
                setIsVisible(true);
            } else if (scrolled <= 300) {
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
                className={`${isVisible ? "block" : "hidden"} fixed bottom-[264px] right-[60px]`}
                onClick={scrollToTop}
            >
                scroll to top
            </button>
        </>
    );
};
