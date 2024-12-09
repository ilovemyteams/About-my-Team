"use client";
import { NextUIProvider } from "@nextui-org/react";
import { useLocale } from "next-intl";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";

import { readToken } from "@/sanity/lib/api";
import { getClient } from "@/sanity/lib/client";
import { settingsQuery } from "@/sanity/lib/queries";
import { useSettingsContext } from "@/src/utils/SettingsSanityContext";

export const Providers = ({ children, ...props }: ThemeProviderProps) => {
    const { setData } = useSettingsContext();
    const locale = useLocale();

    React.useEffect(() => {
        async function fetchDataSettings() {
            try {
                const client = getClient({ token: readToken });
                const settingsSanityData = await client.fetch(settingsQuery, {
                    language: locale,
                });
                setData(settingsSanityData);
            } catch (error) {
                console.error("Error fetching settings:", error);
            }
        }
        fetchDataSettings();
    }, [locale, setData]);

    return (
        <NextUIProvider>
            <NextThemesProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                {...props}
            >
                {children}
            </NextThemesProvider>
        </NextUIProvider>
    );
};
