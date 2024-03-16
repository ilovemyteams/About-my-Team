import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/src/components/shared/Button";
import { HeaderMenuList } from "../HeaderMenuList";
import { ThemeSwitcher } from "@/src/components/shared/ThemeSwitcher";
import LocaleSwitcher from "@/src/components/shared/LocaleSwitcher";
import { BuyMeCoffeeLink } from "@/src/components/shared/BuyMeCoffeeLink";
import { SocialLinksList } from "../SocialLinks/SocialLinksList";
import { HeaderMenuProps } from "@/types/HeaderMenuProps";
import { BackgroundCirclesMobile } from "@/src/components/backgroundImages/BackgroundCirclesMobile";

const openedStyles = "h-80";
const closedStyles = "h-0";

export const MobileHeaderMenu = ({
    isHeaderMenuOpened = false,
    setIsHeaderMenuOpened,
}: HeaderMenuProps) => {
    const getTranslation = useTranslations("Buttons");

    return (
        <div
            className={`absolute top-[80px] left-[0px] z-20 w-[100vw] overflow-hidden transition-height duration-[600ms] ease-out
    bg-grey dark:bg-purple-400 ${isHeaderMenuOpened ? openedStyles : closedStyles}`}
        >
            <BackgroundCirclesMobile className="top-[-80px]" />
            <div className="flex flex-col justify-between items-center h-80 p-4 overflow-y-auto">
                <div className="flex justify-between z-20 w-full">
                    <LocaleSwitcher />
                    <ThemeSwitcher />
                </div>

                <div className="flex justify-between items-center w-full">
                    <HeaderMenuList
                        setIsHeaderMenuOpened={setIsHeaderMenuOpened}
                    />
                    <Image
                        src="/images/heartHeaderMenu.svg"
                        width="0"
                        height="0"
                        alt="Logo icon"
                        className="w-[57%] h-auto"
                    />
                </div>

                <Button>{getTranslation("order")}</Button>
                <div className="flex justify-between w-full">
                    <BuyMeCoffeeLink />
                    <SocialLinksList />
                </div>
            </div>
        </div>
    );
};
