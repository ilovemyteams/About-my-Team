"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { LogoLink } from "../LogoLink";
import { BurgerMenuButton } from "../BurgerMenuButton";
import { MobileTabletHeaderMenu } from "./MobileTabletHeaderMenu";

export const MobileTabletHeader = () => {
    const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);
    const toggleHeaderMenuOpen = () =>
        setIsHeaderMenuOpened(!isHeaderMenuOpened);

    useEffect(() => {
        isHeaderMenuOpened
            ? setTimeout(() => (document.body.style.overflow = "hidden"), 590)
            : (document.body.style.overflow = "");
    }, [isHeaderMenuOpened]);
    return (
        <div className="pc:hidden absolute top-0 left-0 w-[100vw]">
            <div className="absolute z-20 h-[80px] overflow-hidden bg-grey dark:bg-purple-400">
                <Image
                    src="/images/bgImages/rightTopMobile.svg"
                    width="0"
                    height="0"
                    alt="background image circle"
                    className="absolute right-0 top-0  w-[320px] h-[319px] z-[-10]"
                />
                <div className=" w-[100vw] h-[80px] px-[24px] py-[20px] border-solid border-b-[1px] border-purple-stroke ">
                    <div className="flex justify-between items-center max-w-[540px] tab:max-w-full mx-auto">
                        <LogoLink
                            setIsHeaderMenuOpened={setIsHeaderMenuOpened}
                        />
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
