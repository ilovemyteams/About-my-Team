import { Button } from "../shared/Button";
import { Section } from "../shared/Section";
import { PortfolioCarousel } from "./PortfolioCarousel";
import PortfolioCarouselVertical from "./PortfolioCarouselVertical";
import { PortfolioTitle } from "./PortfolioTitle";
import { EmblaOptionsType } from "embla-carousel";

export const PortfolioSection = () => {
    const OPTIONS: EmblaOptionsType = { axis: "y", loop: true };
    const SLIDE_COUNT = 5;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
    return (
        <Section>
            <PortfolioTitle />
            <div className="relative flex flex-col justify-start items-center pc:items-end gap-y-[40px] pc:gap-y-[84px] ">
                <PortfolioCarousel />
                <PortfolioCarouselVertical slides={SLIDES} options={OPTIONS} />
                <Button className="">Button</Button>
            </div>
        </Section>
    );
};
