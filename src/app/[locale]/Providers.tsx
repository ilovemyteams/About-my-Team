"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { NextUIProvider } from "@nextui-org/react";

export const Providers = ({ children, ...props }: ThemeProviderProps) => {
    return (
        <NextUIProvider>
            <NextThemesProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                {...props}
            >
                {children}
            </NextThemesProvider>
        </NextUIProvider>
    );
};
