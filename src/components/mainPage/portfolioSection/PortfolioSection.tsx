"use client";
import { EmblaOptionsType } from "embla-carousel";
import { useTranslations } from "next-intl";

import { useRouter } from "@/src/i18n/routing";
import { portfolioData } from "@/src/mockedData/portfolioData";

import { Button } from "../../shared/Button";
import { Section } from "../../shared/Section";
import { PortfolioCarousel } from "./PortfolioCarousel";
import { PortfolioTitle } from "./PortfolioTitle";

export const PortfolioSection = () => {
    const OPTIONS: EmblaOptionsType = { loop: true };
    const portfolioForRender = [...portfolioData].sort(
        (a, b) => b.data.order - a.data.order
    );
    const getTranslation = useTranslations("Buttons");
    const router = useRouter();

    const handleButtonClick = () => {
        router.push(`/portfolio`);
        // sendGTMEvent({
        //     event: "learn_more_faq",
        // });
    };
    return (
        <Section id="portfolio" className="relative">
            <PortfolioTitle />
            <div className="relative flex flex-col justify-start items-center pc:items-end gap-y-[40px] pc:gap-y-[84px] ">
                <PortfolioCarousel
                    projects={portfolioForRender}
                    options={OPTIONS}
                />
            </div>
            <div className="flex justify-center mt-8 tab:mt-9 desk:mt-[56px]">
                <Button color="grey" onClick={handleButtonClick}>
                    {getTranslation("AllProjects")}
                </Button>
            </div>
        </Section>
    );
};
