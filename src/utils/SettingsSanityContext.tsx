"use client";
import React, { createContext, useContext, useState } from "react";

import { FooterQueryResult, SettingsQueryResult } from "@/types/sanity.types";

interface SettingsContextType {
    data: SettingsQueryResult | null;
    setData: (data: SettingsQueryResult | null) => void;
    footerData: FooterQueryResult | null;
    setDataFooter: (data: FooterQueryResult | null) => void;
}

export const SettingsContext = createContext<SettingsContextType | undefined>(
    undefined
);

export const SettingsContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [data, setData] = useState<SettingsQueryResult | null>(null);
    const [footerData, setDataFooter] = useState<FooterQueryResult | null>(
        null
    );

    return (
        <SettingsContext.Provider
            value={{ data, setData, footerData, setDataFooter }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettingsContext = () => {
    const context = useContext(SettingsContext);
    if (context === undefined) {
        throw new Error("Something went wrong");
    }
    return context;
};
