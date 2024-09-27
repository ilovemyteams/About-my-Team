import Image from "next/image";

import { PortfolioSliderProps } from "@/types/sanityDataPropsTypes";

import { GoToSiteLink } from "../shared/GoToSiteLink";
import { NoImageHeart } from "../shared/NoImageHeart";

export interface PortfolioCardItemProps {
    data: PortfolioSliderProps;
    index: string;
}

export const PortfolioCard = ({ data }: PortfolioCardItemProps) => {
    const { image, URL, stages, category, title } = data || {};
    const imageSrc = image?.asset;
    console.log("imageSrc", image);

    return (
        <div className="relative min-w-[100%] h-[330px] tab:min-w-[50%] pc:h-[400px]">
            {imageSrc ? (
                <Image
                    src={imageSrc}
                    alt={image.caption}
                    width={288}
                    height={196}
                    className=" object-cover object-top w-[100%] h-[196px] tab:h-[200px] pc:h-[258px]"
                />
            ) : (
                <NoImageHeart className="w-[43%] tab:w-[50%] absolute top-0 right-0" />
            )}
            <div className="absolute -bottom-0 block min-w-full h-[134px] tab:h-[130px] pc:h-[142px] dark:bg-portfolioSectionGradient bg-portfolioSectionGradientLight">
                <div className="px-2 py-5 tab:p-4 pc:p-5">
                    <div className="flex justify-between items-center mb-[6px]">
                        <h3 className="font-caviar font-bold text-lg tab:text-xl  text-purple-200 dark:text-grey">
                            {title}
                        </h3>
                        {URL?.url && <GoToSiteLink siteLink={URL.url} />}
                    </div>
                    <p className="text-xs tab:text-sm font-normal dark:text-red text-redLight mb-4 tab:mb-3 pc:mb-[18px]">
                        {category}
                    </p>

                    <div className="flex gap-2 pc:hidden">
                        {stages &&
                            stages.map((stages, index) => {
                                if (index < 4) {
                                    return (
                                        <div
                                            key={index}
                                            className="text-xs pc:text-base text-purple-200 dark:text-grey px-1 py-[4.5px] tab:px-2 tab:py-[8.5px] pc:px-3 pc:py-[6px] border border-purple-200 dark:border-grey"
                                        >
                                            {stages}
                                        </div>
                                    );
                                }
                            })}
                    </div>
                    <div className="hidden pc:flex gap-2">
                        {stages &&
                            stages.map((stages, index) => (
                                <div
                                    key={index}
                                    className="text-xs pc:text-base text-purple-200 dark:text-grey px-1 py-[4.5px] tab:px-2 tab:py-[8.5px] pc:px-3 pc:py-[6px] border border-purple-200 dark:border-grey"
                                >
                                    {stages}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
