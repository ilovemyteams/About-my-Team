import { Fragment } from "react";

import {
    DESKXL_CARDS_PER_PAGE,
    PC_CARDS_PER_PAGE,
    TABLET_CARDS_PER_PAGE,
} from "@/src/constants/cardsPerPage";
import { SCREEN_NAMES } from "@/src/constants/screenNames";
import { useScreenSize } from "@/src/hooks/useScreenSize";
import { MemberDataItemType } from "@/src/mockedData/membersData";

import { JoinUsCard } from "./JoinUsCard";
import { MemberCard } from "./MemberCard";
import { Skeleton } from "./Skeleton";

export const OneSliderCardBigScreen = ({
    membersData,
    optionType,
}: {
    membersData: MemberDataItemType[];
    optionType: string;
}) => {
    const screenSizeName = useScreenSize();
    const { desktopXlName, pcName, desktopName, tabletName } = SCREEN_NAMES;
    let CARDS_PER_PAGE = 1;

    if (screenSizeName === desktopXlName) {
        CARDS_PER_PAGE = DESKXL_CARDS_PER_PAGE;
    } else if (screenSizeName === pcName || screenSizeName === desktopName) {
        CARDS_PER_PAGE = PC_CARDS_PER_PAGE;
    } else if (screenSizeName === tabletName) {
        CARDS_PER_PAGE = TABLET_CARDS_PER_PAGE;
    }

    const cards = [];
    const isShowJoinUs = membersData.length % CARDS_PER_PAGE;
    const totalPages = Math.ceil(membersData.length / CARDS_PER_PAGE);
    const pcBorderJoinUs = membersData.length % 6;
    const tabBorderJoinUs = membersData.length % 4;
    const deskXLBorderJoinUs = membersData.length % 8;

    for (let i = 0; i < totalPages; i++) {
        const start = i * CARDS_PER_PAGE;
        const end = start + CARDS_PER_PAGE;
        const chunk = membersData.slice(start, end);

        const isLastPage = i === totalPages - 1;

        const cardGroup =
            CARDS_PER_PAGE === 1 ? (
                <Fragment key={i}>
                    <ul className="hidden tab:grid pc:hidden flex-[0_0_100%] w-full grid-cols-2  tab:border-0 ">
                        <Skeleton number={4} />
                    </ul>

                    <ul className="hidden pc:grid deskxl:hidden flex-[0_0_100%] w-full border-0 pc:grid-cols-3 ">
                        <Skeleton number={6} />
                    </ul>

                    <ul className="hidden deskxl:grid flex-[0_0_100%] w-full tab:border-0 deskxl:grid-cols-4">
                        <Skeleton number={8} />
                    </ul>
                </Fragment>
            ) : (
                <li
                    key={`group-${i}`}
                    className="embla__slide flex-[0_0_100%] w-full grid grid-cols-2  tab:border-0 pc:grid-cols-3 deskxl:grid-cols-4"
                >
                    {chunk.map(data => (
                        <MemberCard key={data.data.id} data={data} />
                    ))}
                    {isLastPage &&
                        isShowJoinUs > 0 &&
                        optionType === "person" && (
                            <JoinUsCard
                                pcBorderJoinUs={pcBorderJoinUs}
                                tabBorderJoinUs={tabBorderJoinUs}
                                deskXLBorderJoinUs={deskXLBorderJoinUs}
                            />
                        )}
                </li>
            );

        cards.push(cardGroup);
    }

    return cards;
};
