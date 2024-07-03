import Image from "next/image";

import { BackgroundCirclesMobile } from "@/src/components/backgroundImages/BackgroundCirclesMobile";
import { BuyMeCoffeeLink } from "@/src/components/shared/BuyMeCoffeeLink";
import LocaleSwitcher from "@/src/components/shared/LocaleSwitcher";
import { ThemeSwitcher } from "@/src/components/shared/ThemeSwitcher";
import { HeaderMenuProps } from "@/types/HeaderMenuProps";

import { BackgroundCirclesTablet } from "../../backgroundImages/BackgroundCirclesTablet";
import { WriteUs } from "../../shared/WriteUs/WriteUs";
import { HeaderMenuList } from "../HeaderMenuList";
import { SocialLinksList } from "../SocialLinks/SocialLinksList";

const openedStyles = "h-80";
const closedStyles = "h-0";

export const MobileTabletHeaderMenu = ({
    isHeaderMenuOpened = false,
    setIsHeaderMenuOpened,
}: HeaderMenuProps) => {
    return (
        <nav
            className={`absolute top-[80px] left-0 z-20 w-[100vw] overflow-hidden transition-height duration-[600ms] ease-out
            dark:bg-purple-400 bg-white-100 ${isHeaderMenuOpened ? openedStyles : closedStyles}`}
        >
            <BackgroundCirclesMobile className="top-[-80px]" />
            <BackgroundCirclesTablet className="top-[-80px]" />

            <div className="flex flex-col justify-between items-center max-w-[540px] mx-auto tab:max-w-full h-70 p-4 tab:px-6 tab:py-[80px] mb-2 tab:mb-0 overflow-y-auto">
                <div className="flex justify-between tab:justify-end tab:gap-[111px] z-20 w-full">
                    <LocaleSwitcher />
                    <ThemeSwitcher id="MobileTabletHeaderMenuThemeSwitcher" />
                </div>

                <div className="flex justify-between items-center w-full tab:min-h-[571px] mb-8 tab:mb-0">
                    <div className="flex flex-col justify-around w-[43%] h-full tab:border-solid tab:border-r-[1px] tab:border-purple-stroke">
                        <HeaderMenuList
                            setIsHeaderMenuOpened={setIsHeaderMenuOpened}
                        />
                        <WriteUs className="hidden tab:block" />
                    </div>
                    <Image
                        src="/images/heartHeaderMenu.svg"
                        width="0"
                        height="0"
                        alt="Logo icon"
                        className="w-[56%] h-auto"
                    />
                </div>

                <WriteUs className="tab:hidden" />
                <div className="flex justify-between w-full mt-[20px] tab:mt-0">
                    <BuyMeCoffeeLink />
                    <SocialLinksList />
                </div>
            </div>
        </nav>
    );
};
