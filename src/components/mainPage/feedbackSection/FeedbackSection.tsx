import { EmblaOptionsType } from "embla-carousel";

import { HomeReviewsQueryResult } from "@/types/sanity.types";

import { Section } from "../../shared/Section";
import { SharePopover } from "../../shared/SharePopover";
import { FeedbackSlider } from "./FeedbackSlider";
import { FeedbackSliderFromTab } from "./FeedbackSliderFromTab";
import { FeedbackTitle } from "./FeedbackTitle";

export const FeedbackSection = ({ data }: { data: HomeReviewsQueryResult }) => {
    const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };
    if (!data) {
        return null;
    }
    const { title, subtitle, anchorId, feedbacks } = data;
    return (
        <Section id={anchorId || "reviews"} className="relative">
            <FeedbackTitle title={title} subtitle={subtitle} />
            <div className="tab:hidden">
                {feedbacks && (
                    <FeedbackSlider feedbacks={feedbacks} options={OPTIONS} />
                )}
            </div>
            <div className="hidden tab:block tab:pb-[75px] pc:pb-[78px]">
                {feedbacks && (
                    <FeedbackSliderFromTab
                        feedbacks={feedbacks}
                        options={OPTIONS}
                    />
                )}
            </div>
            <SharePopover
                className="absolute -top-3 right-4 tab:right-6 tab:top-[414px] tab:items-end pc:right-[60px] pc:top-[526px]"
                id="feedback"
                trigerShowShareText={false}
            />
        </Section>
    );
};
