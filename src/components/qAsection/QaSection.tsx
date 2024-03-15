import { Section } from "../shared/Section";
import { TitleQA } from "./TitleQA";
import { QuestionsList } from "./QuestionsList";
import { ButtonShare } from "../shared/ButtonShare";

export const QaSection = () => {
    return (
        <>
            <Section className="hidden">
                <div className="flex">
                    <TitleQA />
                    <ButtonShare className="ml-auto mr-[5px] right-[60px] mt-[27px] mb-[64px] my-[8px]" />
                </div>
                <QuestionsList />
            </Section>
        </>
    );
};
