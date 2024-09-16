import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const getTranslation = await getTranslations({ locale, namespace: "Home" });

    return {
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        alternates: {
            canonical: "/",
            languages: {
                en: "/en",
                pl: "/pl",
                ua: "/ua",
            },
        },
        title: getTranslation("title"),
        description: getTranslation("description"),
        openGraph: {
            description: getTranslation("description"),
            type: "website",
        },
    };
}
