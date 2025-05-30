"use client";
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
    seeCaseButton = true,
    main = false,
}: {
    data: PortfolioDataItemType;
    needName?: boolean;
    seeCaseButton?: boolean;
    main?: boolean;
}) => {
    const locale = useLocale();
    const slug = data.data.slug;
    const cornersStyles =
        "w-9 h-7 tab:w-[42px] tab:h-[33px] pc:w-[63px] pc:h-[50px] desk:w-[80px] desk:h-[63px] dark:text-purple-stroke text-purple-strokeLight";
    return (
        <Link
            href={!main ? `/portfolio/${slug}` : ""}
            onClick={e => {
                if (main) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }}
            className={`relative block w-full group ${main ? "cursor-none" : "cursor-pointer"}  pb-3`}
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
            {main && (
                <p className="text-base dark:text-grey text-purple-200 font-caviar font-bold first-letter:uppercase pc:text-lg pc:mb-1 pc:pt-1 desk:pt-0 desk:text-2xl">
                    {data[locale as LocaleType].siteView}
                </p>
            )}
            <div className=" pc:flex pc:justify-between pc:items-end">
                <div className={`${needName ? "mb-4 pc:mb-0" : "hidden"} `}>
                    <h4 className="mb-1 font-caviar text-lg desk:text-2xl dark:text-white-200 text-purple-200">
                        {data[locale as LocaleType].name}
                    </h4>
                    <p className="text-sm20 tab:text-base23 desk:text-lg25">
                        {data[locale as LocaleType].subtitle}
                    </p>
                </div>
                {seeCaseButton && <SeeCaseButton />}
            </div>
        </Link>
    );
};
