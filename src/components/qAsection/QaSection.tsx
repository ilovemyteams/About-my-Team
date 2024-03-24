import { Section } from "../shared/Section";
import { TitleQA } from "./TitleQA";
import { QuestionsList } from "./QuestionsList";
import { ButtonShare } from "../shared/ButtonShare";

export const QaSection = () => {
    return (
        <>
            <Section>
                <div className="flex">
                    <TitleQA />
                    <ButtonShare className="ml-auto tab:right-[60px] mt-[27px] mb-[64px] my-[8px]" />
                </div>
                <QuestionsList />
            </Section>
        </>
    );
};
