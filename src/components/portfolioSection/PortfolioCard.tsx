import Image from "next/image";

export interface PortfolioCardItemProps {
    index: number;
    data: {
        id: string;

        image: string;
        video?: string;
        implementations: string[];
    };
    localizationData: { name: string; siteView: string; description: string };
}
function formatNumberWithLeadingZero(num: number): string {
    return num.toString().padStart(2, "0");
}

export const PortfolioCard = ({
    index,
    data,
    localizationData,
}: PortfolioCardItemProps) => {
    const { image, implementations } = data;
    const { siteView, name } = localizationData;
    const projectNumber = index + 1;
    const siteTypeUp = siteView?.toUpperCase();
    const idFormater = formatNumberWithLeadingZero(projectNumber);
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
                <div className="absolute top-5 left-2 tab:top-[18px] tab:left-4 pc:left-5 pc:top-5">
                    <h3 className="font-caviar font-bold text-lg tab:text-xl mb-[6px] text-purple-200 dark:text-grey">
                        {name}
                    </h3>

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
                <div className="absolute font-caviar font-bold text-base text-purple-200 dark:text-grey flex w-[30px] h-7 top-5 right-2 tab:top-4 tab:right-4 pc:right-5 pc:top-5 items-center justify-center">
                    {idFormater}
                </div>
            </div>
        </div>
    );
};
