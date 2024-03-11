import Link from "next/link";
import { useTranslations } from "next-intl";
import { BuyMeCoffeeLink } from "../shared/BuyMeCoffeeLink";

export const HeroFooterLinks = () => {
    const getTranslation = useTranslations("Hero");

    return (
        <div className="flex justify-between items-baseline mt-8">
            <BuyMeCoffeeLink />
            <Link
                href="#portfolio"
                className="relative pointer after:border-b-[1px] after:border-grey after:w-full after:content-[''] after:absolute after:left-0 after:bottom-[3px]
                transition ease-out duration-300 hover:text-red hover:after:border-red   after:transition after:ease-out after:duration-300"
            >
                {getTranslation("portfolioLink")}
            </Link>
        </div>
    );
};
