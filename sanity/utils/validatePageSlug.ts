import { ValidationContext } from "sanity";

import { Page, Slug } from "@/types/sanity.types";

import { generatePageSlug } from "./generatePageSlug";

// Спрощена функція для валідації Page Slug
export const validatePageSlug =
    (slugMaxLength: number) =>
    async (value: Slug | undefined, context: ValidationContext) => {
        if (!value) {
            return "The Page Slug is required.";
        }

        const currentValue = value?.current;
        const parent = context?.parent as Page;

        const expectedSlug = await generatePageSlug(parent, slugMaxLength);

        if (currentValue !== expectedSlug) {
            return `The Page Slug must match the English title and Parent slug. Expected: ${expectedSlug}. Regenerate slug.`;
        }

        return true;
    };
