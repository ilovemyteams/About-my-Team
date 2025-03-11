import Image from "next/image";
import { useTranslations } from "next-intl";

import { IconCorner } from "../shared/Icons/IconCorner";

export const ProjectStub = () => {
    const getTranslations = useTranslations("PortfolioPage");
    const cornersStyles =
        "w-9 h-7 tab:w-[42px] tab:h-[33px] pc:w-[63px] pc:h-[50px] desk:w-[80px] desk:h-[63px] dark:text-purple-stroke text-purple-strokeLight";
    return (
        <div className="relative w-full">
            <IconCorner className={`absolute top-0 left-0 ${cornersStyles}`} />
            <IconCorner
                className={`absolute top-0 right-0 scale-x-[-1] ${cornersStyles}`}
            />
            <div className="flex w-full aspect-[4/3] dark:bg-projectCardGradientDark bg-projectCardGradient overflow-hidden">
                <div className="mx-auto mt-[12%] flex flex-col justify-between h-[62%]">
                    <Image
                        src="/images/logo.svg"
                        alt="heart-shaped company logo"
                        width={148}
                        height={133}
                        className="mx-auto h-[max(55%,50px)] w-auto opacity-35 group-hover:scale-110 duration-300 ease-out transition-transform"
                    />
                    <p className="font-caviar text-center text-purple-200 dark:text-grey text-baseb pc:text-2xlb desk:text-4xl">
                        {getTranslations("stub")}
                    </p>
                </div>
            </div>
        </div>
    );
};
