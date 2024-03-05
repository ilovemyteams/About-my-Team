import { Section } from "../shared/Section";
import LocaleSwitcher from "../shared/LocaleSwitcher";
import { ThemeSwitcher } from "../header/ThemeSwitcher";

export const HeroSection = () => {
    return (
        <Section className="pt-8">
            <div className="flex gap-[204px] justify-end">
                <LocaleSwitcher />
                <ThemeSwitcher />
            </div>
        </Section>
    );
};
