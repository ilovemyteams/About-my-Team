import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { readToken } from "@/sanity/lib/api";
import { getClient } from "@/sanity/lib/client";

const clientWithToken = getClient({ token: readToken });

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
        clientWithToken,
        request.url
    );

    if (!isValid) {
        return new Response(`Invalid secret ${isValid}`, { status: 401 });
    }

    draftMode().enable();
    return NextResponse.redirect(new URL(redirectTo, request.url));
}
