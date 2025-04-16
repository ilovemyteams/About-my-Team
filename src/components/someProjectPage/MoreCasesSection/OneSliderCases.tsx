import { PortfolioDataItemType } from "@/src/mockedData/portfolioData";

import { ProjectCard } from "../../shared/ProjectCard";

export const OneSliderCases = ({
    projects,
}: {
    projects: PortfolioDataItemType[];
}) => {
    const CARDS_PER_PAGE = 3;

    const cards = [];
    const totalPages = Math.ceil(projects.length / CARDS_PER_PAGE);

    for (let i = 0; i < totalPages; i++) {
        const start = i * CARDS_PER_PAGE;
        const end = start + CARDS_PER_PAGE;
        const chunk = projects.slice(start, end);

        const cardGroup = (
            <li
                key={`group-${i}`}
                className="embla__slide flex-[0_0_100%] w-full tab:flex tab:gap-10 pc:gap-[60px] desk:gap-[100px]"
            >
                {chunk.map(project => (
                    <div key={project.data.id} className="tab:w-[30%] ">
                        <ProjectCard data={project} />
                    </div>
                ))}
            </li>
        );

        cards.push(cardGroup);
    }

    return cards;
};
