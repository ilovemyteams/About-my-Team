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
            <h2 className="font-caviar dark:text-grey text-purple-200 text-2xl tab:text-4xl pc:text-5xl desk:text-6xl font-bold mb-6 tab:mb-10 pc:mb-[64px]">
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
                        className="flex gap-2 items-center pc:gap-4 desk:gap-6 
                        min-w-[136px] w-[calc(50%-8px)] tab:min-w-[168px] tab:w-[23.3%]
                        pc:min-w-[200px] pc:w-[18.5%]
                        px-3 py-4 tab:px-4 tab:py-5 pc:p-5 desk:p-6  bg-purple-stackCardBG"
                    >
                        <StackCard technology={technology} />
                    </li>
                ))}
            </ul>
        </PageSection>
    );
};
