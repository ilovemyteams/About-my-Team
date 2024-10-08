import { useLocale } from "next-intl";

import type { QAItemType } from "@/src/mockedData/questionsData";
import type { LocaleType } from "@/types/LocaleType";

import { Section } from "../../shared/Section";
import { QaCard } from "./QaCard";

type QaCardListProps = {
    searchParams: string;
    questions: QAItemType[];
};

export const QaCardList = ({ searchParams, questions }: QaCardListProps) => {
    const locale = useLocale();

    return (
        <Section className="flex flex-col gap-3">
            {questions.map(question => (
                <QaCard
                    key={question.data.slug}
                    data={question.data}
                    localizationData={question[locale as LocaleType]}
                    searchTerm={searchParams}
                />
            ))}
        </Section>
    );
};
