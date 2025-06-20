import { createClient, type SanityClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "./api";
export function getClient(token?: string): SanityClient {
    return createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn,
        token,
    });
}

export const getSanityImageConfig = () => getClient();
