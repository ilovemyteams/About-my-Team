import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.ilovemyteam.online",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
            alternates: {
                languages: {
                    en: "https://www.ilovemyteam.online/en",
                    pl: "https://www.ilovemyteam.online/pl",
                    uk: "https://www.ilovemyteam.online/ua",
                },
            },
        },
    ];
}
