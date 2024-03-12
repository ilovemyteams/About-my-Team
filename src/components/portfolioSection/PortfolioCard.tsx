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

export const PortfolioCard = ({
    data,
    localizationData,
}: PortfolioCardItemProps) => {
    const { image, implementations, id } = data;
    const { siteView, name } = localizationData;

    const siteTypeUp = siteView?.toUpperCase();
    return (
        <>
            <div className="relative min-w-[50%] h-[400px]">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="min-w-[50%] h-[400px]"
                    className="object-cover"
                />
                <div className="absolute bottom-0 block min-w-full h-[142px] bg-portfolioSectionGradient">
                    <div className="absolute top-5 left-5">
                        <h3 className="font-caviar font-bold text-xl mb-[6px]">
                            {name}
                        </h3>

                        <p className="text-sm font-normal text-red mb-4">
                            {siteTypeUp}
                        </p>

                        <div className="flex gap-2">
                            {implementations.map((implementation, index) => (
                                <div
                                    key={index}
                                    className="font-caviar font-bold text-base px-3 py-[6px] border border-grey"
                                >
                                    {implementation}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute flex  w-[30px] h-7 top-5 right-5 items-center justify-center">
                        {id}
                    </div>
                </div>
            </div>
        </>
    );
};
