import Link from "next/link";
import { useTranslations } from "next-intl";
import { BuyMeCoffeeLink } from "../shared/BuyMeCoffeeLink";

export const HeroFooterLinks = () => {
    const getTranslation = useTranslations("Hero");

    return (
        <div className="flex justify-end mx-[auto] mt-[-20px] max-w-[540px] pc:mx-0 pc:max-w-[none] pc:justify-between pc:items-baseline pc:mt-8">
            <BuyMeCoffeeLink
                className="hidden pc:flex"
                textClassName="left-[56px]"
            />
            <Link
                href="#portfolio"
                className="relative pointer font-caviar text-lg after:border-b-[1px] after:border-grey after:w-full after:content-[''] after:absolute after:left-0 after:bottom-[3px]
                transition ease-out duration-300 pc:hover:text-red pc:hover:after:border-red   after:transition after:ease-out after:duration-300"
            >
                {getTranslation("portfolioLink")}
            </Link>
        </div>
    );
};
