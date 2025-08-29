import { google } from "googleapis";

const GOOGLE_SERVICE_PRIVATE_KEY =
    process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY || "";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const SCOPES = [
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/spreadsheets",
];
export async function sendTelegramNotification(message: string) {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "HTML",
        }),
    });
}

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
