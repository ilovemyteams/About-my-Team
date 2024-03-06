import { SmallPageTitle } from "../../shared/SmallPageTitle";
import Image from "next/image";

interface PortfolioCardProps {
    data: { name: string; type: string };
    img: string;
}

export const PortfolioCard = ({ data, img }: PortfolioCardProps) => {
    return (
        <div className="relative w-[540px] h-[350px] bg-grey">
            <Image src={img} width={540} height={350} alt={data.name} />
            <div className="absolute bottom-0 h-[94px] bg-transporante w-[540px] bg-portfolioGradient opacity-60"></div>
            <div className="absolute bottom-0 p-6 h-[94px] z-10">
                <p>{data.name}</p>
                <SmallPageTitle>{data.type}</SmallPageTitle>
            </div>
        </div>
    );
};
