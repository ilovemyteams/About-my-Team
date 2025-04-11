"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BackgroundCircles } from "../../backgroundImages/BackgroundCircles";
import { BackgroundCirclesBigScreens } from "../../backgroundImages/BackgroundCircles1536BigScreens";
import { Basket } from "../../easter/Basket";
import { BurgerMenuButton } from "../BurgerMenuButton";
import { LogoLink } from "../LogoLink";
import { SocialLinksList } from "../SocialLinks/SocialLinksList";
import { DesktopHeaderMenu } from "./DesktopHeaderMenu";

export const DesktopHeader = () => {
    const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
    const pathname = usePathname();

    const toggleHeaderMenuOpen = () =>
        setIsHeaderMenuOpened(!isHeaderMenuOpened);

    useEffect(() => {
        isHeaderMenuOpened
            ? setTimeout(() => (document.body.style.overflow = "hidden"), 590)
            : (document.body.style.overflow = "");
    }, [isHeaderMenuOpened]);

    const handleClick = () => {
        setIsHeaderMenuOpened(false);
        sendGTMEvent({
            event: "easter_basket_heder",
        });
    };

    return (
        <div
            className={`hidden pc:block absolute top-0 left-0 w-[80px] deskxl:w-[120px] h-[100vh] dark:bg-purple-400 bg-white-100 
            border-solid border-r-[1px] border-purple-strokeLight dark:border-purple-stroke`}
        >
            <div className={`absolute z-20 w-full overflow-hidden`}>
                <BackgroundCircles />
                <BackgroundCirclesBigScreens />
                <div
                    className="flex flex-col items-center justify-between z-20 w-full deskxl:w-[120px] h-[100vh] 
                py-8 "
                >
                    <LogoLink setIsHeaderMenuOpened={setIsHeaderMenuOpened} />
                    <div className=" relative flex flex-col pc:gap-8 desk:gap-10">
                        <BurgerMenuButton
                            isHeaderMenuOpened={isHeaderMenuOpened}
                            toggleHeaderMenuOpen={toggleHeaderMenuOpen}
                        />
                        {!pathname.includes("events") && (
                            <div
                                className=" absolute pc:bottom-[-10vh] desk:bottom-[-20vh]"
                                onClick={handleClick}
                            >
                                <Basket />
                            </div>
                        )}
                    </div>

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
