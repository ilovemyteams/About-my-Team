"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useInView } from "react-intersection-observer";

import { Button } from "../shared/Button";
import { Section } from "../shared/Section";
import { BenefitsList } from "./Benefits/BenefitsList";
import { MissionTitle } from "./Title/MissionTitle";

export const MissionSection = () => {
    const { ref, inView } = useInView({
        threshold: 0.75,
    });
    const getTranslation = useTranslations("Buttons");
    const locale = useLocale();
    const router = useRouter();

    const handleButtonClick = () => {
        router.push(`/${locale}/about`);
    };

    return (
        <Section id="mission" className="tab:min-h-[505px]">
            <div ref={ref}>
                <MissionTitle />
                <div className="flex justify-around items-center">
                    <Image
                        src="/images/missionHeartTablet.svg"
                        width="0"
                        height="0"
                        alt="animated image heart"
                        className={`hidden tab:block pc:hidden min-w-[231px] max-w-[297px] w-[32%] h-auto ${inView && "animate-pulsation"}`}
                    />
                    <Image
                        src="/images/missionHeartDesktop.svg"
                        width="0"
                        height="0"
                        alt="animated image heart"
                        className={`hidden pc:block w-[32%] h-auto min-w-[297px] max-w-full ${inView && "animate-pulsation"}`}
                    />
                    <div className="relative flex flex-col justify-start items-center tab:items-end gap-y-[40px] tab:gap-y-[56px] pc:gap-y-[84px] w-full tab:w-[48%] pc:w-[45%]">
                        <BenefitsList />
                        <Button onClick={handleButtonClick}>
                            {getTranslation("learnMore")}
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};
