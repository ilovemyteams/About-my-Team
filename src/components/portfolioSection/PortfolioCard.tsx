import Image from "next/image";

import { GoToSiteLink } from "../shared/GoToSiteLink";

export interface PortfolioCardItemProps {
    index: number;
    data: {
        id: string;
        siteLink?: string;
        image: string;
        video?: string;
        implementations: string[];
    };
    localizationData: { name: string; siteView: string; description: string };
}

export const PortfolioCard = ({
    data,
    localizationData,
}: PortfolioCardItemProps) => {
    const { image, siteLink, implementations } = data;
    const { siteView, name } = localizationData;
    const siteTypeUp = siteView?.toUpperCase();
    return (
        <div className="relative min-w-[100%] h-[370px] tab:min-w-[50%] pc:h-[500px]">
            <Image
                src={image}
                alt={name}
                width={288}
                height={196}
                className=" object-cover w-[100%] h-[236px] tab:h-[270px] pc:h-[358px]"
            />
            <div className="absolute -bottom-0 block min-w-full h-[134px] tab:h-[130px] pc:h-[142px] dark:bg-portfolioSectionGradient bg-portfolioSectionGradientLight">
                <div className="px-2 py-5 tab:p-4 pc:p-5">
                    <div className="flex justify-between items-center mb-[6px]">
                        <h3 className="font-caviar font-bold text-lg tab:text-xl  text-purple-200 dark:text-grey">
                            {name}
                        </h3>
                        {siteLink && <GoToSiteLink siteLink={siteLink} />}
                    </div>
                    <p className="text-xs tab:text-sm font-normal dark:text-red text-redLight mb-4 tab:mb-3 pc:mb-[18px]">
                        {siteTypeUp}
                    </p>

                    <div className="flex gap-2 pc:hidden">
                        {implementations.map((implementation, index) => {
                            if (index < 4) {
                                return (
                                    <div
                                        key={index}
                                        className="text-xs pc:text-base text-purple-200 dark:text-grey px-1 py-[4.5px] tab:px-2 tab:py-[8.5px] pc:px-3 pc:py-[6px] border border-purple-200 dark:border-grey"
                                    >
                                        {implementation}
                                    </div>
                                );
                            }
                        })}
                    </div>
                    <div className="hidden pc:flex gap-2">
                        {implementations.map((implementation, index) => (
                            <div
                                key={index}
                                className="text-xs pc:text-base text-purple-200 dark:text-grey px-1 py-[4.5px] tab:px-2 tab:py-[8.5px] pc:px-3 pc:py-[6px] border border-purple-200 dark:border-grey"
                            >
                                {implementation}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
