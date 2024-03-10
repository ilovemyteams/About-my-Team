import { Section } from "../shared/Section";
import { PortfolioCarousel } from "./Slider/PortfolioCarousel";
import { PortfolioTitle } from "./Title/PortfolioTitle";
import { EmblaOptionsType } from "embla-carousel";
import { portfolioData } from "./portfolioData";

export const PortfolioSection = () => {
    const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };
    // TODO Since we plan to reuse the slider, I left it so that I can figure it out as necessary on the next one.
    const projects = portfolioData;
    const SLIDES = projects;
    return (
        <Section>
            <PortfolioTitle />
            <div className="relative flex flex-col justify-start items-center pc:items-end gap-y-[40px] pc:gap-y-[84px] ">
                <PortfolioCarousel projects={SLIDES} options={OPTIONS} />
            </div>
        </Section>
    );
};
