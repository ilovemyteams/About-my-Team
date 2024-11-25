import { getLocale } from "next-intl/server";

import type { QAItemType } from "@/src/mockedData/questionsData";
import { getLikes } from "@/src/utils/likeDataHandler";
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
    const likes = await getLikes();

    return (
        <Section className="flex flex-col gap-3 pb-15 tab:pb-10 pc:pb-[40px] desk:pb-12 ">
            {questions.map((question, id) => (
                <QaCard
                    key={question.data.slug}
                    id={`item-${id + 1}`}
                    data={question.data}
                    localizationData={question[locale as LocaleType]}
                    likes={likes.filter(
                        item => item.questionSlug === question.data.slug
                    )}
                    searchTerm={searchTerm}
                />
            ))}
        </Section>
    );
};
