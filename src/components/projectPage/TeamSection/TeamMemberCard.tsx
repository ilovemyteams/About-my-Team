import { useLocale } from "next-intl";

import { MemberDataItemType } from "@/src/mockedData/membersData";
import { LocaleType } from "@/types/LocaleType";

import { ImageFromCloud } from "../../shared/ImageFromCloud";

export const TeamMemberCard = ({ member }: { member: MemberDataItemType }) => {
    const imageURL = member.data.imageURL;
    const locale = useLocale();
    return (
        <div className="flex gap-3 items-center pc:gap-5 desk:gap-6 mb-4 tab:mb-0 group">
            {imageURL && (
                <ImageFromCloud
                    storage="members"
                    src={imageURL}
                    width={72}
                    height={72}
                    alt={member[locale as LocaleType]?.name}
                    loading="lazy"
                    className="w-[60px] h-[60px] tab:w-[52px] tab:h-[52px] pc:w-[72px] pc:h-[72px] desk:w-[92px] desk:h-[92px] rounded-full 
                    group-hover:scale-125 duration-300 ease-out transition-transform "
                />
            )}
            <div className="">
                <p className="font-caviar font-bold text-base text-purple-200 dark:text-white-200 mb-2 tab:mb-[5px] pc:mb-2 desk:mb-[10px]">
                    {member[locale as LocaleType]?.name}
                </p>
                <p className="text-xs pc:text-sm text-purple-130 dark:text-purple-50">
                    {member.data.position.toUpperCase()}
                </p>
            </div>
        </div>
    );
};
