import { useLocale } from "next-intl";

import { MemberDataItemType } from "@/src/mockedData/membersData";
import { LocaleType } from "@/types/LocaleType";

import { ImageFromCloud } from "../../shared/ImageFromCloud";

export const TeamMemberCard = ({ member }: { member: MemberDataItemType }) => {
    const imageURL = member.data.imageURL;
    const locale = useLocale();
    return (
        <div className="flex gap-3 items-center pc:gap-5 w-[270px] mb-4 tab:mb-0">
            {imageURL && (
                <ImageFromCloud
                    storage="members"
                    src={imageURL}
                    width={72}
                    height={72}
                    alt={member[locale as LocaleType]?.name}
                    loading="lazy"
                    className="w-[60px] h-[60px] pc:w-[72px] pc:h-[72px] rounded-full"
                />
            )}
            <div className="">
                <p className="font-caviar font-bold text-base text-purple-200 dark:text-white-200 mb-2">
                    {member[locale as LocaleType]?.name}
                </p>
                <p className="text-xs text-purple-130 dark:text-purple-50">
                    {member.data.position.toUpperCase()}
                </p>
            </div>
        </div>
    );
};
