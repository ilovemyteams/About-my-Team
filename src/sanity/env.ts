export const apiVersion =
    process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-06-21";

export const dataset = assertValue(
    process.env.NEXT_PUBLIC_SANITY_DATASET,
    "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
    if (v === undefined) {
        throw new Error(errorMessage);
    }

    return v;
}

export const readToken = process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN || "";

export const writeToken = process.env.NEXT_PUBLIC_SANITY_WRITE_TOKEN || "";

export const PREVIEW_URL =
    process.env.NEXT_PUBLIC_SANITY_STUDIO_PREVIEW_URL ||
    "http://localhost:3000";

// Used to generate URLs for previewing your content
export const DRAFT_MODE_ROUTE = "/api/draft";

/**
 * Used to configure edit intent links, for Presentation Mode, as well as to configure where the Studio is mounted in the router.
 */
