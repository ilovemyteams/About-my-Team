import Image from "next/image";
import LocaleSwitcher from "../../shared/LocaleSwitcher";
import { ThemeSwitcher } from "../../shared/ThemeSwitcher";
import { HeaderMenuList } from "../HeaderMenuList";
import { BuyMeCoffeeLink } from "../../shared/BuyMeCoffeeLink";
import { HeaderMenuProps } from "@/types/HeaderMenuProps";
import { BackgroundCircles } from "@/src/components/backgroundImages/BackgroundCircles";
import { WriteUs } from "../../shared/WriteUs/WriteUs";
import { BackgroundCirclesBigScreens } from "../../backgroundImages/BackgroundCircles1536BigScreens";

const openedStyles = "w-80 deskxl:w-120";
const closedStyles = "w-0";

export const DesktopHeaderMenu = ({
    isHeaderMenuOpened = false,
    setIsHeaderMenuOpened,
}: HeaderMenuProps) => {
    return (
        <nav
            className={`${isHeaderMenuOpened ? openedStyles : closedStyles} absolute top-0 left-[80px] deskxl:left-[120px] z-20 h-[100vh] overflow-hidden transition-width duration-[600ms] ease-out
            dark:bg-purple-400 bg-white-100`}
        >
            <div className={`dark:block hidden`}>
                <BackgroundCircles className="left-[-80px]" />
                <BackgroundCirclesBigScreens className="left-[-80px] deskxl:left-[-120px]" />
            </div>
            <div className="w-80 deskxl:w-120">
                <div className="flex flex-col justify-between w-80 deskxl:w-120 desk:max-w-[1456px] px-[60px] py-[32px] h-[100vh] mx-auto">
                    <div className="flex justify-end gap-[204px] w-full relative z-20">
                        <LocaleSwitcher />
                        <ThemeSwitcher id="DesktopHeaderMenuThemeSwitcher" />
                    </div>
                    <div className="flex justify-between w-full overflow-hidden relative z-20">
                        <div className="flex flex-col justify-center gap-y-[64px] min-w-[402px] w-[37%] py-[48px] border-solid border-r-[1px] border-purple-stroke">
                            <HeaderMenuList
                                setIsHeaderMenuOpened={setIsHeaderMenuOpened}
                            />
                            <WriteUs />
                        </div>
                        <div className="flex justify-center items-center min-w-[618px] w-[57%] h-auto overflow-hidden">
                            <Image
                                src="/images/heartHeaderMenu.svg"
                                width="0"
                                height="0"
                                alt="Logo icon"
                                className="w-[618px] h-auto"
                            />
                        </div>
                    </div>
                    <BuyMeCoffeeLink className="relative z-20 ml-auto" />
                </div>
            </div>
        </nav>
    );
};
