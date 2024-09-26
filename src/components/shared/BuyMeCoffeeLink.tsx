"use client";
import { useTranslations } from "next-intl";

import { useSettingsContext } from "@/src/utils/SettingsSanityContext";

import { IconBuyMeCoffee } from "./Icons/IconBuyMeCoffee";

interface BuyMeCoffeeLinkProps {
    className?: string;
    textClassName?: string;
}

export const BuyMeCoffeeLink = ({
    className,
    textClassName = "right-[56px]",
}: BuyMeCoffeeLinkProps) => {
    const getTranslation = useTranslations("Buttons");
    const { data } = useSettingsContext();

    const buttonNameString = data?.buttonBuyMeCoffee?.buttonName
        ? data.buttonBuyMeCoffee.buttonName.toString()
        : getTranslation("buyMeACoffe");

    const BUY_ME_COFFEE = data?.buttonBuyMeCoffee?.linkExternal?.url
        ? data.buttonBuyMeCoffee.linkExternal.url
        : "https://www.buymeacoffee.com/susanna.salata";
    return (
        <a
            href={BUY_ME_COFFEE}
            target={
                data?.buttonBuyMeCoffee?.linkExternal?.newWindow ? "_blank" : ""
            }
            rel="noopener noreferrer"
            className={`pointer relative group w-[56px] h-[56px] flex justify-center items-center     
                        icon-hover-rounded-purple ${className}`}
        >
            <IconBuyMeCoffee className="w-12 h-12" />
            <p
                className={`hidden pc:block absolute font-caviar text-lg top-[19px] w-max opacity-0 
                    invisible group-hover:visible group-hover:opacity-100 duration-[600ms] group-hover:ease-in transition-opacity-visibility ${textClassName}`}
            >
                {buttonNameString}
            </p>
        </a>
    );
};
