import React, { createContext, useContext } from "react";

import { Settings } from "@/types/sanity.types";
interface SettingsContextType {
    data: Settings | null;
}

export const SettingsContext = createContext<SettingsContextType | undefined>(
    undefined
);

export const SettingsContextProvider = ({
    children,
    value,
}: {
    children: React.ReactNode;
    value: SettingsContextType;
}) => {
    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettingsContext = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error(
            "useDataSettingsContext must be used within a DataProvider"
        );
    }
    return context;
};
