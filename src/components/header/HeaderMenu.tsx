import { useTranslations } from "next-intl";
import { Button } from "../shared/Button";
import LocaleSwitcher from "../shared/LocaleSwitcher";
import { ThemeSwitcher } from "../shared/ThemeSwitcher";
import { HeaderMenuList } from "./HeaderMenuList";
import { BuyMeCoffeeLink } from "../shared/BuyMeCoffeeLink";

export const HeaderMenu = () => {
    const getTranslation = useTranslations("Buttons");
    return (
        <div className="absolute top-0 left-[80px] z-20 flex flex-col justify-between w-[calc(100vw-80px)] h-[100vh] p-x-[60px] py-[32px] container bg-purple-200">
            <div className="flex gap-[204px] justify-end relative z-10">
                <LocaleSwitcher />
                <ThemeSwitcher />
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col justify-between w-[36%] py-[48px] border-solid border-r-[1px] border-purple-stroke">
                    <HeaderMenuList />
                    <Button className="mt-[64px]">
                        {getTranslation("order")}
                    </Button>
                </div>
                <div className="w-[64%] bg-heartHeaderMenu bg-no-repeat bg-center"></div>
            </div>
            <BuyMeCoffeeLink className="ml-auto" />
        </div>
    );
};
