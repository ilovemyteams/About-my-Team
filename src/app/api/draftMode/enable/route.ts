import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "next-sanity";

// import { readToken } from "@/sanity/lib/api";
// import { getClient } from "@/sanity/lib/client";
// const clientWithToken = getClient({ token: readToken });
import { apiVersion, dataset, projectId } from "@/sanity/lib/api";

const token = process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN;
if (!token) {
    throw new Error(
        "A secret is provided but there is no `SANITY_API_READ_TOKEN` environment variable setup."
    );
}

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token,
});
export async function GET(request: NextRequest) {
    if (!process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN) {
        return new Response(
            "Missing environment variable NEXT_PUBLIC_SANITY_API_READ_TOKEN",
            {
                status: 500,
            }
        );
    }

    const { isValid, redirectTo = "/" } = await validatePreviewUrl(
        client,
        request.url
    );
    if (!isValid) {
        return new Response("Invalid secret", { status: 401 });
    }

    draftMode().enable();
    return NextResponse.redirect(new URL(redirectTo, request.url));
}
