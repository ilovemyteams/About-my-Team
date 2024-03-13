import { useLocale } from "next-intl";
import { Section } from "../shared/Section";
import { FeedbackCard } from "./FeedbackCard";
import { FeedbackTitle } from "./Title/FeedbackTitle";
import { FeedbackDataItemType, feedbackData } from "./feedbackData";

type Locale = "uk" | "en" | "pl";

const feedback: FeedbackDataItemType = feedbackData[1];

export const FeedbackSection = () => {
    const locale = useLocale();
    return (
        <Section id="feedback">
            <FeedbackTitle />
            <FeedbackCard
                data={feedback.data}
                localizationData={feedback[locale as Locale]}
            />
        </Section>
    );
};
