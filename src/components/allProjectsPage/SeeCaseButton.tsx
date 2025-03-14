import { useTranslations } from "next-intl";

import { IconArrow } from "../shared/Icons/IconArrow";

export const SeeCaseButton = () => {
    const getTranslation = useTranslations("PortfolioPage");
    return (
        <div className="flex gap-1 dark:text-purple-50 text-purple-130 group-hover:dark:text-red group-hover:text-redLight duration-300 ease-out transition-colors">
            <p className="font-caviar text-lg underline underline-offset-[3.5px]">
                {getTranslation("seeCase")}
            </p>
            <div className="w-[25px] h-[25px] flex">
                <IconArrow className="mx-auto my-auto group-hover:rotate-[-45deg] duration-300 ease-out transition-transform" />
            </div>
        </div>
    );
};
