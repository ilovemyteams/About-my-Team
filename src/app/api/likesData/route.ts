import { NextRequest, NextResponse } from "next/server";

import { removedLikes, saveLikes } from "@/src/utils/jsonDataHandler";

export async function POST(request: NextRequest) {
    if (request.method === "POST") {
        const data = await request.json();

        try {
            saveLikes(data);
            return NextResponse.json({ message: "Success" });
        } catch (error) {
            return NextResponse.json(
                { error: "Failed to append data to the file" },
                { status: 500 }
            );
        }
    }
}

export async function DELETE(request: NextRequest) {
    if (request.method === "DELETE") {
        const searchParams = request.nextUrl.searchParams;
        const questionSlug = searchParams.get("questionSlug") || "";
        const userId = searchParams.get("userId") || "";

        try {
            removedLikes(questionSlug, userId);
            return NextResponse.json({ message: "Success" });
        } catch (error) {
            return NextResponse.json(
                { error: "Failed to append data to the file" },
                { status: 500 }
            );
        }
    }
}
