"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { membersData } from "@/src/mockedData/membersData";
import { Slug } from "@/src/mockedData/portfolioData";
import { useVisibleAvatars } from "@/src/utils/useVisibleAvatars";

interface OtherMembersProps {
    id: string;
    slug: Slug;
}

const AVATAR_SIZE = 44;
const OVERLAP = 12;

export const OtherMembers = ({ slug, id }: OtherMembersProps) => {
    const t = useTranslations("MemberPage");
    const members = membersData.filter(
        ({ data }) =>
            data.id !== id &&
            data.projects?.some(({ id: projectId }) => projectId === slug)
    );

    const { ref, visibleCount } = useVisibleAvatars({
        avatarSize: AVATAR_SIZE,
        overlap: OVERLAP,
    });

    const hasHidden = members.length > visibleCount;

    const actualVisibleCount = hasHidden
        ? Math.max(1, visibleCount - 2)
        : visibleCount;

    const visibleMembers = members.slice(0, actualVisibleCount);
    const hiddenCount = members.length - visibleMembers.length;
    return (
        <div>
            <p className="mb-2">{t("otherMembers")}</p>
            <ul ref={ref} className="flex -space-x-3 overflow-hidden">
                {visibleMembers.map(member => {
                    const { id, imageURL } = member.data;
                    if (!imageURL) return null;

                    return (
                        <li key={id}>
                            <Image
                                src={imageURL}
                                alt={id}
                                width={AVATAR_SIZE}
                                height={AVATAR_SIZE}
                                className="rounded-full border-2 border-purple-strokeLight dark:border-purple-strokeFormLabel object-cover min-w-[44px] min-h-[44px]"
                            />
                        </li>
                    );
                })}

                {hiddenCount > 0 && (
                    <li>
                        <div
                            style={{
                                width: AVATAR_SIZE,
                                height: AVATAR_SIZE,
                            }}
                            className="flex items-center justify-center rounded-full border-2 border-purple-strokeLight dark:border-purple-strokeFormLabel bg-grey text-sm font-medium text-gray-600"
                        >
                            +{hiddenCount}
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
};
