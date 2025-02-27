import Image from "next/image";
import { useLocale } from "next-intl";

import { ProjectDataItemType } from "@/src/mockedData/allProjectsData";

import { IconCorner } from "../shared/Icons/IconCorner";
import { LocaleType } from "@/types/LocaleType";

export const ProjectCard = ({ data }: { data: ProjectDataItemType }) => {
    const locale = useLocale();
    const cornersStyles =
        "w-9 h-7 tab:w-[42px] tab:h-[33px] pc:w-[63px] pc:h-[50px] desk:w-[80px] desk:h-[63px] dark:text-purple-stroke text-purple-strokeLight";
    return (
        <div className="relative w-full ">
            <IconCorner className={`absolute top-0 left-0 ${cornersStyles}`} />
            <IconCorner
                className={`absolute top-0 right-0 scale-x-[-1] ${cornersStyles}`}
            />
            <div className="dark:bg-projectCardGradientDark bg-projectCardGradient mb-3 desk:mb-4">
                <Image
                    src={data.data.image}
                    alt={data[locale as LocaleType].title}
                    width={1320}
                    height={990}
                />
            </div>
            <div className="">
                <h4 className="mb-1 font-caviar text-lg desk:text-2xl">
                    {data[locale as LocaleType].title}
                </h4>
                <p className="text-sm20 tab:text-base23 desk:text-lg25">
                    {data[locale as LocaleType].subtitle}
                </p>
            </div>
        </div>
    );
};
