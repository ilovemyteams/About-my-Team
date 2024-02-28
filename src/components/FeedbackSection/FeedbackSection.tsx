import { Button } from "../shared/Button";
import { Section } from "../shared/Section";
import FeedbackSwiper from "./FeedbackSwiper";
import { FeedbackTitle } from "./FeedbackTitle";

const FeedbackSection = () => {
    return (
        <Section>
            <FeedbackTitle />
            <FeedbackSwiper />
            <Button className="">Button</Button>
        </Section>
    );
};
export default FeedbackSection;
