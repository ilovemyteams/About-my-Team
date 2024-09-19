"use client";
import { NextUIProvider } from "@nextui-org/react";
import { useLocale } from "next-intl";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";

import { getClient } from "@/sanity/lib/client";
import { settingsQuery } from "@/sanity/lib/queries";
import { useSettingsContext } from "@/src/utils/SettingsSanityContext";

export const Providers = ({ children, ...props }: ThemeProviderProps) => {
    const { setData } = useSettingsContext();
    const locale = useLocale();

    React.useEffect(() => {
        async function fetchDataSettings() {
            const client = getClient();
            const settingsSanityData = await client.fetch(settingsQuery, {
                language: locale,
            });
            setData(settingsSanityData);
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
