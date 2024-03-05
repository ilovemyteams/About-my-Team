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
            <Section className="relative">
                <TitleQA />
                <ButtonShare className="absolute right-[60px] top-[23px] mb-[64px]">
                    {getTranslation("buttonShare")}
                </ButtonShare>
                <QuestionsList />
                <Button className="float-right">
                    {getTranslation("button")}
                </Button>
            </Section>
        </>
    );
};
