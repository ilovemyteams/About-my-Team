"use client";
import { NextUIProvider } from "@nextui-org/react";
import { useLocale } from "next-intl";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";

import { readToken } from "@/sanity/lib/api";
import { getClient } from "@/sanity/lib/client";
import { footerQuery, settingsQuery } from "@/sanity/lib/queries";
import { useSettingsContext } from "@/src/utils/SettingsSanityContext";

export const Providers = ({ children, ...props }: ThemeProviderProps) => {
    const { setData } = useSettingsContext();
    const { setDataFooter } = useSettingsContext();
    const locale = useLocale();

    React.useEffect(() => {
        async function fetchDataSettings() {
            const client = getClient({ token: readToken });
            const settingsSanityData = await client.fetch(settingsQuery, {
                language: locale,
            });
            setData(settingsSanityData);
        }
        fetchDataSettings();
    }, [locale, setData]);

    React.useEffect(() => {
        async function fetcFooterhData() {
            const client = getClient({ token: readToken });
            const footerSanityData = await client.fetch(footerQuery, {
                language: locale,
            });
            setDataFooter(footerSanityData);
        }
        fetcFooterhData();
    }, [locale, setDataFooter]);

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
