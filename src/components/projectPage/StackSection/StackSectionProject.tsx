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
            <h2 className="font-caviar text-2xl pc:text-5xl font-bold mb-6 pc:mb-[64px]">
                {getTranslation.rich("stackTitle", {
                    purple: chunk => (
                        <span className="text-purple-100">{chunk}</span>
                    ),
                })}
            </h2>
            <ul className="flex gap-4 flex-wrap">
                {technologies.map(technology => (
                    <li
                        key={technology}
                        className="flex gap-3 items-center pc:gap-5 min-w-[136px] w-[calc(50%-8px)] max-w-[200px]"
                    >
                        <StackCard technology={technology} />
                    </li>
                ))}
            </ul>
        </PageSection>
    );
};
