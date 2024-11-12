import { createClient, type SanityClient } from "next-sanity";

import { apiVersion, dataset, projectId, studioUrl, useCdn } from "./api";

export function getClient(preview?: {
    token: string | undefined;
}): SanityClient {
    const client = createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn,
        perspective: "published",
        stega: {
            enabled: preview?.token ? true : false,
            studioUrl,
        },
    });
    console.log(client);

    if (preview) {
        if (!preview.token) {
            throw new Error("You must provide a token to preview drafts");
        }
        return client.withConfig({
            token: preview.token,
            useCdn: false,
            ignoreBrowserTokenWarning: true,
            perspective: "previewDrafts",
        });
    }
    return client;
}

export const getSanityImageConfig = () => getClient();
