import { EmblaOptionsType } from "embla-carousel";
import { useTranslations } from "next-intl";

import { FeedbackDataItemType } from "@/src/mockedData/feedbackData";

import { FeedbackSlider } from "../../shared/Feedbacks/FeedbackSlider";
import { FeedbackSliderFromTab } from "../../shared/Feedbacks/FeedbackSliderFromTab";
import { Section } from "../../shared/Section";

export const FeedbackProject = ({
    feedback,
}: {
    feedback: FeedbackDataItemType[];
}) => {
    const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };
    const getTranslation = useTranslations("SomeProjectPage");

    return (
        <Section id="feedback" className="relative">
            <h2 className="font-caviar dark:text-grey text-purple-200 text-2xl tab:text-4xl pc:text-5xl desk:text-6xl font-bold mb-6 tab:mb-10 pc:mb-[64px]">
                {getTranslation.rich("feedback", {
                    purple: chunk => (
                        <span className="text-purple-100">{chunk}</span>
                    ),
                })}
            </h2>
            <div className="tab:hidden">
                <FeedbackSlider feedbacks={feedback} options={OPTIONS} />
            </div>
            <div className="hidden tab:block tab:pb-[75px] pc:pb-[78px]">
                <FeedbackSliderFromTab feedbacks={feedback} options={OPTIONS} />
            </div>
        </Section>
    );
};
