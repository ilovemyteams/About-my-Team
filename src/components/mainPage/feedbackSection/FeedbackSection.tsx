import { EmblaOptionsType } from "embla-carousel";

import { feedbackData } from "@/src/mockedData/feedbackData";

import { Section } from "../../shared/Section";
import { SharePopover } from "../../shared/SharePopover";
import { FeedbackSlider } from "./FeedbackSlider";
import { FeedbackSliderFromTab } from "./FeedbackSliderFromTab";
import { FeedbackTitle } from "./FeedbackTitle";

export const FeedbackSection = () => {
    const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };
    return (
        <Section id="feedback" className="relative">
            <FeedbackTitle />
            <div className="tab:hidden">
                <FeedbackSlider feedbacks={feedbackData} options={OPTIONS} />
            </div>
            <div className="hidden tab:block tab:pb-[75px] pc:pb-[78px]">
                <FeedbackSliderFromTab
                    feedbacks={feedbackData}
                    options={OPTIONS}
                />
            </div>
            <SharePopover
                className="absolute -top-3 right-4 tab:right-6 tab:top-[414px] tab:items-end pc:right-[60px] pc:top-[526px]"
                id="feedback"
                trigerShowShareText={false}
            />
        </Section>
    );
};
