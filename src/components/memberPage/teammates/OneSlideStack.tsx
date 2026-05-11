import { membersData } from "@/src/mockedData/membersData";
import { getTeammates } from "@/src/utils/getTeammates";
import { Project } from "@/types/Projects";

import { TeammateCard } from "./TeammateCard";

export const STACKS_PER_SLIDE = 5;

interface TeammatesProps {
    projects: Project[];
    id: string;
}

export const OneSlideStack = ({ projects, id }: TeammatesProps) => {
    const teammates = getTeammates(membersData, projects, id);
    const cards = [];
    const totalPages = Math.ceil(teammates.length / STACKS_PER_SLIDE);

    for (let i = 0; i < totalPages; i++) {
        const start = i * STACKS_PER_SLIDE;
        const end = start + STACKS_PER_SLIDE;
        const chunk = teammates.slice(start, end);

        const cardGroup = (
            <li
                key={`group-${i}`}
                className="flex-[0_0_100%] min-[1024px]:flex-[0_0_50%] flex flex-col gap-4 w-1/2 px-2"
            >
                {chunk.map(data => (
                    <div key={data.data.id} className="flex items-center">
                        <TeammateCard data={data} />
                    </div>
                ))}
            </li>
        );

        cards.push(cardGroup);
    }

    return cards;
};
