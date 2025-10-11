import { NextRequest, NextResponse } from "next/server";

import { sendDataToGoogleSheet } from "@/src/utils/sendDataToGoogleSheet";

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_FAQ_SPREADSHEET_ID || "";

const RANGE = "Аркуш1!A2:C2";

export async function POST(request: NextRequest) {
    const { name, email, message, confirm } = await request.json();
    const date = new Date().toLocaleString();

    if (request.method === "POST") {
        try {
            await sendDataToGoogleSheet(SPREADSHEET_ID, RANGE, [
                name,
                email,
                message,
                confirm,
                date,
            ]);
            return NextResponse.json({ message: "Data appended successfully" });
        } catch (_error) {
            return NextResponse.json(
                { error: "Failed to append data to the sheet" },
                { status: 500 }
            );
        }
    }
}
