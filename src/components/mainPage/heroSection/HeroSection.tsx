import { BuyMeCoffeeLink } from "../../shared/BuyMeCoffeeLink";
import { IconHeroLogo } from "../../shared/Icons/IconHeroLogo";
import LocaleSwitcher from "../../shared/LocaleSwitcher";
import { Section } from "../../shared/Section";
import { ThemeSwitcher } from "../../shared/ThemeSwitcher";
import { HeroInfo } from "./HeroInfo";
import { MainPageNavList } from "./MainPageNavList";

export const HeroSection = () => {
    return (
        <Section className="pt-8 tab:pt-[100px] pc:pt-8 relative overflow-hidden">
            <div className="hidden pc:flex gap-[204px] justify-end relative z-10">
                <LocaleSwitcher />
                <ThemeSwitcher id="HeroSectionThemeSwitcher" />
            </div>
            <div
                className="relative min-w-[288px] w-full desk:w-[1336px] h-auto  
                          tab:mb-[100px] pc:mt-[100px] desk:mb-12"
            >
                <IconHeroLogo
                    className={` dark:text-white-200 text-purple-200 min-w-[288px] w-full desk:w-[1336px] h-auto`}
                />
            </div>
            <div className="relative flex flex-col pc:items-baseline tab:justify-between tab:flex-row">
                <HeroInfo />
            </div>

            <BuyMeCoffeeLink
                className="hidden tab:flex tab:mt-10 tab:mb-8 pc:my-0 pc:absolute pc:right-[60px] pc:bottom-[286px] desk:bottom-[300px] "
                textClassName="pc:left-[56px]"
            />
            <MainPageNavList />
        </Section>
    );
};
