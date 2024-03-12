import Image from "next/image";
import { Section } from "../shared/Section";
import LocaleSwitcher from "../shared/LocaleSwitcher";
import { ThemeSwitcher } from "../shared/ThemeSwitcher";
import { PortfolioSlider } from "./HeroPortfolio/PortfolioSlider";
import { HeroInfo } from "./HeroInfo";
import { HeroFooterLinks } from "./HeroFooterLinks";

export const HeroSection = () => {
    return (
        <Section className="py-8">
            <div className="flex gap-[204px] justify-end relative z-10">
                <LocaleSwitcher />
                <ThemeSwitcher />
            </div>
            <Image
                src="/images/heroTitle.svg"
                width="0"
                height="0"
                alt="I love my team"
                loading="eager"
                className="mt-[63px] w-[810px] h-[162px]"
            />
            <div className="flex justify-between ">
                <HeroInfo />
                <PortfolioSlider />
            </div>
            <HeroFooterLinks />
        </Section>
    );
};
