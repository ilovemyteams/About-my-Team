"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Section } from "../shared/Section";
import { TitleQA } from "./TitleQa/TitleQA";
import { QuestionsList } from "./QuestionsList";
import { SharePopover } from "../shared/SharePopover";

export const QaSection = () => {
    const { ref, inView } = useInView({
        threshold: 0.75,
    });

    return (
        <Section id="qa" className="relative">
            <div ref={ref}>
                <div className="flex">
                    <TitleQA />
                    <SharePopover
                        className="absolute top-3 right-4 tab:top-0 tab:right-4 pc:right-[60px]"
                        id="qa"
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
        </Section>
    );
};
