import Link from "next/link";
import { useTranslations } from "next-intl";
import { BuyMeCoffeeLink } from "../shared/BuyMeCoffeeLink";

export const HeroFooterLinks = () => {
    const getTranslation = useTranslations("Hero");

    return (
        <div
            className="flex justify-center mx-[auto] mt-6 max-w-[540px] 
                       tab:mt-8
                       tab:mx-0 tab:max-w-[none] tab:justify-between tab:items-baseline pc:mt-2"
        >
            <BuyMeCoffeeLink
                className="hidden tab:flex"
                textClassName="pc:left-[56px]"
            />
            <Link
                href="#portfolio"
                className="relative pointer font-caviar text-lg border-b-[1px] border-grey 
                pc:transition-color pc:ease-out pc:duration-300 pc:hover:text-red pc:hover:border-red
                active:text-red"
            >
                {getTranslation("portfolioLink")}
            </Link>
        </div>
    );
};
