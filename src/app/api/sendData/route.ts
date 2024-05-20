import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

const GOOGLE_SERVICE_PRIVATE_KEY =
    process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY || "";
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID || "";
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const RANGE = "Аркуш1!A2:G2";
const SCOPES = [
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/spreadsheets",
];

export async function POST(request: NextRequest) {
    const { name, email, telegram, linkedin, instagram, facebook, message } =
        await request.json();

    if (request.method === "POST") {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: GOOGLE_CLIENT_EMAIL,
                client_id: GOOGLE_CLIENT_ID,
                private_key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, "\n"),
            },
            scopes: SCOPES,
        });

        const sheets = google.sheets({
            auth,
            version: "v4",
        });

        try {
            await sheets.spreadsheets.values.append({
                spreadsheetId: SPREADSHEET_ID,
                range: RANGE,
                valueInputOption: "USER_ENTERED",
                requestBody: {
                    values: [
                        [
                            name,
                            email,
                            telegram,
                            linkedin,
                            instagram,
                            facebook,
                            message,
                        ],
                    ],
                },
            });
            return NextResponse.json({ message: "Data appended successfully" });
        } catch (error) {
            return NextResponse.json(
                { error: "Failed to append data to the sheet" },
                { status: 500 }
            );
        }
    }
}
