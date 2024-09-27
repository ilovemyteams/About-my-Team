import { EmblaOptionsType } from "embla-carousel";

import { PortfolioHomeProps } from "@/types/sanityDataPropsTypes";

import { Section } from "../shared/Section";
import { SharePopover } from "../shared/SharePopover";
import { PortfolioCarousel } from "./PortfolioCarousel";
import { PortfolioTitle } from "./Title/PortfolioTitle";

export const PortfolioSection = ({
    data,
}: {
    data: PortfolioHomeProps | null;
}) => {
    const { anchorId, subtitle, title, portfolioSliderData } =
        data?.portfolioHome || {};

    title ? console.log("PortfolioSe", data?.portfolioHome.title) : "";
    const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };
    return (
        <Section id={anchorId} className="relative">
            <PortfolioTitle subtitle={subtitle} title={title} />
            <div className="relative flex flex-col justify-start items-center pc:items-end gap-y-[40px] pc:gap-y-[84px] ">
                {portfolioSliderData && (
                    <PortfolioCarousel
                        projects={portfolioSliderData}
                        options={OPTIONS}
                    />
                )}
            </div>
            <SharePopover
                className="absolute -top-3 right-4 tab:static tab:items-end tab:ml-auto tab:mt-4 pc:mt-5"
                id={anchorId}
                trigerShowShareText={false}
            />
        </Section>
    );
};
