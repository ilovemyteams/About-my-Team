import { QuestionType } from "@/types/sanity.types";

import { Section } from "../../shared/Section";
import { QaCard } from "./QaCard";

type QaCardListProps = {
    questions: QuestionType[];
    searchTerm: string;
};

export const QaCardList = async ({
    searchTerm,
    questions,
}: QaCardListProps) => {
    return (
        <Section className="flex flex-col gap-3 pb-[60px] tab:pb-10 desk:pb-12">
            {questions.map(question => (
                <QaCard
                    key={question._id}
                    data={question}
                    searchTerm={searchTerm}
                />
            ))}
        </Section>
    );
};
