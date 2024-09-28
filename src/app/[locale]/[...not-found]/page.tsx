import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
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
