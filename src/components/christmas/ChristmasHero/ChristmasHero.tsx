import LocaleSwitcher from "../../shared/LocaleSwitcher";
import { PageSection } from "../../shared/PageSection";
import { ThemeSwitcher } from "../../shared/ThemeSwitcher";
import { Presents } from "./Presents";

export const ChristmasHero = () => {
    return (
        <PageSection className="py-8">
            <div className="hidden pc:mb-10 pc:flex gap-[204px] justify-end relative z-10">
                <LocaleSwitcher />
                <ThemeSwitcher id="HeroSectionThemeSwitcher" />
            </div>
            <Presents />
        </PageSection>
    );
};
