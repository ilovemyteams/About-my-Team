import { useTranslations } from "next-intl";

import { HomePageProps } from "@/types/sanityDataPropsTypes";

import { SectionCTA } from "../shared/SectionCTA";
import { TitleCTAWrapper } from "../shared/TitleCTAWrapper";
import { WriteUs } from "../shared/WriteUs/WriteUs";

export const WriteUsSection = ({ data }: {data:{title :string | null} | null | undefined}) => {
    const getTranslation = useTranslations("WriteUs");
    return (
        <SectionCTA className="flex flex-col gap-y-[40px] tab:gap-0 tab:flex-row items-center justify-between">
            <TitleCTAWrapper className="tab:w-[50%] pc:w-[70%]">
                {data?.title
                    ? data.title.toString()
                    : getTranslation("title")}
            </TitleCTAWrapper>
            <WriteUs />
        </SectionCTA>
    );
};
