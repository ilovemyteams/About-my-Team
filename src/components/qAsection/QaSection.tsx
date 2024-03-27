import { Section } from "../shared/Section";
import { TitleQA } from "./TitleQA";
import { QuestionsList } from "./QuestionsList";
import { SharePopover } from "../shared/SharePopover";

export const QaSection = () => {
    return (
        <Section>
            <div className="flex">
                <TitleQA />
                <SharePopover />
            </div>
            <QuestionsList />
        </Section>
    );
};
