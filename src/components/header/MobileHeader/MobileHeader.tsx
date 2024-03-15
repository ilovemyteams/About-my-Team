"use client";
import { useState, useEffect } from "react";
import { LogoLink } from "../LogoLink";
import { BurgerMenuButton } from "../BurgerMenuButton";
import { MobileHeaderMenu } from "./MobileHeaderMenu/MobileHeaderMenu";

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
        <div className="pc:hidden absolute top-0 left-0 z-20 flex justify-between items-center w-[100vw] h-[80px] px-[24px] py-[20px] border-solid border-b-[1px] border-purple-stroke  bg-grey dark:bg-purple-400">
            <LogoLink setIsHeaderMenuOpened={setIsHeaderMenuOpened} />
            <BurgerMenuButton
                isHeaderMenuOpened={isHeaderMenuOpened}
                toggleHeaderMenuOpen={toggleHeaderMenuOpen}
            />
            <MobileHeaderMenu
                isHeaderMenuOpened={isHeaderMenuOpened}
                setIsHeaderMenuOpened={setIsHeaderMenuOpened}
            />
        </div>
    );
};
