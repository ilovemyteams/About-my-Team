import { JoinUsCard } from "./JoinUsCard";
import { MemberCard } from "./MemberCard";
import { MemberDataItemType } from "../../mockedData/membersData";
import { useScreenSize } from "@/src/hooks/useScreenSize";
import { SCREEN_NAMES } from "@/src/constants/screenNames";

export const OneSliderCardBigScreen = ({
    membersData,
    optionType,
}: {
    membersData: MemberDataItemType[];
    optionType: string;
}) => {
    const screenSizeName = useScreenSize();
    const { tabletName } = SCREEN_NAMES;
    const CARDS_PER_PAGE = screenSizeName === tabletName ? 4 : 6;

    const cards = [];
    const isShowJoinUs = membersData.length % CARDS_PER_PAGE;
    const totalPages = Math.ceil(membersData.length / CARDS_PER_PAGE);

    for (let i = 0; i < totalPages; i++) {
        const start = i * CARDS_PER_PAGE;
        const end = start + CARDS_PER_PAGE;
        const chunk = membersData.slice(start, end);

        const isLastPage = i === totalPages - 1;

        const cardGroup = (
            <li
                key={`group-${i}`}
                className="embla__slide flex-[0_0_100%] w-full grid grid-cols-2  tab:border-0 pc:grid-cols-3"
            >
                {chunk.map(data => (
                    <MemberCard key={data.data.id} data={data} />
                ))}
                {isLastPage && isShowJoinUs > 0 && optionType === "person" && (
                    <JoinUsCard />
                )}
            </li>
        );

        cards.push(cardGroup);
    }

    return cards;
};
