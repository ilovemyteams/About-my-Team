import { useLocale } from "next-intl";

import { ImageFromCloud } from "@/src/components/shared/ImageFromCloud";
import { MemberDataItemType } from "@/src/mockedData/membersData";
import { LocaleType } from "@/types/LocaleType";

export const TeammateCard = ({ data }: { data: MemberDataItemType }) => {
    const locale = useLocale();
    const langData = data[locale as LocaleType];

    return (
        <div className="flex gap-4 items-center" title={langData.name}>
            <ImageFromCloud
                storage="members"
                src={data.data.imageURL || ""}
                width={256}
                height={256}
                alt={data.data.id}
                loading="lazy"
                className={"object-cover w-[56px] h-[56px] rounded-full"}
            />
            <div className="min-w-0">
                <p className="mb-[6px] text-sm tab:text-base desk:text-lg font-caviar font-bold text-purple-200 dark:text-white-200 truncate w-full">
                    {langData.name}
                </p>
                <p className="text-xs desk:text-sm uppercase text-purple-130 dark:text-purple-50">
                    {data.data.position}
                </p>
            </div>
        </div>
    );
};
