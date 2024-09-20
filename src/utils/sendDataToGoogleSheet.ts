import { google } from "googleapis";

const GOOGLE_SERVICE_PRIVATE_KEY =
    process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY || "";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;

const SCOPES = [
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/spreadsheets",
];

export const sendDataToGoogleSheet = async (
    sheetId: string,
    range: string,
    values: string[]
) => {
    const privateKey = GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, "\n");
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: GOOGLE_CLIENT_EMAIL,
            client_id: GOOGLE_CLIENT_ID,
            private_key: privateKey,
        },
        scopes: SCOPES,
    });

    const sheets = google.sheets({
        auth,
        version: "v4",
    });

    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId: sheetId,
            range: range,
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [values],
            },
        });
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
};
