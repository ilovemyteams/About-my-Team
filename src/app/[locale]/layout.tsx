import React from "react";
import { getTranslations } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";
import localFont from "next/font/local";
import { Providers } from "./providers";
import { Header } from "@/src/components/header/Header";
import { BackgroundImages } from "@/src/components/backgroundImages/BackgroundImages";
import { Footer } from "@/src/components/footer/Footer";
import { ScrollToTopButton } from "@/src/components/scrollToTopButton/ScrollToTopButton";
import { CookiesComponent } from "@/src/components/cookies/Cookies";
import "./globals.css";
import { PreviousURLProvider } from "@/src/utils/PreviousURLContext";
import Script from "next/script";

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

export default function LocaleLayout({
    children,
    modal,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
    params: { locale: string };
}>) {
    const messages = useMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <meta
                    name="title"
                    property="og:title"
                    content="i love my team"
                />
                <meta name="type" property="og:type" content="website" />
                <meta
                    name="image"
                    property="og:image"
                    content="/images/imageForSharing.jpeg"
                />
                {/* Google Tag Manager */}
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-TVFD6CM2B4"
                ></Script>
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-TVFD6CM2B4');
                  `}
                </Script>
                {/* End Google Tag Manager */}
            </head>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <PreviousURLProvider>
                    <body
                        className={`${caviar.variable} ${geist.variable} relative z-[1] overflow-x-hidden
                   dark:bg-purple-400 dark:text-grey bg-white-100 text-greyLight`}
                    >
                        <Providers>
                            <BackgroundImages />
                            <Header />
                            <main>
                                {modal}
                                {children}
                            </main>
                            <Footer />
                            <ScrollToTopButton />
                            <CookiesComponent />
                        </Providers>
                    </body>
                </PreviousURLProvider>
            </NextIntlClientProvider>
        </html>
    );
}
