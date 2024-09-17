"use client";
import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import localFont from "next/font/local";
import { NextIntlClientProvider, useMessages } from "next-intl";
import React, { useEffect, useState } from "react";

import { getClient } from "@/sanity/lib/client";
import { BackgroundFigures } from "@/src/components/backgroundImages/BackgroundFigures";
import { BackgroundImages } from "@/src/components/backgroundImages/BackgroundImages";
import { CookiesComponent } from "@/src/components/cookies/Cookies";
import { Footer } from "@/src/components/footer/Footer";
import { Header } from "@/src/components/header/Header";
import { ScrollToTopButton } from "@/src/components/scrollToTopButton/ScrollToTopButton";
import { PreviousURLProvider } from "@/src/utils/PreviousURLContext";
import { SettingsContextProvider } from "@/src/utils/SettingsSanityContext";
import { Settings } from "@/types/sanity.types";

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

export const LocaleLayout = ({
    children,
    modal,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
    params: { locale: string };
}>) => {
    const messages = useMessages();

    const [data, setData] = useState<Settings | null>(null);

    useEffect(() => {
        async function fetchDataSettings() {
            const client = getClient();
            const settingsSanityData = await client.fetch(`
  *[_type == "settings"][0]{
  ...,
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
    buttonJoinUS {..., "buttonName":buttonName[_key == $language][0].value},
    buttonOrder {..., "buttonName":buttonName[_key == $language][0].value},
    buttonBuyMeCoffee {..., "buttonName":buttonName[_key == $language][0].value}
  }
`);
            setData(settingsSanityData);
        }
        fetchDataSettings();
    }, [locale]);
    console.log(data);
    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                {IS_SHOWN_TO_SEARCH_ENGINES && (
                    <meta name="robots" content="noindex,nofollow" />
                )}
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
            </head>
            <GoogleAnalytics gaId={GA_TAG} />
            <NextIntlClientProvider locale={locale} messages={messages}>
                <PreviousURLProvider>
                    <SettingsContextProvider value={{ data }}>
                        <body
                            className={`${caviar.variable} ${geist.variable} relative z-[1] overflow-x-hidden
                   dark:bg-purple-400 dark:text-grey bg-white-100 text-greyLight`}
                        >
                            <Providers>
                                <BackgroundImages />
                                <Header />
                                <main>
                                    {modal}
                                    <div className="pt-[80px] pc:pt-[0px] pc:ml-[80px] deskxl:ml-[120px]">
                                        <BackgroundFigures />
                                        {children}
                                    </div>
                                </main>
                                <Footer />
                                <ScrollToTopButton />
                                <CookiesComponent />
                            </Providers>
                        </body>
                    </SettingsContextProvider>
                </PreviousURLProvider>
            </NextIntlClientProvider>
        </html>
    );
};
