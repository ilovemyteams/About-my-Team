import { useTranslations } from "next-intl";
import { TitleCTAWrapper } from "../shared/TitleCTAWrapper";
import { SectionCTA } from "../shared/SectionCTA";
import { JoinUsButton } from "../shared/JoinUsButton";

export const JoinTheTeamSection = () => {
    const getTranslation = useTranslations("JoinTheTeam");

    return (
        <SectionCTA className="flex flex-col gap-y-[40px] tab:gap-0 tab:flex-row items-center justify-between">
            <TitleCTAWrapper className="tab:w-[50%] pc:w-[70%]">
                {getTranslation("title")}
            </TitleCTAWrapper>
            <JoinUsButton />
        </SectionCTA>
    );
};
