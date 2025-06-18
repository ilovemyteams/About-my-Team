import { Technology } from "@/src/mockedData/portfolioData";

import { StackCard } from "./StackCard";

export const STACKS_PER_SLIDE = 5;

export const OneSlideStack = ({
    technologies,
}: {
    technologies: Technology[];
}) => {
    const cards = [];
    const totalPages = Math.ceil(technologies.length / STACKS_PER_SLIDE);

    for (let i = 0; i < totalPages; i++) {
        const start = i * STACKS_PER_SLIDE;
        const end = start + STACKS_PER_SLIDE;
        const chunk = technologies.slice(start, end);

        const cardGroup = (
            <li
                key={`group-${i}`}
                className="flex-[0_0_50%] flex flex-col gap-4 w-1/2 px-2"
            >
                {chunk.map(data => (
                    <div
                        key={data}
                        className="flex gap-2 items-center pc:gap-4 desk:gap-6 
                        min-h-[74px]
                        px-3 py-4 tab:px-4 tab:py-5 pc:p-5 desk:p-6 bg-purple-stackCardBG"
                    >
                        <StackCard technology={data} />
                    </div>
                ))}
            </li>
        );

        cards.push(cardGroup);
    }

    return cards;
};
