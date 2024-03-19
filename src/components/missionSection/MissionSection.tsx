"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "../shared/Button";
import { Section } from "../shared/Section";
import { BenefitsList } from "./Benefits/BenefitsList";
import { MissionTitle } from "./Title/MissionTitle";
import { StagesList } from "./StagesList";

export const MissionSection = () => {
    const getTranslation = useTranslations("Buttons");
    const { ref, inView } = useInView({
        threshold: 0.75,
    });
    return (
        <Section id="mission">
            <div ref={ref}>
                <MissionTitle />
                <div className="flex justify-around items-center">
                    <Image
                        src="/images/missionHeart.svg"
                        width="0"
                        height="0"
                        alt="animated image heart"
                        className={`hidden tab:block min-w-[231px] w-[32%] h-auto pc:min-w-[418px] pc:w-[39%] ${inView && "animate-pulsation"}`}
                    />
                    <div className="relative flex flex-col justify-start items-center gap-y-[40px] tab:gap-y-[56px] pc:gap-y-[84px] tab:w-[48%] pc:w-[45%]">
                        <BenefitsList />
                        <Button>{getTranslation("order")}</Button>
                    </div>
                </div>
                <StagesList />
            </div>
        </Section>
    );
};
