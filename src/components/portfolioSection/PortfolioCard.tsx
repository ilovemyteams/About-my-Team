import Image from "next/image";
import { TopBox } from "./TopBox";
import { BottomBox } from "./BottomBox";
import { PortfolioDataItem } from "./portfolioData";
import { useTranslations } from "next-intl";

interface PortfolioItemProps {
    item: PortfolioDataItem;
}

export const PortfolioCard = ({ item }: PortfolioItemProps) => {
    const getTranslation = useTranslations();
    const { image, siteView, description, name } = item;
    const siteTypeUp = siteView.toUpperCase();
    return (
        <>
            <div className="relative -mx-4 w-80 h-96">
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
                        <TopBox className="mr-2 mb-2">Design</TopBox>
                        <TopBox className="mr-2">Logo Design</TopBox>
                        <TopBox>Web Development</TopBox>
                    </div>
                    <TopBox className="h-8">01</TopBox>
                </div>

                <div className="absolute bottom-6 mx-4">
                    <BottomBox className="font-caviar font-bold text-xl mb-1">
                        {getTranslation(`${name}`)}
                    </BottomBox>

                    <BottomBox className="text-sm font-normal text-purple-50 mb-3">
                        {siteTypeUp}
                    </BottomBox>
                    <BottomBox>{getTranslation(`${description}`)}</BottomBox>
                </div>
            </div>
        </>
    );
};
