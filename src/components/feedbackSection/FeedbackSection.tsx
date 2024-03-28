import { EmblaOptionsType } from "embla-carousel";
import { Section } from "../shared/Section";
import { FeedbackTitle } from "./Title/FeedbackTitle";
import { feedbackData } from "./feedbackData";
import { FeedbackSlider } from "./FeedbackSlider";
import { SharePopover } from "../shared/SharePopover";

export const FeedbackSection = () => {
    const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };
    return (
        <Section id="feedback" className="relative">
            <FeedbackTitle />
            <FeedbackSlider feedbacks={feedbackData} options={OPTIONS} />
            <SharePopover className="absolute -top-3 right-4 bg-transparent h-12 min-w-12 px-0 flex gap-2 text-grey font-caviar tab:text-lg" />
        </Section>
    );
};
