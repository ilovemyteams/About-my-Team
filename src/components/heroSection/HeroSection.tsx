import { IconHeroLogoHw } from "../shared/Icons/IconHeroLogoHw";
import { IconWebHeader } from "../shared/Icons/IconWebHeader";
import LocaleSwitcher from "../shared/LocaleSwitcher";
import { Section } from "../shared/Section";
import { ThemeSwitcher } from "../shared/ThemeSwitcher";
import { HeroFooterLinks } from "./HeroFooterLinks";
import { HeroInfo } from "./HeroInfo";
import { PortfolioSlider } from "./HeroPortfolio/PortfolioSlider";

export const HeroSection = () => {
    return (
        <Section className="pt-8 tab:pt-[100px] pc:pt-8">
            <div className="hidden pc:flex gap-[204px] justify-end relative z-10">
                <LocaleSwitcher />
                <ThemeSwitcher id="HeroSectionThemeSwitcher" />
            </div>
            <IconWebHeader className="hidden dark:text-purple-strokeFormLabelLight text-purple-strokeLight tab:block absolute tab:top-[80px] pc:top-0 left-[153px] pc:left-[545px] deskxl:left-[850px] z-[-1] w-auto h-[158px] pc:h-[144px] deskxl:h-[178px]" />
            <IconHeroLogoHw
                className={`dark:text-white-200 text-purple-200 min-w-[288px] w-full tab:w-[720px] pc:w-[810px] deskxl:w-[1000px] h-auto  
                          tab:mb-5 pc:mt-[20px] pc:mb-0 deskxl:mt-10`}
            />
            <div className="relative flex flex-col items-center pc:items-baseline tab:justify-between tab:flex-row">
                <HeroInfo />
                <PortfolioSlider />
            </div>
            <HeroFooterLinks />
        </Section>
    );
};
