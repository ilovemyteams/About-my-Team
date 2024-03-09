"use client";
import { useState } from "react";
import { LogoLink } from "./LogoLink";
import { BurgerMenuButton } from "./BurgerMenuButton";
import { SocialLinks } from "./SocialLinks";
import { HeaderMenu } from "./HeaderMenu";

export const Header = () => {
    const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
    const toggleHeaderMenuOpen = () =>
        setIsHeaderMenuOpened(!isHeaderMenuOpened);

    return (
        <header>
            <div
                className="hidden pc:fixed top-0 left-0 w-[80px] h-[100vh] z-20 bg-transparent pc:flex flex-col items-center
                justify-between py-8 border-solid border-r-[1px] border-purple-stroke"
            >
                <LogoLink />
                <BurgerMenuButton
                    isHeaderMenuOpened={isHeaderMenuOpened}
                    toggleHeaderMenuOpen={toggleHeaderMenuOpen}
                />
                <SocialLinks />
            </div>
            <HeaderMenu
                isHeaderMenuOpened={isHeaderMenuOpened}
                setIsHeaderMenuOpened={setIsHeaderMenuOpened}
            />
        </header>
    );
};
