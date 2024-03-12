import Image from "next/image";
import { Button } from "../shared/Button";
import { Section } from "../shared/Section";
import { BenefitsList } from "./Benefits/BenefitsList";
import { MissionTitle } from "./Title/MissionTitle";
import { StagesList } from "./StagesList";
import { useTranslations } from "next-intl";

export const MissionSection = () => {
    const getTranslation = useTranslations("Buttons");
    return (
        <Section id="mission">
            <MissionTitle />
            <div className="flex justify-around">
                <Image
                    src="/images/bgImages/heart.svg"
                    width="0"
                    height="0"
                    alt="background image heart"
                    className="w-[450px] h-[402px]"
                />
                <div className="relative flex flex-col justify-start items-center pc:items-end gap-y-[40px] pc:gap-y-[48px] pc:w-1/2">
                    <BenefitsList />
                    <Button>{getTranslation("order")}</Button>
                </div>
            </div>
            <StagesList />
        </Section>
    );
};
