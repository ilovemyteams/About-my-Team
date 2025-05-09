import { EmblaOptionsType } from "embla-carousel";
import { useMemo } from "react";

import { feedbackData } from "@/src/mockedData/feedbackData";
import { shuffleArray } from "@/src/utils/shuffleArray";

import { FeedbackSlider } from "../../shared/Feedbacks/FeedbackSlider";
import { FeedbackSliderFromTab } from "../../shared/Feedbacks/FeedbackSliderFromTab";
import { Section } from "../../shared/Section";
import { SharePopover } from "../../shared/SharePopover";
import { FeedbackTitle } from "./FeedbackTitle";

export const FeedbackSection = () => {
    const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };
    const shuffledFeedbacks = useMemo(() => shuffleArray(feedbackData), []);
    return (
        <Section id="feedback" className="relative">
            <FeedbackTitle />
            <div className="tab:hidden">
                <FeedbackSlider
                    feedbacks={shuffledFeedbacks}
                    options={OPTIONS}
                />
            </div>
            <div className="hidden tab:block tab:pb-[75px] pc:pb-[78px]">
                <FeedbackSliderFromTab
                    feedbacks={shuffledFeedbacks}
                    options={OPTIONS}
                />
            </div>
            <SharePopover
                className="absolute -top-3 right-4 tab:right-6 tab:top-[414px] tab:items-end pc:right-[60px] pc:top-[526px] desk:top-[630px]"
                id="feedback"
                trigerShowShareText={false}
            />
        </Section>
    );
};
