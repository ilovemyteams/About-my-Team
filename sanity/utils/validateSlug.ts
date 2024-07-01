import { SlugRule } from "sanity";

const MAX_LENGTH = 96;

export const validateSlug = (Rule: SlugRule) => {
    return Rule.required().custom(value => {
        const currentSlug = value && value.current;
        if (!currentSlug) {
            return true;
        }

        if (currentSlug.length >= MAX_LENGTH) {
            return `Must be less than ${MAX_LENGTH} characters`;
        }

        return true;
    });
};

export function resolveHref(
    documentType?: string,
    slug?: string
): string | undefined {
    switch (documentType) {
        case "home":
            return "/";
        case "page":
            return slug ? `/${slug}` : undefined;
        // case "project":
        //     return slug ? `/projects/${slug}` : undefined;
        default:
            console.warn("Invalid document type:", documentType);
            return undefined;
    }
}
