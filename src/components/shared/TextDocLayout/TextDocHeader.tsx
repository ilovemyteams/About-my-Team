import { GoBackButton } from "../GoBackButton";
import LocaleSwitcher from "../LocaleSwitcher";
import { ThemeSwitcher } from "../ThemeSwitcher";

export const TextDocHeader = () => {
    return (
        <section className="container max-w-[540px] tab:max-w-full desk:max-w-[1456px] pt-8 pb-6 tab:pt-12 pc:pt-8 desk:pb-[80px] tab:pb-10 pc:pb-[60px] ">
            <div className="hidden pc:mb-10 pc:flex gap-[204px] justify-end relative z-10">
                <LocaleSwitcher />
                <ThemeSwitcher id="HeroSectionThemeSwitcher" />
            </div>
            <div className="flex justify-end">
                <GoBackButton />
            </div>
        </section>
    );
};
