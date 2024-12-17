import { IconChristmasHeroDecor } from "../../shared/Icons/IconChristmasHeroDecor";
import LocaleSwitcher from "../../shared/LocaleSwitcher";
import { PageSection } from "../../shared/PageSection";
import { ThemeSwitcher } from "../../shared/ThemeSwitcher";
import { Presents } from "./Presents";

export const ChristmasHero = () => {
    return (
        <PageSection className="py-8 relative">
            <IconChristmasHeroDecor
                className="absolute top-0 left-0
            text-[#B491FF] dark:text-[#D3B0FF] w-[270px] tab:w-[411px] pc:w-[355px] desk:w-[522px] h-auto "
            />
            <div className="hidden pc:mb-10 pc:flex gap-[204px] justify-end relative z-10">
                <LocaleSwitcher />
                <ThemeSwitcher id="HeroSectionThemeSwitcher" />
            </div>
            <Presents />
        </PageSection>
    );
};
