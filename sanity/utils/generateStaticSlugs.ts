import "server-only";

import { groq } from "next-sanity";

import { getClient } from "../lib/client";

// Used in `generateStaticParams`
export function generateStaticSlugs(type: string) {
    // Not using loadQuery as it's optimized for fetching in the RSC lifecycle
    return getClient().fetch<string[]>(
        groq`*[_type == $type && defined(slug.current)]{"slug": slug.current}`,
        { type },
        {
            next: {
                tags: [type],
            },
        }
    );
}
