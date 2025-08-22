import { useTranslations } from "next-intl";
import React from "react";

import { usePaginationData } from "@/src/hooks/usePaginationData";
import { membersData } from "@/src/mockedData/membersData";

import { PageSection } from "../../shared/PageSection";
import { Pagination } from "../../shared/Pagination";
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

    const {
        dataSlice: visibleList,
        totalPages,
        isPaginationNeeded,
    } = usePaginationData(filteredMembers, ITEMS_PER_PAGE, pageNumber);

    const membersCount =
        pageNumber !== totalPages
            ? ITEMS_PER_PAGE * pageNumber
            : filteredMembers.length;

    return (
        <PageSection className="pb-[80px] tab:pb-[100px] desk:pb-[120px]">
            <p className="text-purple-130 dark:text-purple-50 mb-6 tab:mb-[26px] desk:mb-8 deskxl:mb-9 text-sm tab:text-base desk:text-lg ">
                {membersCount}{" "}
                {t.rich("membersCount", {
                    count: filteredMembers.length,
                })}
            </p>
            <ul className="mb-10 desk:mb-[60px] grid grid-cols-1 tab:grid-cols-[repeat(auto-fit,minmax(320px,_1fr))] gap-y-4 tab:gap-5 desk:gap-x-3">
                {visibleList.map(member => (
                    <li key={member.data.id}>
                        <TeamCard member={member} />
                    </li>
                ))}
            </ul>
            {isPaginationNeeded && (
                <Pagination total={totalPages} currentPage={pageNumber} />
            )}
        </PageSection>
    );
};
