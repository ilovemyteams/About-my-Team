import { useTranslations } from "next-intl";
import React from "react";
import { twMerge } from "tailwind-merge";

import { usePaginationData } from "@/src/hooks/usePaginationData";
import { membersData } from "@/src/mockedData/membersData";

import { PageSection } from "../../shared/PageSection";
import { Pagination } from "../../shared/Pagination";
import { NewMemberCard } from "./parts/NewMemberCard";
import { TeamCard } from "./TeamCard";

const ITEMS_PER_PAGE = 12;

export const TeamList = ({
    searchParams,
}: {
    searchParams: { page?: string; categoryName?: string };
}) => {
    const t = useTranslations("MemberPage");

    const pageNumber = searchParams?.page ? parseInt(searchParams.page) : 1;
    const selectedMembers = searchParams?.categoryName || "AllMembers";

    const filteredMembers =
        selectedMembers === "AllMembers"
            ? membersData
            : membersData.filter(
                  item => item.data.categoryName === selectedMembers
              );

    // ToDo: view only ilovemyteam member -> then need remove this array and change to filteredMembers
    const memberForPagination = filteredMembers
        .filter(member => member.data.projectId.includes("ilovemyteam-online"))
        .toSorted((a, b) => {
            const isLeftA = a.data.isEndInAboutMT ? 1 : 0;
            const isLeftB = b.data.isEndInAboutMT ? 1 : 0;
            return isLeftA - isLeftB;
        });

    const {
        dataSlice: visibleList,
        totalPages,
        isPaginationNeeded,
    } = usePaginationData(memberForPagination, ITEMS_PER_PAGE, pageNumber);

    // ToDo: change memberForPagination to filteredMembers + line 52 with translations
    const membersCount =
        pageNumber !== totalPages
            ? ITEMS_PER_PAGE * pageNumber
            : memberForPagination.length;

    return (
        <PageSection className="pb-[80px] tab:pb-[100px] desk:pb-[120px]">
            <p className="text-purple-130 dark:text-purple-50 mb-6 tab:mb-[26px] desk:mb-8 deskxl:mb-9 text-sm tab:text-base desk:text-lg ">
                {membersCount}
                {t.rich("membersCount", {
                    count: memberForPagination.length,
                })}
            </p>
            <ul
                className={twMerge(
                    "mb-10 desk:mb-[60px] grid grid-cols-1 tab:grid-cols-[repeat(auto-fit,minmax(320px,_1fr))] gap-y-4 tab:gap-5 desk:gap-x-3",
                    visibleList.length < 4 &&
                        "tab:grid-cols-[repeat(auto-fill,minmax(320px,_1fr))]"
                )}
            >
                {visibleList.map(member => (
                    <li key={member.data.id}>
                        <TeamCard member={member} />
                    </li>
                ))}
                {memberForPagination.length % ITEMS_PER_PAGE !== 0 &&
                    pageNumber === totalPages && (
                        <li>
                            <NewMemberCard />
                        </li>
                    )}
            </ul>
            {isPaginationNeeded && (
                <Pagination total={totalPages} currentPage={pageNumber} />
            )}
        </PageSection>
    );
};
