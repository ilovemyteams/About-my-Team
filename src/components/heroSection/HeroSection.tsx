import Image from "next/image";
import { Section } from "../shared/Section";
import LocaleSwitcher from "../shared/LocaleSwitcher";
import { ThemeSwitcher } from "../shared/ThemeSwitcher";
import { PortfolioSlider } from "./HeroPortfolio/PortfolioSlider";
import { HeroInfo } from "./HeroInfo";
import { HeroFooterLinks } from "./HeroFooterLinks";

export const HeroSection = () => {
    return (
        <Section className="pt-8">
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
                className="h-[88px] pc:mt-[20px] w-[810px] pc:h-[162px]"
            />
            <div className="flex flex-col items-center pc:items-baseline pc:justify-between pc:flex-row">
                <HeroInfo />
                <PortfolioSlider />
            </div>
            <HeroFooterLinks />
        </Section>
    );
};
