import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata() {
    const locale = await getLocale();
    const getTranslation = await getTranslations({
        locale,
        namespace: "NotFound",
    });

    return {
        title: getTranslation("title"),
        description: getTranslation("info"),
        openGraph: {
            description: getTranslation("info"),
            title: getTranslation("title"),
        },
    };
}

export default function NotFoundCatchAll() {
    notFound();
}
