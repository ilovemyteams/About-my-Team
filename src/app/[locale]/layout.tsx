import React from "react";
import { cookies } from "next/headers";
import { getTranslations } from "next-intl/server";
import {
    NextIntlClientProvider,
    useMessages,
    useTranslations,
} from "next-intl";
import localFont from "next/font/local";
import { Providers } from "./providers";
import { Header } from "@/src/components/header/Header";
import { BackgroundImages } from "@/src/components/backgroundImages/BackgroundImages";
import { Footer } from "@/src/components/footer/Footer";
import { ScrollToTopButton } from "@/src/components/scrollToTopButton/ScrollToTopButton";
import "./globals.css";

const caviar = localFont({
    src: [
        {
            path: "../../fonts/CaviarDreams/CaviarDreams.ttf",
            weight: "400",
            style: "normal",
        },

        {
            path: "../../fonts/CaviarDreams/CaviarDreams_Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-caviar",
});

const geist = localFont({
    src: [
        {
            path: "../../fonts/Geist/Geist-Light.woff2",
            weight: "300",
            style: "normal",
        },
    ],
    variable: "--font-geist",
});

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const getTranslation = await getTranslations({ locale, namespace: "Home" });

    return {
        title: getTranslation("title"),
        description: getTranslation("description"),
        openGraph: {
            title: getTranslation("title"),
            description: getTranslation("description"),
            type: "website",
            image: "/images/imageForSharing.jpeg",
        },
    };
}

export default function LocaleLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const messages = useMessages();
    const getTranslation = useTranslations("Home");
    const openGraphTitle = getTranslation("title");
    const openGraphDescription = getTranslation("description");
    const cookieStore = cookies();
    const userTheme = cookieStore.get("theme") || { value: "dark" };

    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <meta
                    name="title"
                    property="og:title"
                    content={openGraphTitle}
                />
                <meta
                    name="description"
                    property="og:description"
                    content={openGraphDescription}
                />
                <meta name="type" property="og:type" content="website" />
                <meta
                    name="image"
                    property="og:image"
                    content="https://drive.google.com/uc?export=view&id=1DDIgwyieVWglqDissESxHSCJHUsRRVbs"
                />
            </head>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <body
                    className={`${caviar.variable} ${geist.variable} relative z-[1] overflow-x-hidden
                    ${userTheme?.value === "dark" ? "bg-purple-400" : "bg-purple-400"}`}
                >
                    <Providers>
                        <BackgroundImages />
                        <Header />
                        <main>{children}</main>
                        <Footer />
                        <ScrollToTopButton />
                    </Providers>
                </body>
            </NextIntlClientProvider>
        </html>
    );
}
