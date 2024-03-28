import { Section } from "../shared/Section";
import { TitleQA } from "./TitleQA";
import { QuestionsList } from "./QuestionsList";
import { SharePopover } from "../shared/SharePopover";

export const QaSection = () => {
    return (
        <Section className="relative">
            <div className="flex">
                <TitleQA />
                <SharePopover className="absolute -top-3 right-4 bg-transparent h-12 min-w-12 px-0 flex gap-2 text-grey font-caviar tab:text-lg " />
            </div>
            <QuestionsList />
        </Section>
    );
};
