"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useInView } from "react-intersection-observer";

import { HomeAboutUsQueryResult } from "@/types/sanity.types";

import { Button } from "../shared/Button";
import { Section } from "../shared/Section";
import { BenefitsList } from "./Benefits/BenefitsList";
import { MissionTitle } from "./MissionTitle";

export const MissionSection = ({ data }: { data: HomeAboutUsQueryResult }) => {
    const { ref, inView } = useInView({
        threshold: 0.75,
    });
    const {
        aboutUsItemInfo,
        anchorId,
        subtitle,
        title,
        learnMoreButtonName,
        buttonPageLink,
    } = data?.aboutUsHomeSection || {};

    const locale = useLocale();
    const router = useRouter();

    const handleButtonClick = () => {
        router.push(`/${locale}/${buttonPageLink || ""}`);
    };

    return (
        <Section id={anchorId || ""} className="tab:min-h-[505px]">
            <div ref={ref}>
                <MissionTitle
                    title={title || null}
                    subtitle={subtitle || null}
                />
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
                        <BenefitsList benefits={aboutUsItemInfo || null} />
                        <Button onClick={handleButtonClick}>
                            {learnMoreButtonName ||
                                "You forgot to name the button"}
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};
