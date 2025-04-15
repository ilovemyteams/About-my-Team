import { EmblaOptionsType } from "embla-carousel";

import { FeedbackDataItemType } from "@/src/mockedData/feedbackData";

import { FeedbackSlider } from "../../mainPage/feedbackSection/FeedbackSlider";
import { FeedbackSliderFromTab } from "../../mainPage/feedbackSection/FeedbackSliderFromTab";
import { Section } from "../../shared/Section";

export const FeedbackProject = ({
    feedback,
}: {
    feedback: FeedbackDataItemType[];
}) => {
    const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };
    return (
        <Section id="feedback" className="relative">
            <div className="tab:hidden">
                <FeedbackSlider feedbacks={feedback} options={OPTIONS} />
            </div>
            <div className="hidden tab:block tab:pb-[75px] pc:pb-[78px]">
                <FeedbackSliderFromTab feedbacks={feedback} options={OPTIONS} />
            </div>
        </Section>
    );
};
