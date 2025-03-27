import { useTranslations } from "next-intl";

import { Technology } from "@/src/mockedData/portfolioData";

import { PageSection } from "../../shared/PageSection";
import { StackCard } from "./StackCard";

export const StackSectionProject = ({
    technologies,
}: {
    technologies: Technology[];
}) => {
    const getTranslation = useTranslations("SomeProjectPage");
    return (
        <PageSection className="pb-[109px] tab:pb-[100px] desk:pb-[120px]">
            <h2 className="font-caviar text-2xl tab:text-4xl pc:text-5xl desk:text-6xl font-bold mb-6 tab:mb-10 pc:mb-[64px]">
                {getTranslation.rich("stackTitle", {
                    purple: chunk => (
                        <span className="text-purple-100">{chunk}</span>
                    ),
                })}
            </h2>
            <ul className="flex gap-4 pc:gap-5 flex-wrap">
                {technologies.map(technology => (
                    <li
                        key={technology}
                        className="flex gap-2 items-center pc:gap-4 min-w-[136px] w-[calc(50%-8px)] max-w-[200px]"
                    >
                        <StackCard technology={technology} />
                    </li>
                ))}
            </ul>
        </PageSection>
    );
};
