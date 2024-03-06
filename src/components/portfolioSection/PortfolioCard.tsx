import Image from "next/image";

import { PortfolioDataItem } from "./portfolioData";

interface PortfolioItemProps {
    item: PortfolioDataItem;
}

export const PortfolioCard = ({ item }: PortfolioItemProps) => {
    const { image, siteView, name, implementations, id } = item;
    const siteTypeUp = siteView.toUpperCase();
    return (
        <>
            <div className="relative w-80 h-96">
                <Image
                    src={image}
                    alt={name}
                    fill
                    style={{
                        objectFit: "cover",
                    }}
                />

                <div className="flex absolute mt-6 mx-4">
                    <div>
                        {implementations.map((implementation, index) => (
                            <div key={index} className="mr-2 mb-2">
                                {implementation}
                            </div>
                        ))}
                    </div>
                    <div className="h-8">{id}</div>
                </div>

                <div className="absolute bottom-6 mx-4">
                    <div className="font-caviar font-bold text-xl mb-1">
                        {name}
                    </div>

                    <div className="text-sm font-normal text-purple-50 mb-3">
                        {siteTypeUp}
                    </div>
                </div>
            </div>
        </>
    );
};
