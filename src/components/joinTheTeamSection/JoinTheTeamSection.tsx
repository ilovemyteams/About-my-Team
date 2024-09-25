import { useTranslations } from "next-intl";

import { JoinUsButton } from "../shared/JoinUsButton";
import { SectionCTA } from "../shared/SectionCTA";
import { TitleCTAWrapper } from "../shared/TitleCTAWrapper";
import { HomePageProps } from "@/types/sanityDataPropsTypes";

export const JoinTheTeamSection = ({ data }: HomePageProps) => {
    const getTranslation = useTranslations("JoinTheTeam");
    return (
        <SectionCTA className="flex flex-col gap-y-[40px] tab:gap-0 tab:flex-row items-center justify-between">
            <TitleCTAWrapper className="tab:w-[50%] pc:w-[70%]">
                {data?.ctaSectionJoinUs?.title
                    ? data.ctaSectionJoinUs.title.toString()
                    : getTranslation("title")}
            </TitleCTAWrapper>
            <JoinUsButton />
        </SectionCTA>
    );
};
