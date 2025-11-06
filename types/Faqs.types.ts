import { CurrentFaqQueryResult, FaqListQueryResult } from "@/src/sanity/types";

export type QuestionType = FaqListQueryResult["faqs"][number];

export type CurrentQuestionMainContentTextType = NonNullable<
    NonNullable<CurrentFaqQueryResult>["mainContent"]
>[number]["mainContentText"];

export type CurrentQuestionMainContentItemType =
    NonNullable<CurrentQuestionMainContentTextType>[number];

export type MainContentProps = {
    content: CurrentQuestionMainContentTextType;
    searchTerm: string;
    title: string | null;
    topText: string | null;
};
