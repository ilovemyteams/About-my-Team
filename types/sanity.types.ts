import { FaqListQueryResult } from "@/sanity/types";

export type QuestionType = FaqListQueryResult["faqs"][number];

export type SanityImageType = {
    url: string | null;
    lqip: string | null;
    caption: string | null;
};
