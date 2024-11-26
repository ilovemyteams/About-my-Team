import { HighlightPurple } from "@/src/utils/highlightingPurple";
import { PageSection } from "../shared/PageSection";
import Image from "next/image";

interface ServiceHeroProps {
    title: string;
    text: string;
    image: string;
}

export const ServiceHero = ({ title, text, image }: ServiceHeroProps) => {
    return (
        <PageSection className="pb-[80px] tab:pb-[100px] pc:pb-[60px]">
            <p className="font-caviar text-3xl mb-6 tab:text-4xl tab:mb-[60px] pc:mb-[100px] desk:mb-[120px] pc:text-6xl desk:text-7xl">
                {HighlightPurple({ title })}
            </p>
            <div className="tab:flex tab:flex-row-reverse tab:gap-5 pc:gap-[60px]">
                <Image
                    src={image}
                    alt={title}
                    width={638}
                    height={425}
                    className="mb-6 tab:w-[47.22%] pc:w-[41.67%] desk:w-[47.75%] tab:aspect-[340/227] tab:mb-0"
                />
                <p className="text-sm20 tab:w-[50%] pc:w-[52.78%] desk:w-[47.75%] tab:text-base23 pc:text-xl28 desk:text-2xl34">
                    {text}
                </p>
            </div>
        </PageSection>
    );
};
