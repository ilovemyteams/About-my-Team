import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./config";
import { LocaleType } from "@/types/LocaleType";

export default getRequestConfig(async ({ locale }: { locale: string }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as LocaleType)) notFound();

    return {
        messages: (await import(`../messages/${locale}.json`)).default,
    };
});
