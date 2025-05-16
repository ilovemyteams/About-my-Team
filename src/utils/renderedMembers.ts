import { EMPTY_INDICES } from "../constants/renderOnMain";
import { MemberDataItemType } from "../mockedData/membersData";

export const getPaddedMembers = (
    visibleMembers: MemberDataItemType[] | undefined
): (MemberDataItemType | null)[] => {
    const paddedMembers: (MemberDataItemType | null)[] = [];

    if (visibleMembers) {
        let memberIndex = 0;

        for (let i = 0; i < visibleMembers.length + EMPTY_INDICES.length; i++) {
            if (EMPTY_INDICES.includes(i)) {
                paddedMembers.push(null);
            } else {
                paddedMembers.push(visibleMembers[memberIndex]);
                memberIndex++;
            }
        }
    }

    return paddedMembers;
};
