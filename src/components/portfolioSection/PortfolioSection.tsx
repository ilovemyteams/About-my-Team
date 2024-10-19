import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";

import { portfolioData } from "../../mockedData/portfolioData";
import { Section } from "../shared/Section";
import { SharePopover } from "../shared/SharePopover";
import { PortfolioCarousel } from "./PortfolioCarousel";
import { PortfolioTitle } from "./Title/PortfolioTitle";

export const PortfolioSection = () => {
    const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };
    return (
        <Section id="portfolio" className="relative">
            <PortfolioTitle />
            <div className="relative flex flex-col justify-start items-center pc:items-end gap-y-[40px] pc:gap-y-[84px] ">
                <PortfolioCarousel projects={portfolioData} options={OPTIONS} />
                <Image
                    src="/images/pumpkin.png"
                    alt="pumpkin"
                    width={30}
                    height={30}
                    className="absolute bottom-[190px] tab:bottom-[140px] right-[-12px] rotate-45 z-[-10]"
                />
            </div>
            <SharePopover
                className="absolute -top-3 right-4 tab:static tab:items-end tab:ml-auto tab:mt-4 pc:mt-5"
                id="portfolio"
                trigerShowShareText={false}
            />
        </Section>
    );
};
