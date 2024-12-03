import { defineLive } from "next-sanity";

import { client } from "@/sanity/lib/client";
const serverToken = process.env.NEXT_PUBLIC_SANITY_API_WRITE_TOKEN;
const browserToken = process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN;

export const { sanityFetch, SanityLive } = defineLive({
    client,
    serverToken,
    browserToken,
});
