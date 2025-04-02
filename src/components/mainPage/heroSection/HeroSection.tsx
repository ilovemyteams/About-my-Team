// import Image from "next/image";
import { IconLogoEaster } from "../../easter/icons/IconLogoEaster";
import { LogoEaster } from "../../easter/LogoEaster";
// import { IconHeroLogo } from "../../shared/Icons/IconHeroLogo";
import LocaleSwitcher from "../../shared/LocaleSwitcher";
import { Section } from "../../shared/Section";
import { ThemeSwitcher } from "../../shared/ThemeSwitcher";
import { HeroFooterLinks } from "./HeroFooterLinks";
import { HeroInfo } from "./HeroInfo";
import { PortfolioSlider } from "./HeroPortfolio/PortfolioSlider";

export const HeroSection = () => {
    return (
        <Section className="pt-[20vw] tab:pt-[123px] pc:pt-8 relative">
            <div className="hidden pc:flex gap-[204px] justify-end relative z-10">
                <LocaleSwitcher />
                <ThemeSwitcher id="HeroSectionThemeSwitcher" />
            </div>
            <div
                className="relative min-w-[288px] w-full tab:w-[720px] pc:w-[810px] desk:w-[1000px] h-auto  
                          tab:mb-6 pc:mt-[98px] desk:mt-[180px] pc:mb-0"
            >
                <LogoEaster />
                {/* <IconLogoEaster className="dark:text-white-200 text-purple-200 min-w-[288px] w-full tab:w-[720px] pc:w-[810px] desk:w-[1000px] h-auto" /> */}
            </div>
            <div className="relative flex flex-col pc:items-baseline tab:justify-between tab:flex-row">
                <HeroInfo />
                <PortfolioSlider />
            </div>
            <HeroFooterLinks />
        </Section>
    );
};
