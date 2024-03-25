import { Section } from "../shared/Section";
import { TitleQA } from "./TitleQA";
import { QuestionsList } from "./QuestionsList";
import { ButtonShare } from "../shared/ButtonShare";

export const QaSection = () => {
    return (
        <Section>
            <div className="flex">
                <TitleQA />
                <ButtonShare className="tab:gap-2 ml-auto right-[60px] pc:mt-[27px] mb-[64px] pc:my-[8px]" />
            </div>
            <QuestionsList />
        </Section>
    );
};
