import { Home, Project } from "@/types/sanity.types";

import { IconHeroLogo } from "../shared/Icons/IconHeroLogo";
import LocaleSwitcher from "../shared/LocaleSwitcher";
import { Section } from "../shared/Section";
import { ThemeSwitcher } from "../shared/ThemeSwitcher";
import { HeroFooterLinks } from "./HeroFooterLinks";
import { HeroInfo } from "./HeroInfo";
import { PortfolioSlider } from "./HeroPortfolio/PortfolioSlider";

export interface HeroProps {
    data: Home | null;
    projects: Project[] | null;
}
export const HeroSection = ({ data, projects }: HeroProps) => {
    return (
        <Section className="pt-8 tab:pt-[100px] pc:pt-8">
            <div className="hidden pc:flex gap-[204px] justify-end relative z-10">
                <LocaleSwitcher />
                <ThemeSwitcher id="HeroSectionThemeSwitcher" />
            </div>
            <IconHeroLogo
                className={`dark:text-white-200 text-purple-200 min-w-[288px] w-full tab:w-[720px] pc:w-[810px] deskxl:w-[1000px] h-auto  
                          tab:mb-5 pc:mt-[20px] pc:mb-0`}
            />
            <div className="relative flex flex-col items-center pc:items-baseline tab:justify-between tab:flex-row">
                <HeroInfo data={data} />
                <PortfolioSlider projects={projects} />
            </div>
            <HeroFooterLinks />
        </Section>
    );
};
