import { getTranslations } from "next-intl/server";

interface GenerateMetadataParams {
    locale: string;
    namespace: string;
    canonical: string;
}

export async function generatePageMetadata({
    locale,
    namespace,
    canonical,
}: GenerateMetadataParams) {
    const translations = await getTranslations({
        locale,
        namespace,
    });

    return {
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        alternates: {
            canonical,
            languages: {
                en: `/en${canonical}`,
                pl: `/pl${canonical}`,
                ua: canonical,
            },
        },
        title: translations("titleSEO"),
        description: translations("descriptionSEO"),
        openGraph: {
            description: translations("descriptionSEO"),
            title: translations("titleSEO"),
            type: "website",
            locale,
        },
    };
}
