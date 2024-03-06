import Image from "next/image";
import { TopBox } from "./TopBox";
import { BottomBox } from "./BottomBox";
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
                            <TopBox key={index} className="mr-2 mb-2">
                                {implementation}
                            </TopBox>
                        ))}
                    </div>
                    <TopBox className="h-8">{id}</TopBox>
                </div>

                <div className="absolute bottom-6 mx-4">
                    <BottomBox className="font-caviar font-bold text-xl mb-1">
                        {name}
                    </BottomBox>

                    <BottomBox className="text-sm font-normal text-purple-50 mb-3">
                        {siteTypeUp}
                    </BottomBox>
                </div>
            </div>
        </>
    );
};
