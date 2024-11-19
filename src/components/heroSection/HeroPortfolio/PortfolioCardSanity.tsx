import { PortfolioSliderProps } from "@/types/sanityDataPropsTypes";

import { ImageComponent } from "../../shared/ImageComponent/ImageComponent";
import { SmallPageTitle } from "../../shared/SmallPageTitle";

export const PortfolioCardSanity = ({
    sanityData,
}: {
    sanityData: PortfolioSliderProps;
}) => {
    return (
        <div
            className="relative w-portfolioHeroCard tab:w-[100%] min-h-[236px] aspect-[288/236] max-w-[540px] 
                        tab:aspect-[360/300] pc:aspect-[540/350]  
                        pc:w-[540px] deskxl:w-[668px] deskxl:aspect-[668/428] deskxl:max-w-[668px] bg-CTAGradientLight dark:bg-CTAGradient"
        >
            <ImageComponent
                src={sanityData.image?.asset}
                alt={sanityData.image?.caption.toString()}
                blurUrl={sanityData.image?.lqip}
                className="w-full h-full"
            />

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
