import { getLocale } from "next-intl/server";

import type { QAItemType } from "@/src/mockedData/questionsData";
import type { LocaleType } from "@/types/LocaleType";

import { Section } from "../../shared/Section";
import { QaCard } from "./QaCard";

type QaCardListProps = {
    questions: QAItemType[];
    searchTerm: string;
};

export const QaCardList = async ({
    searchTerm,
    questions,
}: QaCardListProps) => {
    const locale = await getLocale();

    return (
        <Section className="flex flex-col gap-3 pb-[60px] tab:pb-10 desk:pb-12">
            {questions.map(question => (
                <QaCard
                    key={question.data.slug}
                    data={question.data}
                    localizationData={question[locale as LocaleType]}
                    likes={question.data.likes}
                    searchTerm={searchTerm}
                />
            ))}
        </Section>
    );
};
