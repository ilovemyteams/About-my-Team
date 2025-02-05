import Link from "next/link";
import { useLocale } from "next-intl";

import { localeInURL } from "@/src/utils/localeInURL";

import { HeaderDecoration } from "../eventsPage/valentines/icons/HeaderDecoration";
import { HeroLogo } from "../eventsPage/valentines/icons/HeroLogo";
import { WhiteEnvelopeIcon } from "../eventsPage/valentines/icons/WhiteEnvelopeIcon";
import { FlyingEnvelope } from "../eventsPage/valentines/shared/FlyingEnvelope";
import LocaleSwitcher from "../shared/LocaleSwitcher";
import { Section } from "../shared/Section";
import { ThemeSwitcher } from "../shared/ThemeSwitcher";
import { HeroFooterLinks } from "./HeroFooterLinks";
import { HeroInfo } from "./HeroInfo";
import { PortfolioSlider } from "./HeroPortfolio/PortfolioSlider";

export const HeroSection = () => {
    const locale = useLocale();
    return (
        <Section className="pt-8 tab:pt-[100px] pc:pt-8">
            <div className="hidden pc:flex gap-[204px] justify-end relative z-10">
                <LocaleSwitcher />
                <ThemeSwitcher id="HeroSectionThemeSwitcher" />
            </div>
            <div className="absolute top-[80px] tab:top-[68px] pc:-top-3 desk:-top-1 left-[32.5%] tab:left-[28%] pc:left-[21.5%] desk:left-[26%] w-[111px] tab:w-[340px] pc:w-[412px] desk:w-[470px] overflow-hidden">
                <HeaderDecoration className="w-[153%] tab:w-[100%]" />
            </div>
            <Link
                href={`/${localeInURL(locale)}events`}
                className="absolute top-[103px] tab:top-[120px] pc:top-[68px] desk:top-[87px] left-[7%] tab:left-[9%] pc:left-[12.5%] desk:left-[7.5%] w-[40px] tab:w-[57px] pc:w-[5%] rotate-[-32deg] pc:rotate-[-23deg]"
            >
                <FlyingEnvelope icon={WhiteEnvelopeIcon} />
            </Link>
            <Link
                href={`/${localeInURL(locale)}events`}
                className="absolute top-[104px] tab:top-[126px] pc:top-[120px] desk:top-[139px] right-[7%] tab:right-[8%] pc:right-[16%] desk:right-[13.5%] w-[57px] tab:w-[10%] pc:w-[8%] desk:w-[7%] rotate-[17deg] tab:rotate-[42deg] pc:rotate-[-4deg] desk:rotate-[-1deg]"
            >
                <FlyingEnvelope icon={WhiteEnvelopeIcon} />
            </Link>
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
