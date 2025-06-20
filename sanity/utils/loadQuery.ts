import "server-only";

import { getClient } from "@/sanity/lib/client";
import {
    CTAQueryResult,
    FooterQueryResult,
    HomeAboutUsQueryResult,
    HomeFAQQueryResult,
    HomeHeroQueryResult,
    HomePortfolioQueryResult,
    HomeReviewsQueryResult,
    HomeServicesQueryResult,
    HomeStagesQueryResult,
    Project,
    SettingsQueryResult,
} from "@/types/sanity.types";

import { readToken } from "../lib/api";
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

const client = getClient(readToken || "");

export async function loadQuery<T>(query: string, params = {}, options = {}) {
    try {
        const data = await client.fetch<T>(query, params, options);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
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
    return loadQuery<HomeHeroQueryResult | null>(
        homeHeroQuery,
        { language },
        { next: { tags: ["home"] } }
    );
}

export function loadHomeProjects(language = "ua") {
    return loadQuery<HomePortfolioQueryResult | null>(
        homePortfolioQuery,
        { language },
        { next: { tags: ["home"] } }
    );
}
export function loadCTA(language = "ua") {
    return loadQuery<CTAQueryResult | null>(
        CTAQuery,
        { language },
        { next: { tags: ["home"] } }
    );
}

export function loadProjects(language = "ua") {
    return loadQuery<Project[] | null>(
        projectQuery,
        { language },
        { next: { tags: ["project"] } }
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

export function loadHomeReviews(language = "ua") {
    return loadQuery<HomeReviewsQueryResult>(
        homeReviewsQuery,
        { language },
        { next: { tags: ["home"] } }
    );
}
