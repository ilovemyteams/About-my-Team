import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "./api";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    perspective: "published",
    ignoreBrowserTokenWarning: true,
});

export function getClient(preview?: { token?: string }) {
    if (preview && preview.token) {
        return client.withConfig({
            token: preview.token,
            useCdn: false,
            perspective: "previewDrafts",
        });
    }
    return client;
}
