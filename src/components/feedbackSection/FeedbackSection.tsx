import { Button } from "../shared/Button";
import { Section } from "../shared/Section";
import { FeedbackCardFirstPart, FeedbackCardSecondPart } from "./FeedbackCard";
import { FeedbackTitle } from "./Title/FeedbackTitle";
import { FeedbackData } from "./feedbackData";

const feedbackItems = FeedbackData();
const feedbackItem = feedbackItems[1];

const FeedbackSection = () => {
    return (
        <Section>
            <FeedbackTitle />
            <FeedbackCardFirstPart item={feedbackItem} />
            <FeedbackCardSecondPart item={feedbackItem} />

            <Button className="">Button</Button>
        </Section>
    );
};
export default FeedbackSection;
