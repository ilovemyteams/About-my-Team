import { useLocale } from "next-intl";

import { questionsData } from "@/src/mockedData/questionsData";
import { LikesTypes } from "@/src/utils/likeDataHandler";
import type { LocaleType } from "@/types/LocaleType";

import { Section } from "../../shared/Section";
import { QaCard } from "./QaCard";

interface QaCardListProps {
    likes: LikesTypes[];
}
export const QaCardList = ({ likes }: QaCardListProps) => {
    const locale = useLocale();

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
