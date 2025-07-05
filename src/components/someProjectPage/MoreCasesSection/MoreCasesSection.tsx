import { useTranslations } from "next-intl";

import { portfolioData } from "@/src/mockedData/portfolioData";

import { GoToAll } from "../../shared/GoToAll";
import { PageSection } from "../../shared/PageSection";
import { MoreCasesSlider } from "./MoreCasesSlider";
import { MoreCasesSliderTab } from "./MoreCasesSliderTab";

interface MoreCasesSectionProps {
    activeSlug: string;
}

export const MoreCasesSection = ({ activeSlug }: MoreCasesSectionProps) => {
    const getTranslation = useTranslations("SomeProjectPage");

    const displayedCases = portfolioData.filter(
        project => project.data.slug !== activeSlug
    );

    return (
        <PageSection className="pb-[109px] tab:pb-[100px] desk:pb-[120px]">
            <h2 className="font-caviar dark:text-grey text-purple-200 text-2xl tab:text-4xl pc:text-5xl desk:text-6xl font-bold mb-6 tab:mb-10 pc:mb-[64px]">
                {getTranslation.rich("moreCases", {
                    purple: chunk => (
                        <span className="text-purple-100">{chunk}</span>
                    ),
                })}
            </h2>
            <div className="pb-6 border-b border-purple-strokeLight dark:border-purple-stroke tab:hidden">
                <MoreCasesSlider projects={displayedCases} />
            </div>
            <div className="hidden tab:flex">
                <MoreCasesSliderTab projects={displayedCases} />
            </div>
            <div className="tab:mt-9 pc:mt-[100px]">
                <GoToAll
                    href="/portfolio"
                    title={getTranslation("allProjects")}
                />
            </div>
        </PageSection>
    );
};
