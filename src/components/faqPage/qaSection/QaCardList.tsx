import { useLocale } from "next-intl";

import { questionsData } from "@/src/mockedData/questionsData";
import type { LocaleType } from "@/types/LocaleType";

import { Section } from "../../shared/Section";
import { QaCard } from "./QaCard";

export const QaCardList = () => {
    //current version of this component
    //is for testing purposes only
    const locale = useLocale() as LocaleType;

    return (
        <Section className="flex flex-col gap-3">
            {questionsData.map((item, i) => (
                <QaCard
                    key={i}
                    data={{
                        id: i,
                        image: item.data.image,
                        likes: i,
                    }}
                    localizationData={{
                        questionText: item[locale].questionText,
                        answerText: item[locale].answerText,
                        imageAltText: item[locale].imageAltText,
                    }}
                />
            ))}
        </Section>
    );
};
