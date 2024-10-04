import { useLocale } from "next-intl";

import { questionsData } from "@/src/mockedData/questionsData";
import type { LocaleType } from "@/types/LocaleType";

import { Section } from "../../shared/Section";
import { QaCard } from "./QaCard";

export const QaCardList = () => {
    const locale = useLocale();

    return (
        <Section className="flex flex-col gap-3">
            {questionsData.map(question => (
                <QaCard
                    key={question.data.slug}
                    data={question.data}
                    localizationData={question[locale as LocaleType]}
                />
            ))}
        </Section>
    );
};
