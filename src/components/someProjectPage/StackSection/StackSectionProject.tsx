import { useTranslations } from "next-intl";

import { Technology } from "@/src/mockedData/portfolioData";

import { PageSection } from "../../shared/PageSection";
import { StackMobSlider } from "./StackMobSlider";
import { StackTab } from "./StackTab";

export const StackSectionProject = ({
    technologies,
}: {
    technologies: Technology[];
}) => {
    const getTranslation = useTranslations("SomeProjectPage");

    return (
        <PageSection className="pb-[109px] tab:pb-[100px] desk:pb-[120px]">
            <h2 className="font-caviar dark:text-grey text-purple-200 text-2xl tab:text-4xl pc:text-5xl desk:text-6xl font-bold mb-8 tab:mb-10 pc:mb-[64px]">
                {getTranslation.rich("stackTitle", {
                    purple: chunk => (
                        <span className="text-purple-100">{chunk}</span>
                    ),
                })}
            </h2>
            <div className="tab:hidden">
                <StackMobSlider technologies={technologies} />
            </div>
            <div className="hidden tab:block ">
                <StackTab technologies={technologies} />
            </div>
        </PageSection>
    );
};
