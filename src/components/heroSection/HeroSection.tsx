// import { IconHeroLogo } from "../shared/Icons/IconHeroLogo";
import { HeaderDecoration } from "../eventsPage/valentines/icons/HeaderDecoration";
import { HeroLogo } from "../eventsPage/valentines/icons/HeroLogo";
import { PinkEnvelopeIcon } from "../eventsPage/valentines/icons/PinkEnvelopeIcon";
import { WhiteEnvelopeIcon } from "../eventsPage/valentines/icons/WhiteEnvelopeIcon";
import { FlyingEnvelope } from "../eventsPage/valentines/shared/FlyingEnvelope";
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
            {/* <div
                className="relative min-w-[288px] w-full tab:w-[720px] pc:w-[810px] desk:w-[1000px] h-auto  
                          tab:mb-6 pc:mt-[20px] pc:mb-0"
            >
                <IconHeroLogo
                    className={` dark:text-white-200 text-purple-200 min-w-[288px] w-full tab:w-[720px] pc:w-[810px] desk:w-[1000px] h-auto`}
                />
            </div> */}
            <div className="absolute top-[80px] tab:top-[68px] pc:-top-3 desk:-top-1 left-[32.5%] tab:left-[28%] pc:left-[21.5%] desk:left-[26%] w-[111px] tab:w-[340px] pc:w-[412px] desk:w-[470px] overflow-hidden">
                <HeaderDecoration className="w-[153%] tab:w-[100%]" />
            </div>
            <div className="absolute top-[100px] tab:top-[101px] pc:top-[60px] desk:top-[87px] left-[7%] tab:left-[13%] pc:left-[12.5%] desk:left-[7.5%] ">
                <FlyingEnvelope
                    icon={PinkEnvelopeIcon}
                    className="w-[29px] tab:w-[] pc:w-[3%] rotate-[-32deg] pc:rotate-[-23deg]"
                />
            </div>
            <div className="absolute top-[97px] tab:top-[102px] pc:top-[120px] right-[12%] tab:right-[8%] pc:right-[16%] desk:right-[13.5%] w-[12%] tab:w-[8%] pc:w-[6%]  rotate-[17deg] tab:rotate-[42deg] pc:rotate-[-4deg] desk:rotate-[-1deg]">
                <FlyingEnvelope icon={WhiteEnvelopeIcon} />
            </div>
            <div className="relative min-w-[288px] w-full tab:w-[720px] pc:w-[765px] desk:w-[1000px] h-auto mt-10 tab:mt-4 pc:mt-[98px] desk:mt-[140px] tab:mb-6 pc:mb-0">
                <HeroLogo />
            </div>
            <div className="relative flex flex-col pc:items-baseline tab:justify-between tab:flex-row">
                <HeroInfo />
                <PortfolioSlider />
            </div>
            <HeroFooterLinks />
        </Section>
    );
};
