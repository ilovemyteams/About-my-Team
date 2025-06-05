import { EmblaOptionsType } from "embla-carousel";

import { HomePortfolioQueryResult } from "@/types/sanity.types";

import { Section } from "../shared/Section";
import { SharePopover } from "../shared/SharePopover";
import { PortfolioCarousel } from "./PortfolioCarousel";
import { PortfolioTitle } from "./PortfolioTitle";

export const PortfolioSection = ({
    data,
}: {
    data: HomePortfolioQueryResult | null;
}) => {
    const { anchorId, subtitle, title, portfolioSliderData } =
        data?.portfolioHome || {};

    const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };
    return (
        <Section id={anchorId ? anchorId : ""} className="relative">
            {title && (
                <PortfolioTitle
                    subtitle={subtitle ? subtitle : ""}
                    title={title}
                />
            )}
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
                id={anchorId ? anchorId : ""}
                trigerShowShareText={false}
            />
        </Section>
    );
};
