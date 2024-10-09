import { getLocale } from "next-intl/server";

import { questionsData } from "@/src/mockedData/questionsData";
import { getLikes } from "@/src/utils/jsonDataHandler";
import type { LocaleType } from "@/types/LocaleType";

import { Section } from "../../shared/Section";
import { QaCard } from "./QaCard";

export const QaCardList = async () => {
    const locale = await getLocale();
    const likes = await getLikes();

    return (
        <Section className="flex flex-col gap-3">
            {questionsData.map(question => (
                <QaCard
                    key={question.data.slug}
                    data={question.data}
                    localizationData={question[locale as LocaleType]}
                    likes={likes.filter(
                        item => item.questionSlug === question.data.slug
                    )}
                />
            ))}
        </Section>
    );
};
