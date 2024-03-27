import { ProvidersNextUI } from "@/src/providers/ProvidersNextUI";
import { ThemeProvider } from "@/src/providers/ThemeProvider";
import React from "react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ProvidersNextUI>
            <ThemeProvider>{children}</ThemeProvider>
        </ProvidersNextUI>
    );
};
