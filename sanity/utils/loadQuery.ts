import { type QueryParams } from "next-sanity";

import { client } from "../lib/client";
import {
    CTAQuery,
    footerQuery,
    homeAboutUsQuery,
    homeFAQQuery,
    homeHeroQuery,
    homePortfolioQuery,
    homeReviewsQuery,
    homeServicesQuery,
    homeStagesQuery,
    projectQuery,
    settingsQuery,
} from "../lib/queries";

export async function sanityFetch<const QueryString extends string>({
    query,
    params = {},
    revalidate = 60, // default revalidation time in seconds
    tags = [],
}: {
    query: QueryString;
    params?: QueryParams;
    revalidate?: number | false;
    tags?: string[];
}) {
    return client.fetch(query, params, {
        headers: {
            "Cache-Control": "no-cache, max-age=60, must-revalidate",
        },
        next: {
            revalidate: tags.length ? false : revalidate, // for simple, time-based revalidation
            tags,
        },
    });
}

/**
 * Loaders that are used in more than one place are declared here, otherwise they're colocated with the component
 */

export function loadSettings(language = "ua") {
    return sanityFetch({
        query: settingsQuery,
        params: { language },
        tags: ["settings", "home"],
    });
}

export function loadFooter(language = "ua") {
    return sanityFetch({
        query: footerQuery,
        params: { language },
        tags: ["settings"],
    });
}

export function loadHomeHero(language = "ua") {
    return sanityFetch({
        query: homeHeroQuery,
        params: { language },
        tags: ["home"],
    });
}

export function loadHomeProjects(language = "ua") {
    return sanityFetch({
        query: homePortfolioQuery,
        params: { language },
        tags: ["home"],
    });
}
export function loadCTA(language = "ua") {
    return sanityFetch({
        query: CTAQuery,
        params: { language },
        tags: ["home"],
    });
}

export function loadProjects(language = "ua") {
    return sanityFetch({
        query: projectQuery,
        params: { language },
        tags: ["project"],
    });
}

export function loadServices(language = "ua") {
    return sanityFetch({
        query: homeServicesQuery,
        params: { language },
        tags: ["home"],
    });
}

export function loadStages(language = "ua") {
    return sanityFetch({
        query: homeStagesQuery,
        params: { language },
        tags: ["home"],
    });
}
export function loadHomeAboutUs(language = "ua") {
    return sanityFetch({
        query: homeAboutUsQuery,
        params: { language },
        tags: ["home"],
    });
}

export function loadHomeFaq(language = "ua") {
    return sanityFetch({
        query: homeFAQQuery,
        params: { language },
        tags: ["home"],
    });
}

export function loadHomeReviews(language = "ua") {
    return sanityFetch({
        query: homeReviewsQuery,
        params: { language },
        tags: ["home"],
    });
}
