import React from "react";
import { ProvidersNextUI } from "@/src/components/appProviders/ProvidersNextUI";
import { ThemeProvider } from "@/src/components/appProviders/ThemeProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ProvidersNextUI>
            <ThemeProvider>{children}</ThemeProvider>
        </ProvidersNextUI>
    );
};
