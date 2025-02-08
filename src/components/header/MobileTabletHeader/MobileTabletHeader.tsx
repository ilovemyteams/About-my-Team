"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Link } from "@/src/navigation";

import { BackgroundCirclesMobile } from "../../backgroundImages/BackgroundCirclesMobile";
import { BackgroundCirclesTablet } from "../../backgroundImages/BackgroundCirclesTablet";
import { FlyingEnvelope } from "../../eventsPage/valentines/shared/FlyingEnvelope";
import { BurgerMenuButton } from "../BurgerMenuButton";
import { LogoLink } from "../LogoLink";
import { MobileTabletHeaderMenu } from "./MobileTabletHeaderMenu";

export const MobileTabletHeader = () => {
    const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);

    const pathname = usePathname();

    const toggleHeaderMenuOpen = () =>
        setIsHeaderMenuOpened(!isHeaderMenuOpened);

    useEffect(() => {
        isHeaderMenuOpened
            ? setTimeout(() => (document.body.style.overflow = "hidden"), 590)
            : (document.body.style.overflow = "");
    }, [isHeaderMenuOpened]);
    const urlShare =
        typeof window !== "undefined" ? window.location.origin + pathname : "";
    const handleClick = () => {
        setIsHeaderMenuOpened(false),
            sendGTMEvent({
                event: "violet_envelope",
                page_location: urlShare,
            });
    };
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

                        {!pathname.includes("events") && (
                            <Link
                                href="/events"
                                className="w-[70px]"
                                onClick={handleClick}
                            >
                                <FlyingEnvelope />
                            </Link>
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
