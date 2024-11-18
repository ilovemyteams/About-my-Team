import "server-only";

import * as queryStore from "@sanity/react-loader";
import { draftMode } from "next/headers";

import { getClient } from "@/sanity/lib/client";
import {
    AllMembersQueryResult,
    CategoryNamesQueryResult,
    Home,
    HomeAboutUsQueryResult,
    HomeFAQQueryResult,
    HomeReviewsQueryResult,
    HomeServicesQueryResult,
    HomeStagesQueryResult,
    HomeTeamQueryResult,
    ProjectQueryResult,
    SettingsQueryResult,
} from "@/types/sanity.types";
import {
    FooterQueryResult,
    HomeProps,
    PortfolioHomeProps,
} from "@/types/sanityDataPropsTypes";

import { readToken } from "../lib/api";
import {
    allMembersQuery,
    categoryNamesQuery,
    CTAQuery,
    footerQuery,
    homeAboutUsQuery,
    homeFAQQuery,
    homeHeroQuery,
    homePortfolioQuery,
    homeReviewsQuery,
    homeServicesQuery,
    homeStagesQuery,
    homeTeamQuery,
    projectQuery,
    settingsQuery,
} from "../lib/queries";
const serverClient = getClient({ token: readToken });

/**
 * Sets the server client for the query store, doing it here ensures that all data fetching in production
 * happens on the server and not on the client.
 * Live mode in `sanity/presentation` still works, as it uses the `useLiveMode` hook to update `useQuery` instances with
 * live draft content using `postMessage`.
 */
queryStore.setServerClient(serverClient);

const usingCdn = serverClient.config().useCdn;
// Automatically handle draft mode
export const loadQuery = ((query, params = {}, options = {}) => {
    const {
        perspective = draftMode().isEnabled ? "previewDrafts" : "published",
    } = options;
    // Don't cache by default
    let revalidate: number | boolean = 0;
    // If `next.tags` is set, and we're not using the CDN, then it's safe to cache
    if (!usingCdn && Array.isArray(options.next?.tags)) {
        revalidate = false;
    } else if (usingCdn) {
        revalidate = 0;
    }
    return queryStore.loadQuery(query, params, {
        ...options,
        headers: {
            "Cache-Control": "no-cache",
        },
        next: {
            revalidate,
            ...(options.next || {}),
        },
        perspective,
        // Enable stega if in Draft Mode, to enable overlays when outside Sanity Studio
        stega: draftMode().isEnabled,
    });
}) satisfies typeof queryStore.loadQuery;

/**
 * Loaders that are used in more than one place are declared here, otherwise they're colocated with the component
 */

export function loadSettings(language = "ua") {
    return loadQuery<SettingsQueryResult | null>(
        settingsQuery,
        { language },
        { next: { tags: ["settings", "home"] } }
    );
}

export function loadFooter(language = "ua") {
    return loadQuery<FooterQueryResult | null>(
        footerQuery,
        { language },
        { next: { tags: ["settings"] } }
    );
}

export function loadHomeHero(language = "ua") {
    return loadQuery<HomeProps | null>(
        homeHeroQuery,
        { language },
        { next: { tags: ["home"] } }
    );
}

export function loadHomeProjects(language = "ua") {
    return loadQuery<PortfolioHomeProps | null>(
        homePortfolioQuery,
        { language },
        { next: { tags: ["home"] } }
    );
}
export function loadCTA(language = "ua") {
    return loadQuery<Home | null>(
        CTAQuery,
        { language },
        { next: { tags: ["home"] } }
    );
}

export function loadProjects(language = "ua") {
    return loadQuery<ProjectQueryResult | null>(
        projectQuery,
        { language },
        { next: { tags: ["project"] } }
    );
}

export function loadMembers(language = "ua", category = "") {
    return loadQuery<AllMembersQueryResult | null>(
        allMembersQuery,
        { language, category },
        { next: { tags: ["team"] } }
    );
}

export function loadCategoryNames(language = "ua") {
    return loadQuery<CategoryNamesQueryResult | null>(
        categoryNamesQuery,
        { language },
        { next: { tags: ["team"] } }
    );
}

export function loadServices(language = "ua") {
    return loadQuery<HomeServicesQueryResult>(
        homeServicesQuery,
        { language },
        { next: { tags: ["home"] } }
    );
}

export function loadStages(language = "ua") {
    return loadQuery<HomeStagesQueryResult>(
        homeStagesQuery,
        { language },
        { next: { tags: ["home"] } }
    );
}
export function loadHomeAboutUs(language = "ua") {
    return loadQuery<HomeAboutUsQueryResult>(
        homeAboutUsQuery,
        { language },
        { next: { tags: ["home"] } }
    );
}

export function loadHomeFaq(language = "ua") {
    return loadQuery<HomeFAQQueryResult>(
        homeFAQQuery,
        { language },
        { next: { tags: ["home"] } }
    );
}
export function loadHomeTeam(language = "ua") {
    return loadQuery<HomeTeamQueryResult>(
        homeTeamQuery,
        { language },
        { next: { tags: ["home"] } }
    );
}

export function loadHomeReviews(language = "ua") {
    return loadQuery<HomeReviewsQueryResult>(
        homeReviewsQuery,
        { language },
        { next: { tags: ["home"] } }
    );
}

// export function loadProject(slug: string) {
//     return loadQuery<ProjectPayload | null>(
//         projectBySlugQuery,
//         { slug },
//         { next: { tags: [`project:${slug}`] } }
//     );
// }

// export function loadPage(slug: string) {
//     return loadQuery<PagePayload | null>(
//         pagesBySlugQuery,
//         { slug },
//         { next: { tags: [`page:${slug}`] } }
//     );
// }
