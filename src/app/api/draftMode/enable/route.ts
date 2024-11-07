import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { getClient } from "@/sanity/lib/client";
const readToken = process.env.API_READ_TOKEN;
const clientWithToken = getClient({ token: readToken });

export async function GET(request: NextRequest) {
    if (!process.env.API_READ_TOKEN) {
        return new Response(
            "Missing environment variable NEXT_PUBLIC_SANITY_API_READ_TOKEN",
            {
                status: 500,
            }
        );
    }

    const { isValid, redirectTo = "/" } = await validatePreviewUrl(
        clientWithToken,
        request.url
    );
    if (!isValid) {
        return new Response(`Invalid secret`, { status: 401 });
    }

    draftMode().enable();
    return NextResponse.redirect(new URL(redirectTo, request.url));
}
