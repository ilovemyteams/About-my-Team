import { NextRequest, NextResponse } from "next/server";

import { removedLikes, saveLikes } from "@/src/utils/likeDataHandler";

export async function POST(request: NextRequest) {
    if (request.method === "POST") {
        const data = await request.json();

        try {
            await saveLikes(data);
            return NextResponse.json({ message: "Data appended successfully" });
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
            await removedLikes(questionSlug, userId);
            return NextResponse.json({ message: "Data deleted successfully" });
        } catch (error) {
            return NextResponse.json(
                { error: "Failed to delete data from the file" },
                { status: 500 }
            );
        }
    }
}
