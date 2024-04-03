import { Section } from "../shared/Section";
import { TitleQA } from "./TitleQa/TitleQA";
import { QuestionsList } from "./QuestionsList";
import { SharePopover } from "../shared/SharePopover";

export const QaSection = () => {
    return (
        <Section className="relative">
            <div className="flex tab:justify-between pc:items-end">
                <TitleQA />
                <SharePopover
                    className="absolute -top-3 right-4 tab:top-0 tab:right-4 pc:right-[60px] deskxl:top-[25px] "
                    trigerShowShareText={true}
                />
            </div>
            <QuestionsList />
        </Section>
    );
};
