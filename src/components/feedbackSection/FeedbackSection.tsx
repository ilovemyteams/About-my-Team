import { Button } from "../shared/Button";
import { Section } from "../shared/Section";
import { FeedbackTitle } from "./Title/FeedbackTitle";

const FeedbackSection = () => {
    return (
        <Section id="feedback">
            <FeedbackTitle />

            <Button className="">Button</Button>
        </Section>
    );
};
export default FeedbackSection;
