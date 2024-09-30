import { ValidationContext } from "sanity";

import {
    InternationalizedArrayPortableColorTitle,
    Page,
    Slug,
} from "@/types/sanity.types";

import { getEnglishTitleFromBlocks } from "./getEnglishTitleFromBlocks";

export const validatePageSlug =
    (slugMaxLength: number) =>
    (value: Slug | undefined, context: ValidationContext) => {
        if (!value) {
            return "The Page Slug is required.";
        }

        const currentValue = value?.current;
        const parent = context?.parent as Page;
        const enTitle = getEnglishTitleFromBlocks(
            parent.title as InternationalizedArrayPortableColorTitle
        );
        const expectedSlug = enTitle
            .toLowerCase()
            .replace(/\s+/g, "-")
            .slice(0, slugMaxLength - 1);

        if (currentValue !== expectedSlug) {
            return "The Page Slug must match the English title. Regenerate Page Slug.";
        }

        return true;
    };
