import Image from "next/image";

import { GoToSiteLink } from "../../shared/GoToSiteLink";

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
        <div className="relative w-[100%] h-[auto] max-h-[421px] aspect-[288/273] tab:min-w-[50%] tab:aspect-[360/328] pc:aspect-[540/445] pc:max-h-[600px] ">
            <Image
                src={image}
                alt={name}
                width={688}
                height="0"
                className=" object-cover object-top w-[100%] min-h-[162px] aspect-[288/162] tab:min-h-[202px] tab:aspect-[360/202] pc:min-h-[303px] pc:aspect-[540/303]"
            />
            <div className="absolute -bottom-0 block min-w-full min-h-[111px] aspect-[288/111] max-h-[170px] tab:min-h-[126px] tab:aspect-[360/126] tab:max-h-[160px] pc:min-h-[140px]  pc:aspect-[360/140] pc:max-h-[175px] dark:bg-portfolioSectionGradient bg-portfolioSectionGradientLight">
                <div className="px-2 py-3 tab:p-4 pc:p-5">
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
