import { useTranslations } from "next-intl";

import { ReturnButton } from "./ReturnButton";

export const UnderConstruction = () => {
    const getTranslation = useTranslations("UnderConstruction");

    return (
        <div className="relative bg-underConstructionGradientLight dark:bg-underConstructionGradient ">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-[url('/images/under-construction.jpg')] bg-no-repeat bg-cover bg-center -z-10"></div>
            <div className="container pt-[177px] tab:pt-[270px] pc:pt-[247px] pb-[197px] tab:pb-[264px] pc:pb-[297px] text-purple-200 dark:text-grey text-center ">
                <h1 className="font-caviar text-2xlb tab:text-5xl pc:text-6xl pb-4 tab:pb-3 dark:text-white-200">
                    {getTranslation("title")}
                </h1>
                <p className="pb-[52px] tab:pb-[56px] pc:pb-[49px] pc:text-xl">
                    {getTranslation("text")}
                </p>
                <ReturnButton />
            </div>
        </div>
    );
};

// Buttons;
