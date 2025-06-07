import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const PREVIEW_SECRET = process.env.SANITY_PREVIEW_SECRET;

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");
    const redirectTo = searchParams.get("redirectTo") || "/";

    if (!PREVIEW_SECRET || secret !== PREVIEW_SECRET) {
        return new Response("Invalid or missing secret", { status: 401 });
    }

    draftMode().enable();
    return NextResponse.redirect(new URL(redirectTo, request.url));
}
