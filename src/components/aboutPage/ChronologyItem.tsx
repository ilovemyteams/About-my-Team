import { useLocale } from "next-intl";

import { ChronologyDataTypeItem } from "@/src/mockedData/chronologyData";
import { LocaleType } from "@/types/LocaleType";

interface ChronologyItemProp {
    data: ChronologyDataTypeItem;
}

export const ChronologyItem = ({ data }: ChronologyItemProp) => {
    const locale = useLocale();
    return (
        <>
            <div className="flex font-caviar items-center justify-between">
                <h5 className="text-xlb  text-purple-200 dark:text-grey">
                    {data[locale as LocaleType]?.title}
                </h5>
                <p className="text-[36px] leading-[45px] pc:text-6xl font-bold dark:text-purple-stroke text-purple-strokeLight">
                    {data[locale as LocaleType]?.date}
                </p>
            </div>
            <div className="tab:h-[45%]">
                <p className="text-base">{data[locale as LocaleType]?.text}</p>
            </div>
        </>
    );
};
