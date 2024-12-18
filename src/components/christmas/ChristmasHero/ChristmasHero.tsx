import { IconChristmasHeroDecor } from "../../shared/Icons/IconChristmasHeroDecor";
import { IconLight } from "../../shared/Icons/IconLight";
import LocaleSwitcher from "../../shared/LocaleSwitcher";
import { PageSection } from "../../shared/PageSection";
import { ThemeSwitcher } from "../../shared/ThemeSwitcher";
import { ChristmasTree } from "./ChristmasTree";
import { GreetingText } from "./GreetingText";

export const ChristmasHero = () => {
    return (
        <div className="relative overflow-x-clip">
            <IconLight className="absolute top-0 right-0 w-[265px] tab:w-[495px] pc:w-[45vw] pc:max-w-[630px] desk:max-w-[798px] h-auto z-[-1]" />
            <PageSection className="relative pt-[180px] pb-[150px] tab:pt-[262px] tab:pb-[92px] pc:pt-[32px] pc:pb-[100px] desk:pb-[120px]">
                <IconChristmasHeroDecor
                    className="absolute top-0 left-0 
            text-[#B491FF] dark:text-[#D3B0FF] w-[270px] tab:w-[411px] pc:left-[115px] pc:w-[27vw] pc:max-w-[522px] desk:left-[177px] h-auto "
                />

                <div className="hidden pc:mb-10 pc:flex gap-[204px] justify-end relative z-10">
                    <LocaleSwitcher />
                    <ThemeSwitcher id="HeroSectionThemeSwitcher" />
                </div>
                <div className="pc:flex pc:flex-row-reverse justify-between pc:pt-[160px]">
                    <GreetingText />
                    <ChristmasTree />
                </div>
            </PageSection>
        </div>
    );
};
