import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import localFont from "next/font/local";
import { NextIntlClientProvider, useMessages } from "next-intl";
import React from "react";

import { BackgroundFigures } from "@/src/components/backgroundImages/BackgroundFigures";
import { BackgroundImages } from "@/src/components/backgroundImages/BackgroundImages";
import { CookiesComponent } from "@/src/components/cookies/Cookies";
import { Footer } from "@/src/components/footer/Footer";
import { Header } from "@/src/components/header/Header";
import { ScrollToTopButton } from "@/src/components/scrollToTopButton/ScrollToTopButton";
import { generatePageMetadata } from "@/src/utils/generateMetaData";
import { PreviousURLProvider } from "@/src/utils/PreviousURLContext";

import { Providers } from "./providers";

const GA_TAG = process.env.GA_ID || " ";
const IS_SHOWN_TO_SEARCH_ENGINES =
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? false : true;

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

const intro = localFont({
    src: [
        {
            path: "../../fonts/IntroScript/introscriptr_h2base.otf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-intro",
});

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    return generatePageMetadata({
        locale,
        namespace: "Home",
        canonical: "/",
    });
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
                {IS_SHOWN_TO_SEARCH_ENGINES && (
                    <meta name="robots" content="noindex,nofollow" />
                )}
                <meta name="type" property="og:type" content="website" />
                <meta property="og:image" content="<generated>" />
            </head>
            <GoogleAnalytics gaId={GA_TAG} />
            <NextIntlClientProvider locale={locale} messages={messages}>
                <PreviousURLProvider>
                    <body
                        className={`${caviar.variable} ${geist.variable} ${intro.variable} relative z-[1] overflow-x-visible
                   dark:bg-purple-400 dark:text-grey bg-white-100 text-greyLight`}
                    >
                        <Providers>
                            <BackgroundImages />
                            <div className="min-h-screen flex flex-col">
                                <Header />
                                <main className="flex-auto min-h-full">
                                    {modal}
                                    <div className="pt-[80px] pc:pt-[0px] pc:ml-[80px] deskxl:ml-[120px] ">
                                        <BackgroundFigures />
                                        {children}
                                    </div>
                                </main>
                                <Footer />
                            </div>

                            <ScrollToTopButton />
                            <CookiesComponent />
                        </Providers>
                    </body>
                </PreviousURLProvider>
            </NextIntlClientProvider>
        </html>
    );
}
