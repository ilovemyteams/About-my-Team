import Image from "next/image";

export interface PortfolioCardItemProps {
    data: {
        id: number;
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
    data,
    localizationData,
}: PortfolioCardItemProps) => {
    const { image, implementations, id } = data;
    const { siteView, name } = localizationData;

    const siteTypeUp = siteView?.toUpperCase();
    const idFormater = formatNumberWithLeadingZero(id);
    return (
        <>
            <div className="relative min-w-[100%] h-[330px] tab:min-w-[50%] tab:h-[400px]">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="min-w-[100%] h-[330px] tab:min-w-[50%] tab:h-[400px]"
                    className="object-cover"
                />
                <div className="absolute bottom-0 block min-w-full h-[134px] tab:h-[142px] bg-portfolioSectionGradient">
                    <div className="absolute top-5 left-2 tab:left-5">
                        <h3 className="font-caviar font-bold text-lg tab:text-xl mb-[6px]">
                            {name}
                        </h3>

                        <p className="text-xs tab:text-sm font-normal text-red mb-4">
                            {siteTypeUp}
                        </p>

                        <div className="flex gap-2">
                            {implementations.map((implementation, index) => (
                                <div
                                    key={index}
                                    className="text-xs tab:text-base px-1 py-[4.5px] tab:px-3 tab:py-[6px] border border-grey"
                                >
                                    {implementation}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute font-caviar font-bold text-base flex  w-[30px] h-7 top-5 right-2 tab:right-5 items-center justify-center">
                        {idFormater}
                    </div>
                </div>
            </div>
        </>
    );
};
