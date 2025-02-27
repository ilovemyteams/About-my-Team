import Image from "next/image";
import { useLocale } from "next-intl";

import { ProjectDataItemType } from "@/src/mockedData/allProjectsData";
import { LocaleType } from "@/types/LocaleType";

import { IconCorner } from "../shared/Icons/IconCorner";
import { SeeCaseButton } from "./SeeCaseButton";
import { Link } from "@/src/navigation";

export const ProjectCard = ({ data }: { data: ProjectDataItemType }) => {
    const locale = useLocale();
    const slug = data.data.slug;
    const cornersStyles =
        "w-9 h-7 tab:w-[42px] tab:h-[33px] pc:w-[63px] pc:h-[50px] desk:w-[80px] desk:h-[63px] dark:text-purple-stroke text-purple-strokeLight";
    return (
        <Link
            href={`/portfolio/${slug}`}
            className="relative w-full group cursor-pointer "
        >
            <IconCorner className={`absolute top-0 left-0 ${cornersStyles}`} />
            <IconCorner
                className={`absolute top-0 right-0 scale-x-[-1] ${cornersStyles}`}
            />
            <div className="dark:bg-projectCardGradientDark bg-projectCardGradient mb-3 desk:mb-4 overflow-hidden">
                <Image
                    src={data.data.image}
                    alt={data[locale as LocaleType].title}
                    width={1320}
                    height={990}
                    className=" group-hover:scale-110 duration-300 ease-out transition-transform"
                />
            </div>
            <div className="mb-4">
                <h4 className="mb-1 font-caviar text-lg desk:text-2xl">
                    {data[locale as LocaleType].title}
                </h4>
                <p className="text-sm20 tab:text-base23 desk:text-lg25">
                    {data[locale as LocaleType].subtitle}
                </p>
            </div>
            <SeeCaseButton />
        </Link>
    );
};
