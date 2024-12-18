import { IconLowPolyBall } from "../shared/Icons/christmas/IconLowPolyBall";
import { IconHeroLogo } from "../shared/Icons/IconHeroLogo";
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
            <div
                className="relative min-w-[288px] w-full tab:w-[720px] pc:w-[810px] desk:w-[1000px] h-auto  
                          tab:mb-6 pc:mt-[20px] pc:mb-0"
            >
                <IconLowPolyBall className="absolute top-[41%] right-[92.3%] w-[6.8%] text-purple-200 dark:text-white-200 -z-10" />
                <IconLowPolyBall className="absolute top-[24%] left-[33.7%] w-[5.4%] text-purple-100 dark:text-purple-130 z-10" />
                <IconLowPolyBall className="absolute top-[77.8%] right-[38.9%] w-[10.4%] text-redLight dark:text-red z-10" />
                <IconLowPolyBall className="absolute top-[27.3%] left-[92.7%] w-[7.5%] text-[#ffb700] dark:text-[#ffff40] z-10" />
                <IconHeroLogo
                    className={` dark:text-white-200 text-purple-200 min-w-[288px] w-full tab:w-[720px] pc:w-[810px] desk:w-[1000px] h-auto`}
                />
            </div>
            <div className="relative flex flex-col pc:items-baseline tab:justify-between tab:flex-row">
                <HeroInfo />
                <PortfolioSlider />
            </div>
            <HeroFooterLinks />
        </Section>
    );
};
