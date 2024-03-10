import { Section } from "../shared/Section";
import { TitleQA } from "./TitleQA";
import { QuestionsList } from "./QuestionsList";
import { Button } from "../shared/Button";
import { useTranslations } from "next-intl";
import { ButtonShare } from "../shared/ButtonShare";

export const QaSection = () => {
    const getTranslation = useTranslations("Q&A");
    return (
        <>
            <Section>
                <div className="flex">
                    <TitleQA />
                    <ButtonShare className="ml-auto right-[60px] mt-[27px] mb-[64px] my-[8px]" />
                </div>
                <QuestionsList />
                <Button className="float-right">
                    {getTranslation("button")}
                </Button>
            </Section>
        </>
    );
};
