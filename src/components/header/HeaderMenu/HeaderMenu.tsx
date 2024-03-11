import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "../../shared/Button";
import LocaleSwitcher from "../../shared/LocaleSwitcher";
import { ThemeSwitcher } from "../../shared/ThemeSwitcher";
import { HeaderMenuList } from "./HeaderMenuList";
import { BuyMeCoffeeLink } from "../../shared/BuyMeCoffeeLink";

interface HeaderMenuProps {
    isHeaderMenuOpened: boolean;
    setIsHeaderMenuOpened: (
        value: boolean | ((prev: boolean) => boolean)
    ) => void;
}

const openedStyles = "w-80";
const closedStyles = "w-0";

export const HeaderMenu = ({
    isHeaderMenuOpened = false,
    setIsHeaderMenuOpened,
}: HeaderMenuProps) => {
    const getTranslation = useTranslations("Buttons");

    return (
        <div
            className={`${isHeaderMenuOpened ? openedStyles : closedStyles} absolute top-0 left-[80px] z-20 h-[100vh] py-[32px] overflow-hidden transition-width duration-[600ms] ease-out bg-grey dark:bg-purple-400`}
        >
            <div className="flex flex-col justify-between w-80 h-full px-[60px]">
                <div className="overflow-hidden w-full flex gap-[183px] justify-end relative z-10">
                    <LocaleSwitcher />
                    <ThemeSwitcher />
                </div>
                <div className="flex justify-around w-full overflow-hidden">
                    <div className="flex flex-col justify-center w-[432px] overflow-hidden py-[48px] border-solid border-r-[1px] border-purple-stroke">
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
                <BuyMeCoffeeLink className="ml-auto overflow-hidden" />
            </div>
        </div>
    );
};
