"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { HomeFAQQueryResult } from "@/types/sanity.types";

import { Section } from "../shared/Section";
import { SharePopover } from "../shared/SharePopover";
import { QuestionsList } from "./QuestionsList";
import { TitleQA } from "./TitleQA";

export const QaSection = ({ data }: { data: HomeFAQQueryResult }) => {
    const { ref, inView } = useInView({
        threshold: 0.75,
    });

    const { anchorId, faqList, subtitle, title } = data || {};

    return (
        <Section id={anchorId || ""} className="relative">
            <div ref={ref}>
                <div className="flex">
                    {subtitle && title && (
                        <TitleQA title={title} subtitle={subtitle} />
                    )}
                    <SharePopover
                        className="absolute top-3 right-4 tab:top-0 tab:right-4 pc:right-[60px]"
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
                    <QuestionsList faqList={faqList || []} />
                </div>
            </div>
        </Section>
    );
};
