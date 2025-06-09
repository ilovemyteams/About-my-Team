import { NextRequest, NextResponse } from "next/server";

import { sendDataToGoogleSheet } from "@/src/utils/sendDataToGoogleSheet";

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_LANDING_SPREADSHEET_ID || "";

const RANGE = "Аркуш1!A2:E2";

export async function POST(request: NextRequest) {
    const { name, email, media, whyLanding } = await request.json();
    const date = new Date().toLocaleString();

    if (request.method === "POST") {
        try {
            await sendDataToGoogleSheet(SPREADSHEET_ID, RANGE, [
                name,
                email,
                media,
                whyLanding,
                date,
            ]);
            return NextResponse.json({ message: "Data appended successfully" });
        } catch (error) {
            return NextResponse.json(
                { error: "Failed to append data to the sheet" },
                { status: 500 }
            );
        }
    }
}
