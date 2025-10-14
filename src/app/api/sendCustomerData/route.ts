import { NextRequest, NextResponse } from "next/server";

import {
    sendDataToGoogleSheet,
    sendTelegramNotification,
} from "@/src/utils/sendDataToGoogleSheet";

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID || "";

const RANGE = "Аркуш1!A2:G2";

export async function POST(request: NextRequest) {
    const { name, email, mediaType, mediaLink, message, source, confirm } =
        await request.json();

    const date = new Date().toLocaleString();

    if (request.method === "POST") {
        try {
            await sendDataToGoogleSheet(SPREADSHEET_ID, RANGE, [
                name,
                email,
                mediaType,
                mediaLink,
                message,
                source,
                date,
                confirm,
            ]);
            await sendTelegramNotification(
                `📩 Нова заявка!\n\n` +
                    `👤 Ім'я: ${name}\n` +
                    `✉️ Email: ${email}\n` +
                    `🔗 Контакт: ${mediaType} - ${mediaLink}\n` +
                    `💬 Повідомлення: ${message}\n` +
                    `📌 Тема: ${source}\n` +
                    `🕒 Дата: ${date}\n` +
                    `✅ Підтвердження: ${confirm ? "Так" : "Ні"}`
            );
            return NextResponse.json({ message: "Data appended successfully" });
        } catch (_error) {
            return NextResponse.json(
                { error: "Failed to append data to the sheet" },
                { status: 500 }
            );
        }
    }
}
