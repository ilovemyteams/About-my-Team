"use client";
import { useState, useEffect } from "react";
import { LogoLink } from "../LogoLink";
import { BurgerMenuButton } from "../BurgerMenuButton";
import { SocialLinksList } from "../SocialLinks/SocialLinksList";
import { DesktopHeaderMenu } from "./DesktopHeaderMenu";
import { BackgroundCircles } from "../../backgroundImages/BackgroundCircles";

export const DesktopHeader = () => {
    const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
    const toggleHeaderMenuOpen = () =>
        setIsHeaderMenuOpened(!isHeaderMenuOpened);

    useEffect(() => {
        isHeaderMenuOpened
            ? setTimeout(() => (document.body.style.overflow = "hidden"), 590)
            : (document.body.style.overflow = "");
    }, [isHeaderMenuOpened]);

    return (
        <div className={`hidden pc:block absolute top-0 left-0 h-[100vh]`}>
            <div className="absolute z-20 w-[80px] overflow-hidden bg-grey dark:bg-purple-400">
                <BackgroundCircles zIndex="z-10" />
                <div
                    className="flex flex-col items-center justify-between z-20 w-[80px] h-[100vh] 
                py-8 border-solid border-r-[1px] border-purple-stroke"
                >
                    <LogoLink setIsHeaderMenuOpened={setIsHeaderMenuOpened} />
                    <BurgerMenuButton
                        isHeaderMenuOpened={isHeaderMenuOpened}
                        toggleHeaderMenuOpen={toggleHeaderMenuOpen}
                    />
                    <SocialLinksList />
                </div>
            </div>
            <DesktopHeaderMenu
                isHeaderMenuOpened={isHeaderMenuOpened}
                setIsHeaderMenuOpened={setIsHeaderMenuOpened}
            />
        </div>
    );
};
