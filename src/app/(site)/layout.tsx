import "./globals.css";

import localFont from "next/font/local";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import React from "react";

import { BackgroundImages } from "@/src/components/backgroundImages/BackgroundImages";
import { ConditionalGTM } from "@/src/components/cookies/ConditionalGTM";
import { DisableDraftMode } from "@/src/components/shared/Sanity/DisabledDraftMode";
import { SanityLive } from "@/src/sanity/lib/live";

import { Providers } from "./providers";

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

export default async function LocaleLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                {IS_SHOWN_TO_SEARCH_ENGINES && (
                    <meta name="robots" content="noindex,nofollow" />
                )}
                <meta name="type" property="og:type" content="website" />
                <meta property="og:image" content="<generated>" />
            </head>
            <ConditionalGTM />

            <body
                className={`${caviar.variable} ${geist.variable}  relative z-[1] overflow-x-visible
                   dark:bg-purple-400 dark:text-grey bg-white-100 text-greyLight`}
            >
                <Providers>
                    <BackgroundImages />
                    {children}
                    <SanityLive />
                    {(await draftMode()).isEnabled && (
                        <>
                            <VisualEditing />
                            <DisableDraftMode />
                        </>
                    )}
                </Providers>
            </body>
        </html>
    );
}
