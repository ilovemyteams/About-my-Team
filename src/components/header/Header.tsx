"use client";
import { useState, useEffect } from "react";
import { LogoLink } from "./LogoLink";
import { BurgerMenuButton } from "./BurgerMenuButton";
import { SocialLinksList } from "./SocialLinks/SocialLinksList";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";

export const Header = () => {
    const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
    const toggleHeaderMenuOpen = () =>
        setIsHeaderMenuOpened(!isHeaderMenuOpened);

    useEffect(() => {
        isHeaderMenuOpened
            ? setTimeout(() => (document.body.style.overflow = "hidden"), 590)
            : (document.body.style.overflow = "");
    }, [isHeaderMenuOpened]);

    return (
        <header className="fixed top-0 left-0 h-[100vh] z-20">
            <div
                className="hidden pc:fixed top-0 left-0 w-[80px] h-[100vh] z-20 bg-transparent pc:flex flex-col items-center
                justify-between py-8 border-solid border-r-[1px] border-purple-stroke"
            >
                <LogoLink setIsHeaderMenuOpened={setIsHeaderMenuOpened} />
                <BurgerMenuButton
                    isHeaderMenuOpened={isHeaderMenuOpened}
                    toggleHeaderMenuOpen={toggleHeaderMenuOpen}
                />
                <SocialLinksList />
            </div>
            <HeaderMenu
                isHeaderMenuOpened={isHeaderMenuOpened}
                setIsHeaderMenuOpened={setIsHeaderMenuOpened}
            />
        </header>
    );
};
