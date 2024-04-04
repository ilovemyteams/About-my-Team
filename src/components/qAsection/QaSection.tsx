import { Section } from "../shared/Section";
import { TitleQA } from "./TitleQa/TitleQA";
import { QuestionsList } from "./QuestionsList";
import { SharePopover } from "../shared/SharePopover";

export const QaSection = () => {
    return (
        <Section id="qa" className="relative">
            <div className="flex">
                <TitleQA />
                <SharePopover
                    className="absolute -top-3 right-4 tab:top-0 tab:right-4 pc:right-[60px]"
                    id="qa"
                    trigerShowShareText={true}
                />
            </div>
            <QuestionsList />
        </Section>
    );
};
