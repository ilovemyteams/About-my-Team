import Link from "next/link";
import { useTranslations } from "next-intl";

import { BuyMeCoffeeLink } from "../shared/BuyMeCoffeeLink";
import { MainPageNavList } from "./MainPageNavList";

export const HeroFooterLinks = () => {
    const getTranslation = useTranslations("Hero");

    return (
        <>
            <div
                className="flex justify-center mx-[auto] mt-6 max-w-[540px] 
                       tab:mt-8
                       tab:mx-0 tab:max-w-[none] tab:justify-between tab:items-baseline pc:mt-2 deskxl:mt-10 mb-6"
            >
                <BuyMeCoffeeLink
                    className="hidden tab:flex"
                    textClassName="pc:left-[56px]"
                />
                <Link
                    href="#portfolio"
                    className="relative pointer font-caviar text-lg border-b-[1px] outline-none dark:border-grey border-greyLight
                pc:transition-color pc:ease-out pc:duration-300 dark:pc:hover:text-red pc:hover:text-redLight dark:pc:hover:border-red pc:hover:border-redLight
                dark:active:text-red active:text-redLight dark:active:border-red active:border-redLight"
                >
                    {getTranslation("portfolioLink")}
                </Link>
            </div>
            <MainPageNavList />
        </>
    );
};
