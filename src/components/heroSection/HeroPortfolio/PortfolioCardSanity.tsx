import Image from "next/image";

import { NoImageHeart } from "../../shared/NoImageHeart";
import { SmallPageTitle } from "../../shared/SmallPageTitle";

export const PortfolioCardSanity = ({
    sanityData,
}: {
    sanityData: {
        title: string | null;
        image: {
            caption: string | null;
            asset: string | null;
        } | null;
        category: string | null;
        _id: string;
    };
}) => {
    const alt = sanityData?.image?.caption
        ? sanityData.image.caption.toString()
        : "alt";

    return (
        <div
            className="relative w-portfolioHeroCard tab:w-[100%] min-h-[236px] aspect-[288/236] max-w-[540px] 
                        tab:aspect-[360/300] pc:aspect-[540/350]  
                        pc:w-[540px] deskxl:w-[668px] deskxl:aspect-[668/428] deskxl:max-w-[668px] bg-CTAGradientLight dark:bg-CTAGradient"
        >
            {sanityData.image?.asset ? (
                <Image
                    src={sanityData.image.asset.toString()}
                    width={540}
                    height="0"
                    alt={alt}
                    className="min-w-[288px] aspect-[288/236] tab:min-w-[360px] pc:w-[540px]
                tab:aspect-[360/300] pc:aspect-[540/350]  
                deskxl:w-[668px] deskxl:aspect-[668/428] deskxl:max-w-[668px] 
                object-cover"
                />
            ) : (
                <NoImageHeart className="w-[43%] tab:w-[50%] absolute top-0 right-0" />
            )}

            <div
                className="absolute bottom-0 h-[74px] pc:h-[94px] bg-transporante w-full min-w-[288px] max-w-[540px] pc:w-[540px] 
            deskxl:w-[668px] deskxl:max-w-[668px] deskxl:h-[110px] dark:bg-portfolioGradient bg-portfolioGradientLight dark:opacity-60"
            ></div>
            <div className="absolute bottom-0 p-4 pc:p-6 deskxl:p-8 h-[74px] pc:h-[94px] deskxl:h-[110px] z-10">
                <p className="font-caviar text-lg pc:text-xl font-bold text-purple-200 dark:text-white-200">
                    {sanityData?.title
                        ? sanityData.title.toString()
                        : "Project name"}
                </p>
                <SmallPageTitle className="text-xs pc:text-sm">
                    {sanityData?.category
                        ? sanityData.category.toString()
                        : "site"}
                </SmallPageTitle>
            </div>
        </div>
    );
};
