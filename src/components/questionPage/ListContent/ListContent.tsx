import { LongAnswerListType } from "@/src/mockedData/questionsData";

import { IconQADecoration } from "../../shared/Icons/IconQADecoration";
import { ListContentItem } from "./ListContentItem";
import { LocaleType } from "@/types/LocaleType";

interface ListContentProps {
    content: LongAnswerListType[];
    activeSubList?: boolean;
    locale: LocaleType;
}

export const ListContent = ({
    activeSubList = false,
    content,
    locale,
}: ListContentProps) => {
    const listStyle = activeSubList ? "list-disc ml-6" : "";

    return (
        <div className="flex flex-col tab:flex-row justify-start gap-8">
            <ol className="tab:max-w-[517px] pc:max-w-[688px] flex flex-col gap-6 tab:gap-10 pc:gap-[60px]">
                {content.map((item, i) => (
                    <ListContentItem
                        key={i}
                        item={item}
                        indx={i}
                        listStyle={listStyle}
                        locale={locale}
                    />
                ))}
            </ol>
            <div className="text-redLight dark:text-red mx-auto w-[76px] pc:w-[110px]">
                <IconQADecoration className="block tab:sticky tab:top-[15%]" />
            </div>
        </div>
    );
};
