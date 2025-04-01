"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useInView } from "react-intersection-observer";

import { EggContainer } from "../../easter/EggsHunt/EggContainer";
import { Button } from "../../shared/Button";
import { Section } from "../../shared/Section";
import { SharePopover } from "../../shared/SharePopover";
import { QuestionsList } from "./QuestionsList";
import { TitleQA } from "./TitleQA";

export const QaSection = () => {
    const { ref, inView } = useInView({
        threshold: 0.75,
    });
    const getTranslation = useTranslations("Buttons");

    const router = useRouter();
    const locale = useLocale();

    const handleButtonClick = () => {
        router.push(`/${locale}/faq`);
    };
    return (
        <Section id="faq" className="relative">
            <EggContainer count={3} />
            <div ref={ref}>
                <div className="flex">
                    <TitleQA />
                    <SharePopover
                        className="absolute -top-3 right-4 tab:top-[-4px] tab:right-6 pc:top-0 pc:right-[60px]"
                        id="faq"
                        trigerShowShareText={true}
                    />
                </div>
                <div className="relative flex justify-around">
                    <Image
                        src="/images/curve.svg"
                        width="0"
                        height="0"
                        alt="animated image curve"
                        className={`hidden pc:block absolute top-[-16px] left-[-254px] min-w-[485px] h-auto ${inView && "animate-curveRotation"}`}
                    />
                    <QuestionsList />
                </div>
            </div>
            <div className="flex justify-center tab:justify-end">
                <Button color="grey" onClick={handleButtonClick}>
                    {getTranslation("allQuestions")}
                </Button>
            </div>
        </Section>
    );
};
