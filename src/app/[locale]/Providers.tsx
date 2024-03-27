import React from "react";
import { ProvidersNextUI } from "@/src/providers/ProvidersNextUI";
import { ThemeProvider } from "@/src/providers/ThemeProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ProvidersNextUI>
            <ThemeProvider>{children}</ThemeProvider>
        </ProvidersNextUI>
    );
};
