"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

import { localeInURL } from "@/src/utils/localeInURL";

import { BackgroundCircles } from "../../backgroundImages/BackgroundCircles";
import { BackgroundCirclesBigScreens } from "../../backgroundImages/BackgroundCircles1536BigScreens";
import { IconEnvelopeCheap } from "../../eventsPage/valentines/icons/IconEnvelopeCheap";
import { BurgerMenuButton } from "../BurgerMenuButton";
import { LogoLink } from "../LogoLink";
import { SocialLinksList } from "../SocialLinks/SocialLinksList";
import { DesktopHeaderMenu } from "./DesktopHeaderMenu";

export const DesktopHeader = () => {
    const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
    const locale = useLocale();
    const pathname = usePathname();

    const toggleHeaderMenuOpen = () =>
        setIsHeaderMenuOpened(!isHeaderMenuOpened);

    useEffect(() => {
        isHeaderMenuOpened
            ? setTimeout(() => (document.body.style.overflow = "hidden"), 590)
            : (document.body.style.overflow = "");
    }, [isHeaderMenuOpened]);

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
                    <div className="flex flex-col pc:gap-8 desk:gap-10">
                        <BurgerMenuButton
                            isHeaderMenuOpened={isHeaderMenuOpened}
                            toggleHeaderMenuOpen={toggleHeaderMenuOpen}
                        />
                        {!pathname.endsWith("/events") && (
                            <Link
                                href={`/${localeInURL(locale)}events`}
                                className="w-16 desk:w-20"
                                onClick={() => setIsHeaderMenuOpened(false)}
                            >
                                <IconEnvelopeCheap />
                            </Link>
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
