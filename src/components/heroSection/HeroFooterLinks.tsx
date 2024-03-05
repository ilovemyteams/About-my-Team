import Link from "next/link";
import { useTranslations } from "next-intl";
import { BuyMeCoffee } from "../shared/BuyMeCoffee";

export const HeroFooterLinks = () => {
    const getTranslation = useTranslations("Hero");

    return (
        <div className="flex justify-between items-baseline mt-8">
            <BuyMeCoffee />
            <Link href="#portfolio" className="pointer">
                {getTranslation("portfolioLink")}
            </Link>
        </div>
    );
};
