import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "../../shared/Button";
import LocaleSwitcher from "../../shared/LocaleSwitcher";
import { ThemeSwitcher } from "../../shared/ThemeSwitcher";
import { HeaderMenuList } from "../HeaderMenuList";
import { BuyMeCoffeeLink } from "../../shared/BuyMeCoffeeLink";
import { HeaderMenuProps } from "@/types/HeaderMenuProps";
import { BackgroundCircles } from "@/src/components/backgroundImages/BackgroundCircles";

const openedStyles = "w-80";
const closedStyles = "w-0";

export const DesktopHeaderMenu = ({
    isHeaderMenuOpened = false,
    setIsHeaderMenuOpened,
}: HeaderMenuProps) => {
    const getTranslation = useTranslations("Buttons");

    return (
        <div
            className={`${isHeaderMenuOpened ? openedStyles : closedStyles} absolute top-0 left-[80px] z-20 h-[100vh] overflow-hidden transition-width duration-[600ms] ease-out
        bg-grey dark:bg-purple-400`}
        >
            <BackgroundCircles className="left-[-80px]" />
            <div className="flex flex-col justify-between w-80 h-[100vh] py-[32px] px-[60px]">
                <div className="flex justify-end gap-[183px] w-full relative z-20">
                    <LocaleSwitcher />
                    <ThemeSwitcher />
                </div>
                <div className="flex justify-around w-full overflow-hidden relative z-20">
                    <div className="flex flex-col justify-center w-[432px] py-[48px] border-solid border-r-[1px] border-purple-stroke">
                        <HeaderMenuList
                            setIsHeaderMenuOpened={setIsHeaderMenuOpened}
                        />
                        <Button className="mt-[64px]">
                            {getTranslation("order")}
                        </Button>
                    </div>
                    <div className="w-[648px] overflow-hidden">
                        <Image
                            src="/images/heartHeaderMenu.svg"
                            width="0"
                            height="0"
                            alt="Logo icon"
                            className="w-[644px] h-auto"
                        />
                    </div>
                </div>
                <BuyMeCoffeeLink className="relative z-20 ml-auto" />
            </div>
        </div>
    );
};
