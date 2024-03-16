import { EmblaOptionsType } from "embla-carousel";
import { Section } from "../shared/Section";
import { FeedbackTitle } from "./Title/FeedbackTitle";
import { feedbackData } from "./feedbackData";
import { FeedbackSlider } from "./FeedbackSlider";

export const FeedbackSection = () => {
    const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };
    const SLIDES = feedbackData;
    return (
        <Section id="feedback">
            <FeedbackTitle />
            <FeedbackSlider feedbacks={SLIDES} options={OPTIONS} />
        </Section>
    );
};
