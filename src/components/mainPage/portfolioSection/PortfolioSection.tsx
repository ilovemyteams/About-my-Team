import { EmblaOptionsType } from "embla-carousel";

import { portfolioData } from "@/src/mockedData/portfolioData";

import { EggContainer } from "../../easter/EggsHunt/EggContainer";
import { Section } from "../../shared/Section";
import { SharePopover } from "../../shared/SharePopover";
import { PortfolioCarousel } from "./PortfolioCarousel";
import { PortfolioTitle } from "./PortfolioTitle";

export const PortfolioSection = () => {
    const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };
    const portfolioForRender = [...portfolioData].sort(
        (a, b) => b.data.order - a.data.order
    );
    return (
        <Section id="portfolio" className="relative">
            <EggContainer count={3} />
            <PortfolioTitle />
            <div className="relative flex flex-col justify-start items-center pc:items-end gap-y-[40px] pc:gap-y-[84px] ">
                <PortfolioCarousel
                    projects={portfolioForRender}
                    options={OPTIONS}
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
