import { Section } from "../shared/Section";
import { TitleQA } from "./TitleQA";
import { QuestionsList } from "./QuestionsList";
import { SharePopover } from "../shared/SharePopover";

export const QaSection = () => {
    return (
        <Section className="relative">
            <div className="flex">
                <TitleQA />
                <SharePopover className="absolute -top-3 right-4" />
            </div>
            <QuestionsList />
        </Section>
    );
};
