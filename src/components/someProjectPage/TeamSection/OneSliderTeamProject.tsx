import { MemberDataItemType } from "@/src/mockedData/membersData";

import { TeamMemberCardLink } from "./TeamMemberCardLink";

export const OneSliderTeamProject = ({
    members,
}: {
    members: MemberDataItemType[];
}) => {
    const CARDS_PER_PAGE = 6;

    const cards = [];
    const totalPages = Math.ceil(members.length / CARDS_PER_PAGE);

    for (let i = 0; i < totalPages; i++) {
        const start = i * CARDS_PER_PAGE;
        const end = start + CARDS_PER_PAGE;
        const chunk = members.slice(start, end);

        const cardGroup = (
            <li
                key={`group-${i}`}
                className="embla__slide flex-[0_0_100%] w-full"
            >
                {chunk.map(data => (
                    <TeamMemberCardLink key={data.data.id} member={data} />
                ))}
            </li>
        );

        cards.push(cardGroup);
    }

    return cards;
};
