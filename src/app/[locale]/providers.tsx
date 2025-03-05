"use client";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";

export const Providers = ({ children, ...props }: ThemeProviderProps) => {
    return (
        <HeroUIProvider>
            <NextThemesProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                {...props}
            >
                {children}
            </NextThemesProvider>
        </HeroUIProvider>
    );
};
