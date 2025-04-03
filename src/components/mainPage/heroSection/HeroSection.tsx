// import Image from "next/image";
import { IconBranch1 } from "../../easter/icons/IconBranch1";
import { IconBranch2 } from "../../easter/icons/IconBranch2";
import { IconBranch3 } from "../../easter/icons/IconBranch3";
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
        <Section className="pt-[20vw] tab:pt-[123px] pc:pt-8 relative overflow-hidden">
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
            <IconBranch1
                className=" absolute w-11 tab:w-[58px] pc:w-[69px] desk:w-[101px] h-auto top-[-60px] left-[59px] rotate-[123deg]
            tab:top-[-85px] tab:left-[59px] pc:top-[-95px] pc:left-[39px] desk:top-[-140px] desk:left-[44px]"
            />
            <IconBranch2
                className="absolute w-[26px] tab:w-[31px] desk:w-[46px] top-[116px] right-[-10px] rotate-[-53deg]
            tab:top-[50px] tab:right-[-8px] pc:top-[40px] desk:top-[70px]"
            />
            <IconBranch3
                className="absolute w-[74px] tab:w-[81px] desk:w-[119px] top-[-86px] right-[-16px] rotate-[-87deg]
            tab:top-[-78px] tab:right-[60px] pc:right-[147px] desk:right-[120px]"
            />
            <IconBranch1
                className="hidden tab:block absolute z-[2] tab:w-[58px] pc:w-[68px] desk:w-[101px] h-auto rotate-[216deg]
            tab:top-[130px] tab:right-[-32px] scale-x-[-1] pc:top-[260px] pc:right-[-22px] desk:top-[340px]"
            />
            <IconBranch2
                className="hidden pc:block absolute pc:w-[31px]  desk:w-[46px] rotate-[-109deg]
            pc:right-[50%] pc:top-[-100px]"
            />
        </Section>
    );
};
