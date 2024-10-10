"use server";
import { google } from "googleapis";

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_FAQ_SPREADSHEET_ID || "";

const RANGE = "Аркуш2";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_SERVICE_PRIVATE_KEY =
    process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY || "";
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;

const SCOPES = [
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/drive.file",
];

const privateKey = GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, "\n");
const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: GOOGLE_CLIENT_EMAIL,
        client_id: GOOGLE_CLIENT_ID,
        private_key: privateKey,
    },
    scopes: SCOPES,
});

const sheets = google.sheets({ version: "v4", auth });
export interface LikesTypes {
    questionSlug: string;
    userId: string;
}

export const getLikes = async () => {
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: RANGE,
    });

    const data = response.data.values;

    if (!data) {
        return [] as LikesTypes[];
    }
    const likes = data.map(item => ({
        questionSlug: item[0],
        userId: item[1],
    }));
    return likes as LikesTypes[];
};

export const saveLikes = async (data: LikesTypes) => {
    try {
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: RANGE,
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [[data.questionSlug, data.userId]],
            },
        });
        return response;
    } catch (error) {
        throw new Error(`We have a problem: ${error}`);
    }
};

export const removedLikes = async (questionSlug: string, userId: string) => {
    console.log(questionSlug);
    try {
        const {
            data: { values },
        } = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: RANGE,
        });
        if (!values) return "not found element";

        const rowNumber = values.findIndex(
            item => item[0] === questionSlug && item[1] === userId
        );

        await sheets.spreadsheets.values.batchClearByDataFilter({
            spreadsheetId: SPREADSHEET_ID,
            requestBody: {
                dataFilters: [
                    {
                        gridRange: {
                            sheetId: 1951686548,
                            startRowIndex: rowNumber,
                            endRowIndex: rowNumber + 1,
                        },
                    },
                ],
            },
        });

        return "Values have been successfully delete";
    } catch (error) {
        throw new Error(`Error: ${error}`);
    }
};
