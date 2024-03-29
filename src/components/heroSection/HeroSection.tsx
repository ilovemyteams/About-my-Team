import Image from "next/image";
import { Section } from "../shared/Section";
import LocaleSwitcher from "../shared/LocaleSwitcher";
import { ThemeSwitcher } from "../shared/ThemeSwitcher";
import { PortfolioSlider } from "./HeroPortfolio/PortfolioSlider";
import { HeroInfo } from "./HeroInfo";
import { HeroFooterLinks } from "./HeroFooterLinks";

export const HeroSection = () => {
    return (
        <Section className="pt-8 tab:pt-[100px] pc:pt-8">
            <div className="hidden pc:flex gap-[204px] justify-end relative z-10">
                <LocaleSwitcher />
                <ThemeSwitcher />
            </div>
            <Image
                src="/images/heroTitle.svg"
                width="0"
                height="0"
                alt="I love my team"
                loading="eager"
                className="w-[288px] tab:w-[720px] pc:w-[810px]  deskxl:w-[1000px] h-auto  
                          tab:mb-5 pc:mt-[20px] pc:mb-0"
            />
            <div className="relative flex flex-col items-center pc:items-baseline tab:justify-between tab:flex-row">
                <HeroInfo />
                <PortfolioSlider />
            </div>
            <HeroFooterLinks />
        </Section>
    );
};
