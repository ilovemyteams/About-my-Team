import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/src/i18n/routing";
import { PortfolioDataItemType } from "@/src/mockedData/portfolioData";
import { LocaleType } from "@/types/LocaleType";

import { IconCorner } from "./Icons/IconCorner";
import { SeeCaseButton } from "./SeeCaseButton";

export const ProjectCard = ({
    data,
    needName,
}: {
    data: PortfolioDataItemType;
    needName?: boolean;
}) => {
    const locale = useLocale();
    const slug = data.data.slug;
    const cornersStyles =
        "w-9 h-7 tab:w-[42px] tab:h-[33px] pc:w-[63px] pc:h-[50px] desk:w-[80px] desk:h-[63px] dark:text-purple-stroke text-purple-strokeLight";
    return (
        <Link
            href={`/portfolio/${slug}`}
            className="relative block w-full group cursor-pointer pb-3"
        >
            <IconCorner className={`absolute top-0 left-0 ${cornersStyles}`} />
            <IconCorner
                className={`absolute top-0 right-0 scale-x-[-1] ${cornersStyles}`}
            />
            <div className="dark:bg-projectCardGradientDark bg-projectCardGradient mb-3 desk:mb-4 overflow-hidden">
                <Image
                    src={data.data.imageForAllProjectsPage}
                    alt={data[locale as LocaleType].name}
                    width={1320}
                    height={990}
                    className=" group-hover:scale-110 duration-300 ease-out transition-transform"
                />
            </div>
            <div className=" pc:flex pc:justify-between pc:items-end">
                <div className={`${needName ? "" : "hidden"} mb-4 pc:mb-0`}>
                    <h4 className="mb-1 font-caviar text-lg desk:text-2xl dark:text-white-200 text-purple-200">
                        {data[locale as LocaleType].name}
                    </h4>
                    <p className="text-sm20 tab:text-base23 desk:text-lg25">
                        {data[locale as LocaleType].subtitle}
                    </p>
                </div>
                <SeeCaseButton />
            </div>
        </Link>
    );
};
