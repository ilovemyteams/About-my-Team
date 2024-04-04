import Image from "next/image";
import { HeaderMenuList } from "../HeaderMenuList";
import { ThemeSwitcher } from "@/src/components/shared/ThemeSwitcher";
import LocaleSwitcher from "@/src/components/shared/LocaleSwitcher";
import { BuyMeCoffeeLink } from "@/src/components/shared/BuyMeCoffeeLink";
import { SocialLinksList } from "../SocialLinks/SocialLinksList";
import { WriteUsModal } from "../../shared/WriteUsModal";
import { HeaderMenuProps } from "@/types/HeaderMenuProps";
import { BackgroundCirclesMobile } from "@/src/components/backgroundImages/BackgroundCirclesMobile";
import { BackgroundCirclesTablet } from "../../backgroundImages/BackgroundCirclesTablet";

const openedStyles = "h-80";
const closedStyles = "h-0";

export const MobileTabletHeaderMenu = ({
    isHeaderMenuOpened = false,
    setIsHeaderMenuOpened,
}: HeaderMenuProps) => {
    return (
        <div
            className={`absolute top-[80px] left-[0px] z-20 w-[100vw] overflow-hidden transition-height duration-[600ms] ease-out
                     bg-purple-400 ${isHeaderMenuOpened ? openedStyles : closedStyles}`}
        >
            <BackgroundCirclesMobile className="top-[-80px]" />
            <BackgroundCirclesTablet className="top-[-80px]" />
            <div className="flex flex-col justify-between items-center max-w-[540px] mx-auto tab:max-w-full h-70 p-4 tab:px-6 tab:py-[80px] mb-2 tab:mb-0 overflow-y-auto">
                <div className="flex justify-between tab:justify-end tab:gap-[111px] z-20 w-full">
                    <LocaleSwitcher />
                    <ThemeSwitcher />
                </div>

                <div className="flex justify-between items-center w-full tab:min-h-[510px] mb-8 tab:mb-0">
                    <div className="flex flex-col justify-around w-[43%] h-full tab:border-solid tab:border-r-[1px] tab:border-purple-stroke">
                        <HeaderMenuList
                            setIsHeaderMenuOpened={setIsHeaderMenuOpened}
                        />
                        <WriteUsModal className="hidden tab:block" />
                    </div>
                    <Image
                        src="/images/heartHeaderMenu.svg"
                        width="0"
                        height="0"
                        alt="Logo icon"
                        className="w-[56%] h-auto"
                    />
                </div>

                <WriteUsModal className="tab:hidden" />
                <div className="flex justify-between w-full mt-[20px] tab:mt-0">
                    <BuyMeCoffeeLink />
                    <SocialLinksList />
                </div>
            </div>
        </div>
    );
};
