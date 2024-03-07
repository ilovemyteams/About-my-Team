import Image from "next/image";
import { PortfolioDataItem } from "./portfolioData";

interface PortfolioItemProps {
    item: PortfolioDataItem;
}

export const PortfolioCard = ({ item }: PortfolioItemProps) => {
    const { image, siteView, name, implementations, id } = item;
    const siteTypeUp = siteView?.toUpperCase();
    return (
        <>
            <div className="relative min-w-[50%] h-[400px]">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="min-w-[50%] h-[400px]"
                    style={{
                        objectFit: "cover",
                    }}
                />
                <div className="absolute bottom-0 block min-w-full h-[142px] bg-portfolioGradient">
                    <div className="absolute top-5 left-5">
                        <h3 className="font-caviar font-bold text-xl mb-1">
                            {name}
                        </h3>

                        <p className="text-sm font-bold text-purple-50 mb-4">
                            {siteTypeUp}
                        </p>

                        <div className="flex gap-2">
                            {implementations.map((implementation, index) => (
                                <div
                                    key={index}
                                    className="font-caviar font-bold text-base px-3 py-[6px] border border-[#D4D4D4]"
                                >
                                    {implementation}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute flex border  border-[#D4D4D4] w-[30px] h-7 top-5 right-5 items-center justify-center">
                        {id}
                    </div>
                </div>
            </div>
        </>
    );
};
