import Image from "next/image";
import { useTranslations } from "next-intl";

import { NoImageHeart } from "../../../shared/NoImageHeart";
import { SmallPageTitle } from "../../../shared/SmallPageTitle";

interface PortfolioCardProps {
    data: { name: string; siteView: string };
    img: string;
}

export const PortfolioCard = ({ data, img }: PortfolioCardProps) => {
    const getTranslation = useTranslations("Hero");
    return (
        <div
            className="relative w-[100%] max-w-[508px] min-h-[162px] aspect-[288/162] 
                        tab:aspect-[410/230] pc:aspect-[608/342]  
                        pc:min-w-[608px] desk:w-[668px] desk:aspect-[668/375] desk:max-w-[668px] bg-CTAGradientLight dark:bg-CTAGradient"
        >
            {img ? (
                <Image
                    src={img}
                    width={668}
                    height="0"
                    alt={data?.name}
                    className="min-w-[288px] w-full aspect-[288/162] max-w-[508px] tab:min-w-[410px] pc:min-w-[608px]
                    tab:aspect-[410/230] pc:aspect-[608/342]  
                    desk:w-[668px] desk:aspect-[668/375]  desk:max-w-[668px] 
                    object-cover
                    "
                />
            ) : (
                <NoImageHeart className="w-[43%] tab:w-[50%] absolute top-0 right-0" />
            )}

            <div
                className="absolute bottom-0 h-[56px] tab:h-[67px] px-3 py-[9px] pc:p-[29px] pc:h-[100px] bg-transporante w-full min-w-[288px] pc:min-w-[608px] 
            desk:w-[668px] desk:max-w-[668px] desk:h-[110px] dark:bg-portfolioGradient bg-portfolioGradientLight dark:opacity-90"
            >
                <p className="font-caviar text-sm tab:text-xl pc:text-xl font-bold text-purple-200 dark:text-white-200">
                    {getTranslation("project")}: {data?.name}
                </p>
                <SmallPageTitle className="text-xs tab:text-sm mb-0">
                    {data?.siteView}
                </SmallPageTitle>
            </div>
        </div>
    );
};
