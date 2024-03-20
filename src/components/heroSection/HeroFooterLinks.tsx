import Link from "next/link";
import { useTranslations } from "next-intl";
import { BuyMeCoffeeLink } from "../shared/BuyMeCoffeeLink";

export const HeroFooterLinks = () => {
    const getTranslation = useTranslations("Hero");

    return (
        <div className="flex justify-end mx-[auto] mt-[-20px] max-w-[540px] pc:mx-0 pc:max-w-[none] pc:justify-between pc:items-baseline pc:mt-2">
            <BuyMeCoffeeLink
                className="hidden pc:flex"
                textClassName="left-[56px]"
            />
            <Link
                href="#portfolio"
                className="relative pointer font-caviar text-lg border-b-[1px] border-grey 
                transition-color ease-out duration-300 pc:hover:text-red pc:hover:border-red"
            >
                {getTranslation("portfolioLink")}
            </Link>
        </div>
    );
};
