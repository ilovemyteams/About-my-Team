import Image from "next/image";
import { Section } from "../shared/Section";
import LocaleSwitcher from "../shared/LocaleSwitcher";
import { ThemeSwitcher } from "../header/ThemeSwitcher";
import { PortfolioSlider } from "./HeroPortfolio/PortfolioSlider";
import { HeroInfo } from "./HeroInfo";
import { HeroFooterLinks } from "./HeroFooterLinks";

export const HeroSection = () => {
    return (
        <Section className="pt-8">
            <div className="flex gap-[204px] justify-end">
                <LocaleSwitcher />
                <ThemeSwitcher />
            </div>
            <Image
                className="mt-[63px]"
                src="/images/heroTitle.svg"
                width={810}
                height={162}
                alt="I love my team"
            />
            <div className="flex justify-between ">
                <HeroInfo />
                <PortfolioSlider />
            </div>
            <HeroFooterLinks />
        </Section>
    );
};
