"use client";
import { useState, useEffect } from "react";
import { LogoLink } from "./LogoLink";
import { BurgerMenuButton } from "./BurgerMenuButton";

export const MobileHeader = () => {
    const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
    const toggleHeaderMenuOpen = () =>
        setIsHeaderMenuOpened(!isHeaderMenuOpened);

    useEffect(() => {
        isHeaderMenuOpened
            ? setTimeout(() => (document.body.style.overflow = "hidden"), 590)
            : (document.body.style.overflow = "");
    }, [isHeaderMenuOpened]);
    return (
        <div className="fixed pc:hidden top-0 left-0 w-[100vw] flex justify-between items-center h-[80px] px-[24px] py-[20px] border-solid border-b-[1px] border-purple-stroke">
            <LogoLink setIsHeaderMenuOpened={setIsHeaderMenuOpened} />
            <BurgerMenuButton
                isHeaderMenuOpened={isHeaderMenuOpened}
                toggleHeaderMenuOpen={toggleHeaderMenuOpen}
            />
        </div>
    );
};
