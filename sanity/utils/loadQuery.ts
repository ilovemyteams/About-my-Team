import "server-only";

// import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";

import { faqListQuery } from "../lib/queries";

// const sanityClient = client.withConfig({ token: readToken || "" });

export async function loadQuery(query: string, params = {}) {
    try {
        const { data } = await sanityFetch({ query, params });
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

export async function loadFAQsList(language = "ua", start = 1, end = 7) {
    const { data } = await sanityFetch({
        query: faqListQuery,
        params: { language, start, end },
    });
    return data;
}

// export function loadSettings(language = "ua") {
//     return loadQuery<SettingsQueryResult | null>(
//         settingsQuery,
//         { language },
//         { next: { tags: ["settings", "home"] } }
//     );
// }

// export function loadFooter(language = "ua") {
//     return loadQuery<FooterQueryResult | null>(
//         footerQuery,
//         { language },
//         { next: { tags: ["settings"] } }
//     );
// }

// export function loadHomeHero(language = "ua") {
//     return loadQuery<HomeHeroQueryResult | null>(
//         homeHeroQuery,
//         { language },
//         { next: { tags: ["home"] } }
//     );
// }

// export function loadHomeProjects(language = "ua") {
//     return loadQuery<HomePortfolioQueryResult | null>(
//         homePortfolioQuery,
//         { language },
//         { next: { tags: ["home"] } }
//     );
// }
// export function loadCTA(language = "ua") {
//     return loadQuery<CTAQueryResult | null>(
//         CTAQuery,
//         { language },
//         { next: { tags: ["home"] } }
//     );
// }

// export function loadProjects(language = "ua") {
//     return loadQuery<Project[] | null>(
//         projectQuery,
//         { language },
//         { next: { tags: ["project"] } }
//     );
// }

// export function loadServices(language = "ua") {
//     return loadQuery<HomeServicesQueryResult>(
//         homeServicesQuery,
//         { language },
//         { next: { tags: ["home"] } }
//     );
// }

// export function loadStages(language = "ua") {
//     return loadQuery<HomeStagesQueryResult>(
//         homeStagesQuery,
//         { language },
//         { next: { tags: ["home"] } }
//     );
// }
// export function loadHomeAboutUs(language = "ua") {
//     return loadQuery<HomeAboutUsQueryResult>(
//         homeAboutUsQuery,
//         { language },
//         { next: { tags: ["home"] } }
//     );
// }

// export function loadHomeFaq(language = "ua") {
//     return loadQuery<HomeFAQQueryResult>(
//         homeFAQQuery,
//         { language },
//         { next: { tags: ["home"] } }
//     );
// }

// export function loadHomeReviews(language = "ua") {
//     return loadQuery<HomeReviewsQueryResult>(
//         homeReviewsQuery,
//         { language },
//         { next: { tags: ["home"] } }
//     );
// }
