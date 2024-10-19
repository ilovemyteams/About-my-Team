import Image from "next/image";
import { useTranslations } from "next-intl";

import { JoinUsButton } from "../shared/JoinUsButton";
import { SectionCTA } from "../shared/SectionCTA";
import { TitleCTAWrapper } from "../shared/TitleCTAWrapper";

export const JoinTheTeamSection = () => {
    const getTranslation = useTranslations("JoinTheTeam");

    return (
        <SectionCTA className="relative flex flex-col gap-y-[40px] tab:gap-0 tab:flex-row items-center justify-between">
            <TitleCTAWrapper className="tab:w-[50%] pc:w-[70%]">
                {getTranslation("title")}
            </TitleCTAWrapper>
            <JoinUsButton />
            <Image
                src="/images/pumkin.png"
                alt="Pumkin"
                width={30}
                height={30}
                className="absolute bottom-[-12px] left-6 rotate-45 z-[-10]"
            />
        </SectionCTA>
    );
};
