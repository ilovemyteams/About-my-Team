import { Section } from "../shared/Section";
import { PortfolioCarousel } from "./PortfolioCarousel";
import { PortfolioTitle } from "./Title/PortfolioTitle";
import { EmblaOptionsType } from "embla-carousel";
import { portfolioData } from "./portfolioData";
import { SharePopover } from "../shared/SharePopover";

export const PortfolioSection = () => {
    const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };
    return (
        <Section id="portfolio" className="relative">
            <PortfolioTitle />
            <div className="relative flex flex-col justify-start items-center pc:items-end gap-y-[40px] pc:gap-y-[84px] ">
                <PortfolioCarousel projects={portfolioData} options={OPTIONS} />
            </div>
            <SharePopover className="absolute -top-3 right-4 bg-transparent h-12 min-w-12 px-0 flex gap-2 text-grey font-caviar tab:text-lg pc:hover:text-red  pc:transition pc:ease-out pc:duration-300 active:text-red" />
        </Section>
    );
};
