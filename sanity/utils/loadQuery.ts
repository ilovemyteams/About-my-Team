import "server-only";

import * as queryStore from "@sanity/react-loader";
import { draftMode } from "next/headers";

import { getClient } from "@/sanity/lib/client";
import { Home } from "@/types/sanity.types";

import { readToken } from "../lib/api";
import { homePageQuery, settingsQuery } from "../lib/queries";
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
        revalidate = 60;
    }
    return queryStore.loadQuery(query, params, {
        ...options,
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

export function loadSettings() {
    return loadQuery(
        settingsQuery,
        {},
        { next: { tags: ["settings", "home"] } }
    );
}

export function loadHomePage(language = "ua") {
    return loadQuery<Home | null>(
        homePageQuery,
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
