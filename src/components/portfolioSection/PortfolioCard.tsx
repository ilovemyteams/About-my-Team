import { addProtocol } from "@/src/utils/addProtocol";
import Image from "next/image";

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
        <div className="relative min-w-[100%] h-[330px] tab:min-w-[50%] pc:h-[400px]">
            <Image
                src={image}
                alt={name}
                width={288}
                height={196}
                className=" object-cover object-top w-[100%] h-[196px] tab:h-[200px] pc:h-[258px]"
            />
            <div className="absolute -bottom-0 block min-w-full h-[134px] tab:h-[130px] pc:h-[142px] dark:bg-portfolioSectionGradient bg-portfolioSectionGradientLight">
                <div className="px-2 py-5 tab:p-4 pc:p-5">
                    <h3 className="font-caviar font-bold text-lg tab:text-xl mb-[6px] text-purple-200 dark:text-grey">
                        {name}
                    </h3>
                    <div className="flex justify-between items-center mb-4 tab:mb-3 pc:mb-[18px]">
                        <p className="text-xs tab:text-sm font-normal dark:text-red text-redLight ">
                            {siteTypeUp}
                        </p>
                        {siteLink && (
                            <a
                                target="_blank"
                                href={addProtocol(siteLink)}
                                rel="noopener noreferrer"
                                className="block border-b dark:border-grey border-greyLight dark:pc:hover:text-red dark:pc:hover:border-red pc:hover:border-redLight
                         pc:hover:text-redLight dark:active:text-red active:text-redLight dark:active:border-red active:border-redLight 
                         dark:pc:focus:text-red pc:focus:text-redLight dark:pc:focus:border-red pc:focus:border-redLight font-caviar text-lg outline-none
                         transition-color ease-out duration-300"
                            >
                                {siteLink}
                            </a>
                        )}
                    </div>

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
