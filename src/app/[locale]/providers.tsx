"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";

export const Providers = ({ children, ...props }: ThemeProviderProps) => {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            {...props}
        >
            <NextUIProvider>{children}</NextUIProvider>
        </NextThemesProvider>
    );
};
