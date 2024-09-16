import React, { createContext, useContext } from "react";

import { Settings } from "@/types/sanity.types";

interface DataSettingsContextType {
    dataSettings: Settings | null;
}

export const DataSettingsContext = createContext<
    DataSettingsContextType | undefined
>(undefined);

export const DataSettingsProvider = ({
    children,
    value,
}: {
    children: React.ReactNode;
    value: DataSettingsContextType;
}) => {
    return (
        <DataSettingsContext.Provider value={value}>
            {children}
        </DataSettingsContext.Provider>
    );
};

export const useDataSettingsContext = () => {
    const context = useContext(DataSettingsContext);
    if (!context) {
        throw new Error(
            "useDataSettingsContext must be used within a DataProvider"
        );
    }
    return context;
};
