import { GoogleSpreadsheet } from "google-spreadsheet";
import { jwt } from "./googleJWT";

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID || "";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID, jwt);

export const appendToSheet = async (data: Record<string, string>) => {
    try {
        await doc.loadInfo(); // loads document properties and worksheets
        const sheet = doc.sheetsByIndex[0]; // assuming the first sheet is where you want to append data
        await sheet.addRow(data);
    } catch (error) {
        console.log(error);
    }
};
