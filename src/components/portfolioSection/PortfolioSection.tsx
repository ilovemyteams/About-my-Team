"use server";
import { Button } from "../shared/Button";
import { Section } from "../shared/Section";
import { PortfolioCarousel } from "./Slider/PortfolioCarousel";
import { PortfolioCarouselVertical } from "./Slider/PortfolioCarouselVertical";
import { PortfolioTitle } from "./Title/PortfolioTitle";
import { EmblaOptionsType } from "embla-carousel";
import { PortfolioData } from "./portfolioData";

export const PortfolioSection = () => {
    const OPTIONS: EmblaOptionsType = { axis: "y", loop: false };
    const projects = PortfolioData();
    const SLIDES = projects;
    return (
        <Section>
            <PortfolioTitle />
            <div className="relative flex flex-col justify-start items-center pc:items-end gap-y-[40px] pc:gap-y-[84px] ">
                <PortfolioCarousel />
                <PortfolioCarouselVertical
                    projects={SLIDES}
                    options={OPTIONS}
                />
                <Button className="">Button</Button>
            </div>
        </Section>
    );
};
