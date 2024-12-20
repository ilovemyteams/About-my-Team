"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Link } from "@/src/navigation";

import { BackgroundCirclesMobile } from "../../backgroundImages/BackgroundCirclesMobile";
import { BackgroundCirclesTablet } from "../../backgroundImages/BackgroundCirclesTablet";
import { IconPresent } from "../../shared/Icons/christmas/IconPresent";
import { BurgerMenuButton } from "../BurgerMenuButton";
import { LogoLink } from "../LogoLink";
import { MobileTabletHeaderMenu } from "./MobileTabletHeaderMenu";

export const MobileTabletHeader = () => {
    const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
    const pathname = usePathname();
    console.log("🚀 ~ MobileTabletHeader ~ pathname:", pathname);

    const toggleHeaderMenuOpen = () =>
        setIsHeaderMenuOpened(!isHeaderMenuOpened);

    useEffect(() => {
        isHeaderMenuOpened
            ? setTimeout(() => (document.body.style.overflow = "hidden"), 590)
            : (document.body.style.overflow = "");
    }, [isHeaderMenuOpened]);
    return (
        <div
            className={`pc:hidden absolute top-0 left-0 w-[100vw] h-[80px] dark:bg-none dark:bg-purple-400 bg-headerGradientLight 
            border-b-transparent dark:border-solid dark:border-b-[1px] dark:border-purple-stroke`}
        >
            <div className={`absolute z-20 w-full overflow-hidden`}>
                <BackgroundCirclesMobile />
                <BackgroundCirclesTablet />
                <div className="w-full px-[24px] py-[15px]">
                    <div className="flex justify-between items-center max-w-[540px] tab:max-w-full mx-auto">
                        <LogoLink
                            setIsHeaderMenuOpened={setIsHeaderMenuOpened}
                        />
                        {pathname && !pathname.includes("events") && (
                            <>
                                {console.log("Іконка показується")}
                                <Link
                                    href="/events"
                                    aria-label="our Christmas event information page"
                                    onClick={() => setIsHeaderMenuOpened(false)}
                                >
                                    <IconPresent />
                                </Link>
                            </>
                        )}
                        <BurgerMenuButton
                            isHeaderMenuOpened={isHeaderMenuOpened}
                            toggleHeaderMenuOpen={toggleHeaderMenuOpen}
                        />
                    </div>
                </div>
            </div>
            <MobileTabletHeaderMenu
                isHeaderMenuOpened={isHeaderMenuOpened}
                setIsHeaderMenuOpened={setIsHeaderMenuOpened}
            />
        </div>
    );
};
