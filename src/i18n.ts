import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { LocaleType } from "@/types/LocaleType";

import { locales } from "./config";

export default getRequestConfig(async ({ locale }: { locale: string }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as LocaleType)) notFound();

    return {
        messages: (await import(`../messages/${locale}.json`)).default,
    };
});
