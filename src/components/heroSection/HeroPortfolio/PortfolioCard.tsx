import { SmallPageTitle } from "../../shared/SmallPageTitle";
import Image from "next/image";

interface PortfolioCardProps {
    data: { name: string; type: string };
    img: string;
}

export const PortfolioCard = ({ data, img }: PortfolioCardProps) => {
    return (
        <div className="relative w-screen	 max-w-[540px]  pc:w-[540px] pc:h-[350px] bg-grey">
            <Image
                src={img}
                width={540}
                height="0"
                alt={data.name}
                className="min-w-[288px] pc:w-[540px] pc:h-[350px]"
            />
            <div className="absolute bottom-0 h-[74px] pc:h-[94px] bg-transporante w-full min-w-[288px] max-w-[540px] pc:w-[540px] bg-portfolioGradient opacity-60"></div>
            <div className="absolute bottom-0 p-4 pc:p-6 h-[74px] pc:h-[94px] z-10">
                <p className="font-caviar text-lg pc:text-xl font-bold">
                    {data.name}
                </p>
                <SmallPageTitle className="text-xs pc:text-sm">
                    {data.type}
                </SmallPageTitle>
            </div>
        </div>
    );
};
