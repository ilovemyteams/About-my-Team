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
            <SharePopover className="absolute -top-3 right-4 tab:static tab:items-end tab:mt-4 tab:ml-auto pc:mt-5" />
        </Section>
    );
};
