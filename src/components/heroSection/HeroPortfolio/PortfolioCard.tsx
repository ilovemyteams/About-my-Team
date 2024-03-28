import { NoImageHeart } from "../../shared/NoImageHeart";
import { SmallPageTitle } from "../../shared/SmallPageTitle";
import Image from "next/image";

interface PortfolioCardProps {
    data: { name: string; siteView: string };
    img: string;
}

export const PortfolioCard = ({ data, img }: PortfolioCardProps) => {
    return (
        <div
            className="relative w-portfolioHeroCard tab:w-[100%] min-h-[236px] aspect-[288/236] max-w-[540px] 
                        tab:aspect-[360/300] pc:aspect-[540/350]  
                        pc:w-[540px] deskxl:w-[668px] deskxl:aspect-[668/428]  deskxl:max-w-[668px]  bg-CTAGradient"
        >
            {img ? (
                <Image
                    src={img}
                    width={540}
                    height="0"
                    alt={data?.name}
                    className="min-w-[288px] aspect-[288/236] tab:min-w-[360px] pc:w-[540px]
                    tab:aspect-[360/300] pc:aspect-[540/350]  
                    deskxl:w-[668px] deskxl:aspect-[668/428]  deskxl:max-w-[668px] 
                    "
                />
            ) : (
                <NoImageHeart className="w-[43%] tab:w-[50%]" />
            )}

            <div
                className="absolute bottom-0 h-[74px] pc:h-[94px] bg-transporante w-full min-w-[288px] max-w-[540px] pc:w-[540px] 
            deskxl:w-[668px] deskxl:max-w-[668px] deskxl:h-[110px] bg-portfolioGradient opacity-60"
            ></div>
            <div className="absolute bottom-0 p-4 pc:p-6 deskxl:p-8 h-[74px] pc:h-[94px] deskxl:h-[110px] z-10">
                <p className="font-caviar text-lg pc:text-xl font-bold">
                    {data?.name}
                </p>
                <SmallPageTitle className="text-xs pc:text-sm">
                    {data?.siteView}
                </SmallPageTitle>
            </div>
        </div>
    );
};
